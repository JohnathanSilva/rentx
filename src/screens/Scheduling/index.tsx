import React from 'react';
import { StatusBar } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import { useTheme } from 'styled-components';

import ArrowSvg from '../../assets/arrow.svg';

import { BackButton } from '../../components/BackButton';
import { Button } from '../../components/Button';
import { Calendar } from '../../components/Calendar';

import { Container, Header, Title, DateInfo, Text, DateRent, DateValue, Content, Footer} from './styles';

export function Scheduling() {
    const theme = useTheme();
    return(
        <Container>
             <StatusBar 
                 barStyle="light-content"
                 backgroundColor="transparent"
                 translucent
            />
            <Header>
                <BackButton 
                    onPress={() => {}} 
                    color={theme.colors.shape}
                />

                <Title>
                    Escolha uma {'\n'}
                    data de início e {'\n'}
                    fim do aluguel {'\n'}
                </Title>
                <DateInfo>
                    <DateRent>
                        <Text>De</Text>
                        <DateValue selectedDate={true} >18/06/2021</DateValue>
                    </DateRent>
                    
                    <ArrowSvg 
                        width={RFValue(48)}
                        height={RFValue(10)}
                    />
                    
                    <DateRent>
                        <Text>Até</Text>
                        <DateValue selectedDate={false}>18/06/2021</DateValue>
                    </DateRent>
                </DateInfo>
            </Header>
            <Content>
                <Calendar />
            </Content>
            <Footer>
                <Button 
                    title='Confirmar'
                    color={theme.colors.main_light}
                />
            </Footer>
        </Container>
    );
}