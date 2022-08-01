import React, { useEffect, useState } from 'react';
import { StatusBar } from 'react-native';
import { useTheme } from 'styled-components';
import { useNavigation } from '@react-navigation/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Ionicons } from '@expo/vector-icons';

import LogoSvg from '../../assets/logo.svg';

import { api }  from '../../services/api'

import { CardCar } from '../../components/CardCar';
import { Load } from '../../components/Load';
import { CarDTO } from '../../dtos/CarDTO';

import { Container, Header, TotalCars, CarList, MyCarsButton } from './styles'; 

export function Home() {
    const [cars, setCars] = useState([]);
    const [loading, setLoading] = useState(true);
    const theme = useTheme();
    const navigation = useNavigation();

    function handleCarDetails( car: CarDTO){
        navigation.navigate('CarDetails', { car });
    }

    function handleMyCars(){
        navigation.navigate('MyCars');
    }

    useEffect(() => {
        async function fetchCars() {
            try {
                const response = await api.get('/cars');
                setCars(response.data);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        }
        fetchCars();
    },[]);

    return (
        <Container>
            <StatusBar 
                 barStyle="light-content"
                 backgroundColor="transparent"
                 translucent
            />
            <Header>
                <LogoSvg 
                    width={RFValue(108)}
                    height={RFValue(12)}
                />
                <TotalCars>Total de 12 carros</TotalCars>
            </Header>
            { loading ? <Load /> 
                :
                <CarList 
                    data={cars}
                    keyExtractor={item => String(item.id)}
                    renderItem={    
                                ({ item}) => 
                                    <CardCar data={item} 
                                    onPress={() => handleCarDetails(item)} />
                                }
                />
            }
            <MyCarsButton>
                <Ionicons
                    name="ios-car-sport"
                    size={32}
                    color={theme.colors.shape}
                    onPress={handleMyCars}
                /> 
            </MyCarsButton>
        </Container>
    );
}
