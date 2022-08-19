import React from 'react';
import { StatusBar } from 'react-native';
import { useWindowDimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import LogoSvg from '../../assets/logo_background_gray.svg';
import DoneSvg from '../../assets/done.svg';

import { ConfirmButton } from '../../components/ConfirmButton';

import { Container, Content, Title, TextMessage, Footer} from './styles';

export function SchedulingComplete(){
    const { width } = useWindowDimensions();
    const navigation = useNavigation<any>();

    function handleBackHome(){
        navigation.navigate('Home');
    }

    return(
        <Container>
            <StatusBar 
                 barStyle="light-content"
                 backgroundColor="transparent"
                 translucent
            />
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
                <ConfirmButton title='Ok' onPress={handleBackHome}/>
            </Footer>
        </Container>
    );
}