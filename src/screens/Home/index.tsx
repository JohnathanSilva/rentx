import React, { useEffect, useState } from 'react';
import { StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RFValue } from 'react-native-responsive-fontsize';

import LogoSvg from '../../assets/logo.svg';

import { api }  from '../../services/api'

import { CardCar } from '../../components/CardCar';
import { Load } from '../../components/Load';

import { Container, Header, TotalCars, CarList} from './styles'; 

export function Home() {
    const [cars, setCars] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigation = useNavigation();

    const carData = {
        brand: 'Audi',
        name: 'RS 5 Coupé',
        rent:{
            period: 'Ao dia',
            price: 120,
        },
        thumbnail: 'https://www.webmotors.com.br/imagens/prod/348415/AUDI_RS5_2.9_V6_TFSI_GASOLINA_SPORTBACK_QUATTRO_STRONIC_34841515342559092.webp?s=fill&w=236&h=135&q=70&t=true'
    }
    
    function handleCarDetails(){
        navigation.navigate('CarDetails');
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
                                    onPress={handleCarDetails} />
                                }
                />
            }
        </Container>
    );
}
