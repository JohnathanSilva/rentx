import React, { useEffect, useState } from 'react';
import { StatusBar, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'styled-components';
import { AntDesign } from '@expo/vector-icons';

import { BackButton } from '../../components/BackButton';
import { CarDTO } from '../../dtos/CarDTO';
import { api } from '../../services/api';
import { CardCar } from '../../components/CardCar';
import { Load } from '../../components/Load';

import { 
    Container, 
    Header, 
    ButtonWrapper, 
    Title, 
    SubTitle, 
    Content, 
    Schedulings, 
    SchedulingsTitle, 
    SchedulingsQuantity,
    CarWrapper,
    CardCarFooter,
    CardCarFooterTitle,
    CardCarFooterPeriod,
    CardCarFooterDate
} from './styles';

interface CarProps{
    id: string;
    user_id:string;
    car: CarDTO;
    startDate: string;
    endDate: string;
}

export function MyCars(){
    const [cars, setCars] = useState<CarProps[]>([]);
    const [loading, setLoading] = useState(true);
    const theme = useTheme();
    const navegation = useNavigation();

    function handleBack(){
        navegation.goBack();
    } 

    useEffect(() => {
        async function fecthCars() {
            try {
                const response = await api.get('/schedules_byuser?user_id=1');
                setCars(response.data);
            } catch (error) {
                console.log(error);
            }finally{
                setLoading(false);
            }
        }

        fecthCars();
    }, []);

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
                    Seus agendamentos,{'\n'}
                    estão aqui.
                </Title>

                <SubTitle>Conforto, segurança e praticidade.</SubTitle>
            </Header>
            <Content>
                <Schedulings>
                    <SchedulingsTitle>Agendamentos feitos</SchedulingsTitle>
                    <SchedulingsQuantity>{cars.length}</SchedulingsQuantity>
                </Schedulings>
                { loading ? <Load /> 
                    :
                    <FlatList 
                        data={cars}
                        keyExtractor={item => item.id}
                        showsVerticalScrollIndicator={false}
                        renderItem={({item}) => (
                            <CarWrapper> 
                                <CardCar data={item.car} />
                                <CardCarFooter>
                                    <CardCarFooterTitle>Período</CardCarFooterTitle>
                                    <CardCarFooterPeriod>
                                        <CardCarFooterDate>{item.startDate}</CardCarFooterDate>
                                            <AntDesign 
                                                name="arrowright"
                                                size={20}
                                                color={theme.colors.text}
                                                style={{ marginHorizontal: 10 }}
                                            />
                                        <CardCarFooterDate>{item.endDate}</CardCarFooterDate>
                                    </CardCarFooterPeriod>
                                </CardCarFooter>
                            </CarWrapper> 
                        )}
                    />
                }
            </Content>
        </Container>
    );
}