import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useTheme } from 'styled-components';
import { 
    Calendar as CustomCalendar, 
    LocaleConfig,
    CalendarProps
} from 'react-native-calendars';

import { generateInterval } from './generateInterval';

LocaleConfig.locales['pt-br'] = {
    monthNames: [
                 'Janeiro',
                 'Fevereiro',
                 'Março',
                 'Abril',
                 'Maio',
                 'Junho',
                 'Julho',
                 'Agosto',
                 'Setembro',
                 'Outubro',
                 'Novembro',
                 'Dezembro'
                ],
    MonthNamesShort:['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
    dayNames: ['Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sábado'],
    dayNamesShort: ['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SÁB'],
    today: 'Hoje',
}

LocaleConfig.defaultLocale = 'pt-br';

interface MarkedDatesProps {
    [date: string]:{
        color: string;
        textColor: string;
        disabled?: boolean;
        disableTouchEvent?: boolean;    
    },
}

interface DayProps {
    dateString: string;
    day: number;
    month: number;
    year: number;
    timestamp: number;
}

function Calendar({ markedDates, onDayPress} : CalendarProps){
    const theme = useTheme();
    return(
        <CustomCalendar 
            renderArrow={( direction ) => 
                <Feather
                    size={24}
                    color={theme.colors.text}
                    name={direction == 'left' ? 'chevron-left' : 'chevron-right'}
                />
            }

            headerStyle={{
                backgroundColor: theme.colors.background_secondary,
                borderBottomWidth: 0.5,
                borderBottomColor: theme.colors.text_detail,
                paddingBottom: 10,
                marginBottom: 10
            }}

            theme={{
                textDayFontFamily: theme.fonts.primary_regular,
                textDayHeaderFontFamily: theme.fonts.primary_medium,
                textDayHeaderFontSize: 10,
                textMonthFontFamily: theme.fonts.secondary_semibold,
                textMonthFontSize: 20,
                monthTextColor: theme.colors.title, 
                arrowStyle:{
                    marginHorizontal: -15
                }
            }}

            firstDay={1}
            minDate={String(new Date())}   
            markingType="period"     
            markedDates={markedDates}
            onDayPress={onDayPress}
        />
    );
}

export { Calendar, MarkedDatesProps, DayProps, generateInterval }