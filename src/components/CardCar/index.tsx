import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';

import GasolineSvg from '../../assets/gasoline.svg';

import { CarDTO } from '../../dtos/CarDTO';

import { Container, Details, Brand, NameCar, About, Rent, Period, Price, Type, CarImage} from './styles'; 


interface Props extends RectButtonProps {
    data: CarDTO;
}

export function CardCar ({ data, ...rest }: Props){
    return(
        <Container {...rest}> 
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