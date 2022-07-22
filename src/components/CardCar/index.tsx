import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';

import { CarDTO } from '../../dtos/CarDTO';
import { getAccessoryIcon } from '../../utils/getAccessoryIcon';

import { Container, Details, Brand, NameCar, About, Rent, Period, Price, Type, CarImage} from './styles'; 


interface Props extends RectButtonProps {
    data: CarDTO;
}

export function CardCar ({ data, ...rest }: Props){
    const MotorIcon = getAccessoryIcon(data.fuel_type);

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
                        <MotorIcon 
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