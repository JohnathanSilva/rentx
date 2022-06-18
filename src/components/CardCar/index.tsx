import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';

import GasolineSvg from '../../assets/gasoline.svg';

import theme from '../../styles/theme';

import { Container, Details, Brand, NameCar, About, Rent, Period, Price, Type, CarImage} from './styles'; 

interface CarData {
    brand: string;
    name: string;
    rent: {
        period: string;
        price: number;
    },
    thumbnail: string;
}

interface Props {
    data: CarData;
}

export function CardCar ({data}: Props){
    return(
        <Container>
            <Details>
                <Brand>{data.brand}</Brand>
                <NameCar>{data.name}</NameCar>
                <About>
                    <Rent>
                        <Period>{data.rent.period}</Period>
                        <Price>{`R$ ${data.rent.price}`}</Price>
                    </Rent>
                    <Type>
                        <GasolineSvg 
                            width={RFValue(20)}
                            height={RFValue(20)}
                        />
                    </Type>
                </About>
            </Details>
            <CarImage 
                source={{uri: data.thumbnail}} 
                resizeMode="contain"
            />
        </Container> 
    );
}