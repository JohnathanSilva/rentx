import React from 'react';
import { StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RFValue } from 'react-native-responsive-fontsize';

import LogoSvg from '../../assets/logo.svg';

import { CardCar } from '../../components/CardCar';

import { Container, Header, TotalCars, CarList} from './styles'; 

export function Home() {
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
            <CarList 
                data={[1,2,3,4,5,6,7]}
                keyExtractor={item => String(item)}
                renderItem={    
                            ({ item}) => 
                                <CardCar data={carData} 
                                onPress={handleCarDetails} />
                            }
            />
        </Container>
    );
}
