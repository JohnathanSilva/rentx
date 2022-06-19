import React from 'react';

import { BackButton } from '../../components/BackButton';
import { ImageSlide } from '../../components/ImageSlider';

import { Container, Header, CarImages } from './styles';

export function CarDetails(){
    return(
        <Container>
            <Header>
                <BackButton onPress={() => {}} />
            </Header>

            <CarImages>
                <ImageSlide 
                    imageUrl={['https://www.webmotors.com.br/imagens/prod/348415/AUDI_RS5_2.9_V6_TFSI_GASOLINA_SPORTBACK_QUATTRO_STRONIC_34841515342559092.webp?s=fill&w=236&h=135&q=70&t=true']}
                />
            </CarImages>

        </Container>
    );
}