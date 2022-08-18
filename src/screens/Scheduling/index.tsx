import React, { useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Alert, StatusBar } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import { useTheme } from 'styled-components';

import { format } from 'date-fns';

import ArrowSvg from '../../assets/arrow.svg';

import { BackButton } from '../../components/BackButton';
import { Button } from '../../components/Button';
import { Calendar, DayProps, generateInterval, MarkedDatesProps } from '../../components/Calendar';
import { getPlatformDate } from '../../utils/getPlatformDate';
import { CarDTO } from '../../dtos/CarDTO';

import { Container, Header, ButtonWrapper, Title, DateInfo, Text, DateRent, DateValue, Content, Footer} from './styles';

interface RentalPeriod {
    startFormatted: string;
    endFormatted: string;
}

interface Params{
    car: CarDTO
}

export function Scheduling() {
    const [lastSelectedDate, setLastSelectedDate] = useState<DayProps>({} as DayProps);
    const [markedDates, setMarkedDates] = useState<MarkedDatesProps>( {} as MarkedDatesProps);
    const [rentalPeriod, setRentalPeriod] = useState<RentalPeriod>({} as RentalPeriod);
    const theme = useTheme();
    const navigation = useNavigation<any>();
    const route = useRoute();
    const { car } = route.params as Params;

    function handleConfirmRental(){
        if(!rentalPeriod.startFormatted || !rentalPeriod.endFormatted){
           Alert.alert('Selecione o intervalo para alugar.');
        }else {
           navigation.navigate('SchedulingDetails', {
            car, 
            dates: Object.keys(markedDates),
           });
        }
    }  

    function handleBack(){
        navigation.goBack();
    }

    function handleChangeDate(date : DayProps){
        let start = !lastSelectedDate.timestamp ? date : lastSelectedDate;
        let end = date;

        if( start.timestamp > end.timestamp){
            start = end;
            end = start;
        }

        setLastSelectedDate(end);
        const interval = generateInterval(start, end);
        setMarkedDates(interval);

        const firstDate = Object.keys(interval)[0];
        const endDate = Object.keys(interval)[Object.keys(interval).length - 1];

        setRentalPeriod({
            startFormatted: format(getPlatformDate(new Date(firstDate)),'dd/MM/yyyy'),
            endFormatted: format(getPlatformDate(new Date(endDate)), 'dd/MM/yyyy')
        });
    }

    return(
        <Container>
             <StatusBar 
                 barStyle="light-content"
                 backgroundColor="transparent"
                 translucent
            />
            <Header>
                <ButtonWrapper>
                    <BackButton 
                        onPress={handleBack} 
                        color={theme.colors.shape}
                    />
                </ButtonWrapper>

                <Title>
                    Escolha uma {'\n'}
                    data de início e {'\n'}
                    fim do aluguel {'\n'}
                </Title>
                <DateInfo>
                    <DateRent>
                        <Text>De</Text>
                        <DateValue selectedDate={!!rentalPeriod.startFormatted}>
                            {rentalPeriod.startFormatted}
                        </DateValue>
                    </DateRent>
                    
                    <ArrowSvg 
                        width={RFValue(48)}
                        height={RFValue(10)}
                    />
                    
                    <DateRent>
                        <Text>Até</Text>
                        <DateValue selectedDate={!!rentalPeriod.endFormatted}>
                            {rentalPeriod.endFormatted}
                        </DateValue>
                    </DateRent>
                </DateInfo>
            </Header>
            <Content>
                <Calendar 
                    markedDates={markedDates}
                    onDayPress={handleChangeDate}
                />
            </Content>
            <Footer>
                <Button 
                    title='Confirmar'
                    color={!rentalPeriod.startFormatted ? theme.colors.main_light : theme.colors.main}
                    onPress={handleConfirmRental}
                />
            </Footer>
        </Container>
    );
}