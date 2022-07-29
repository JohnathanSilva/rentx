import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import { useTheme } from 'styled-components';

import ArrowSvg from '../../assets/arrow.svg';

import { BackButton } from '../../components/BackButton';
import { Button } from '../../components/Button';
import { Calendar, DayProps, generateInterval, MarkedDatesProps } from '../../components/Calendar';

import { Container, Header, ButtonWrapper, Title, DateInfo, Text, DateRent, DateValue, Content, Footer} from './styles';

export function Scheduling() {
    const [lastSelectedDate, setLastSelectedDate] = useState<DayProps>({} as DayProps);
    const [markedDates, setMarkedDates] = useState<MarkedDatesProps>( {} as MarkedDatesProps);
    const theme = useTheme();
    const navigation = useNavigation();

    function handleConfirmRental(){
        navigation.navigate('SchedulingDetails');
    }

    function handleBack(){
        navigation.goBack();
    }

    function handleChangeDate(date : DayProps){
        let start = !lastSelectedDate.timestamp ? date : lastSelectedDate;
        let end = date;

        if( start.timestamp > end.timestamp){
            start = end;
            end = start;
        }

        setLastSelectedDate(end);
        const interval = generateInterval(start, end);
        setMarkedDates(interval);
    }

    return(
        <Container>
             <StatusBar 
                 barStyle="light-content"
                 backgroundColor="transparent"
                 translucent
            />
            <Header>
                <ButtonWrapper>
                    <BackButton 
                        onPress={handleBack} 
                        color={theme.colors.shape}
                    />
                </ButtonWrapper>

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
                <Calendar 
                    markedDates={markedDates}
                    onDayPress={handleChangeDate}
                />
            </Content>
            <Footer>
                <Button 
                    title='Confirmar'
                    color={theme.colors.main_light}
                    onPress={handleConfirmRental}
                />
            </Footer>
        </Container>
    );
}