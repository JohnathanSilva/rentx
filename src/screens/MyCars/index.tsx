import React, { useEffect, useState } from 'react';
import { StatusBar, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'styled-components';

import { BackButton } from '../../components/BackButton';
import { CarDTO } from '../../dtos/CarDTO';
import { api } from '../../services/api';

import { 
    Container, 
    Header, 
    ButtonWrapper, 
    Title, 
    SubTitle, 
    Content, 
    Schedulings, 
    SchedulingsTitle, 
    SchedulingsQuantity 
} from './styles';
import { CardCar } from '../../components/CardCar';

interface CarProps{
    id: string;
    user_id:string;
    car: CarDTO;
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
                    <SchedulingsQuantity>05</SchedulingsQuantity>
                </Schedulings>
                <FlatList 
                    data={cars}
                    keyExtractor={item => item.id}
                    showsVerticalScrollIndicator={false}
                    renderItem={({item}) => (
                        <CardCar data={item.car} />
                    )}
                />
            </Content>
        </Container>
    );
}