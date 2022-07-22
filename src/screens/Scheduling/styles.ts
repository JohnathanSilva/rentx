import styled, {css} from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

interface DateValueProps {
    selectedDate: boolean;
}

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background_secondary};
`;

export const Header = styled.View`
    width: 100%;
    height: 325px;

    background-color: ${({ theme }) => theme.colors.header};

    justify-content: center;
    padding: 24px;
    padding-top: ${getStatusBarHeight() + 49}px;
`;

export const ButtonWrapper = styled.View`
    align-items: flex-start;
`;

export const Title = styled.Text`
    font-size: ${RFValue(30)}px;
    font-family: ${({ theme }) => theme.fonts.secondary_semibold};
    color: ${({ theme }) => theme.colors.shape};

    margin-top: 24px;
`;

export const DateInfo = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    margin: 25px 0;
`;
export const DateRent = styled.View`
    width: 30%;
`;

export const Text = styled.Text`
    font-size: ${RFValue(10)}px;
    font-family: ${({ theme }) => theme.fonts.secondary_medium};
    color: ${({ theme }) => theme.colors.text};
    text-transform: uppercase;
`; 

export const DateValue = styled.Text<DateValueProps>`
    font-size: ${RFValue(15)}px;
    font-family: ${({ theme }) => theme.fonts.primary_medium};
    color: ${({ theme }) => theme.colors.shape};

    ${({ selectedDate ,theme}) => !selectedDate && css`
        border-bottom-width: 1px;
        border-bottom-color: ${theme.colors.text};
        padding-bottom: 5px;
    `};
`;
export const Content = styled.View`
    flex: 1;
`;

export const Footer = styled.View`
    padding: 34px 24px;    
`;
