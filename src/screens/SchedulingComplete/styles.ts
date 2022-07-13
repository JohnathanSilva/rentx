import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';


export const Conatiner = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.header};
    
    padding-top: 96px;
`;

export const Content = styled.View`
    flex: 1; 
    justify-content: flex-start;
    align-items: center;

    padding-bottom: 80px;
`;

export const Title = styled.Text`
    font-size: ${RFValue(30)}px;
    font-family: ${({ theme }) => theme.fonts.secondary_semibold};
    color: ${({ theme }) => theme.colors.shape};
    
    margin-top: 30px;
`;

export const TextMessage = styled.Text`
    font-size: ${RFValue(15)}px;
    font-family: ${({ theme }) => theme.fonts.primary_regular};
    color: ${({ theme }) => theme.colors.text_detail};
    line-height: ${RFValue(25)}px;
    text-align: center;
    
    margin-top: 16px;
`;

export const Footer = styled.View`
    width: 100%;
    align-items: center;
    
    margin: 30px 0;
`;
