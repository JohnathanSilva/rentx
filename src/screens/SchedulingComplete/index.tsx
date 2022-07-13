import React from 'react';
import { useWindowDimensions } from 'react-native';

import LogoSvg from '../../assets/logo_background_gray.svg';
import DoneSvg from '../../assets/done.svg';

import { ConfirmButton } from '../../components/ConfirmButton';

import { Conatiner, Content, Title, TextMessage, Footer} from './styles';

export function SchedulingComplete(){
    const { width } = useWindowDimensions();
    return(
        <Conatiner>
            <LogoSvg 
                width={width}
            />
            <Content>
                <DoneSvg 
                    width={80}
                    height={80}
                />
                <Title>Carro alugado!</Title>
                <TextMessage>  
                    Agora você só precisa ir {'\n'}
                    até a concessionária da RENTX {'\n'}
                    pegar o seu automóvel.
                </TextMessage>
            </Content>
            <Footer>
                <ConfirmButton title='Ok' />
            </Footer>
        </Conatiner>
    );
}