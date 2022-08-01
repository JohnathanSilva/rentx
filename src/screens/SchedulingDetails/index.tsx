import React, { useEffect, useState } from 'react';
import { Alert, StatusBar } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useTheme } from 'styled-components';
import { useNavigation, useRoute } from '@react-navigation/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { format } from 'date-fns';

import { Accessory } from '../../components/Accessory';
import { BackButton } from '../../components/BackButton';
import { ImageSlide } from '../../components/ImageSlider';
import { Button } from '../../components/Button';
import { getAccessoryIcon } from '../../utils/getAccessoryIcon';
import { CarDTO } from '../../dtos/CarDTO';
import { getPlatformDate } from '../../utils/getPlatformDate';
import { api } from '../../services/api';

import { 
    Container, 
    Header, 
    CarImages, 
    Content, 
    Details, 
    Description, 
    Brand, 
    Name, 
    Rent, 
    Period, 
    Price, 
    Accessories, 
    RentalPeriod,
    CalendarIcon,
    DateInfo,
    DateTitle,
    DateValue,
    RentalPrice,
    RentalTitle,
    RentalPriceDetails,
    RentalPriceQuota,
    RentalPriceTotal, 
    Footer,
} from './styles';


interface Params {
    car: CarDTO;
    dates: string[];
}

interface RentalPeriod {
    start: string;
    end: string;
}

export function SchedulingDetails(){
    const [rentalPeriod, setRentalPeriod] = useState<RentalPeriod>({} as RentalPeriod);
    const theme = useTheme();
    const navigation = useNavigation();
    const route = useRoute();
    const { car, dates } = route.params as Params;

    const price = Number(car.rent.price);

    const rentTotal = Number(dates.length * price);

    async function handleConfirmRental(){
        const response = await api.get(`/schedules_bycars/${car.id}`);

        const unavailable_dates = [
            ...response.data.unavailable_dates,
            ...dates,
        ];

        await api.post('schedules_byuser', {
            user_id: 1,
            car,
            startDate: format(getPlatformDate(new Date(dates[0])), 'dd/MM/yyyy'),
            endDate: format(getPlatformDate(new Date(dates[dates.length -1])), 'dd/MM/yyyy')
        });

        api.put(`/schedules_bycars/${car.id}`,{
            id: car.id,
            unavailable_dates
        })
        .then(() => navigation.navigate('SchedulingComplete', { car }))
        .catch(() => Alert.alert('Não foi possivel confirmar o agendamento.'));
    }

    function handleBack(){
        navigation.goBack();
    }

    useEffect(() => {
        setRentalPeriod({
            start: format(getPlatformDate(new Date(dates[0])), 'dd/MM/yyyy'),
            end: format(getPlatformDate(new Date(dates[dates.length -1])), 'dd/MM/yyyy')
        })
    }, []);

    return(
        <Container>
            <StatusBar 
                barStyle='dark-content'
                backgroundColor='transparent'
                translucent
            />
            <Header>
                <BackButton onPress={handleBack} />
            </Header>

            <CarImages>
                <ImageSlide 
                    imageUrl={car.photos}
                />
            </CarImages>
            <Content>
                <Details>
                    <Description>
                    <Brand>{car.brand}</Brand>
                    <Name>{car.name}</Name>
                    </Description>
                <Rent>
                    <Period>{car.rent.period}</Period>
                    <Price>R$ {car.rent.price}</Price>
                </Rent>
                </Details>
                <Accessories>
                    {   
                        car.accessories.map(accessory => (
                            <Accessory 
                                key={accessory.type}
                                name={accessory.name}
                                icon={getAccessoryIcon(accessory.type)}
                            />
                        ))
                    }
                </Accessories>
                <RentalPeriod>
                    <CalendarIcon>
                        <Feather 
                            name='calendar'
                            size={RFValue(24)}
                            color={theme.colors.shape}
                        />
                    </CalendarIcon>
                    <DateInfo>
                        <DateTitle>DE</DateTitle>
                        <DateValue>{rentalPeriod.start}</DateValue>
                    </DateInfo>
                    <Feather 
                        name='chevron-right'
                        size={RFValue(10)}
                        color={theme.colors.text_detail}
                    />
                    <DateInfo>
                        <DateTitle>ATÉ</DateTitle>
                        <DateValue>{rentalPeriod.end}</DateValue>
                    </DateInfo>
                </RentalPeriod>
                <RentalPrice>
                    <RentalTitle>Total</RentalTitle>
                    <RentalPriceDetails>
                        <RentalPriceQuota>{`R$ ${car.rent.price} x${dates.length} diárias`}</RentalPriceQuota>
                        <RentalPriceTotal>R$ {rentTotal}</RentalPriceTotal>
                    </RentalPriceDetails>
                </RentalPrice>
            </Content>
            <Footer>
                <Button 
                    title='Alugar agora'
                    color={theme.colors.success}
                    onPress={handleConfirmRental}
                />
            </Footer>
        </Container>
    );
}