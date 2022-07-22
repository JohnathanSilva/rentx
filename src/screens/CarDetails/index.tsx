import React from 'react';
import { StatusBar } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import { Accessory } from '../../components/Accessory';
import { BackButton } from '../../components/BackButton';
import { ImageSlide } from '../../components/ImageSlider';

import SpeedSvg from '../../assets/speed.svg';
import ArrowSvg from '../../assets/arrow.svg';
import ForceSvg from '../../assets/force.svg';
import GasolineSvg from '../../assets/gasoline.svg';
import ExchangeSvg from '../../assets/exchange.svg';
import PeopleSvg from '../../assets/people.svg';

import { Button } from '../../components/Button';
import { CarDTO } from '../../dtos/CarDTO';

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
    About,
    Footer 
} from './styles';

interface Params{
    car: CarDTO
}

export function CarDetails(){
    const navigation = useNavigation();
    const route = useRoute();
    const { car } = route.params as Params; 
 
    function handleConfirmRental(){
        navigation.navigate('Scheduling');
    }

    function handleBack(){
        navigation.goBack();
    }

    return(
        <Container>
            <StatusBar 
                 barStyle="dark-content"
                 backgroundColor="transparent"
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
                               icon={SpeedSvg}
                           />
                        ))
                   }
                </Accessories>
                <About>{car.about}</About>
            </Content>
            <Footer>
                <Button 
                   title='Escolher período do aluguel'
                   onPress={handleConfirmRental}
                />
            </Footer>
        </Container>
    );
}