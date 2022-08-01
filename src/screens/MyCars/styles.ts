import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
    flex: 1;
 
    background-color: ${({ theme }) => theme.colors.background_primary};
`;

export const Header = styled.View`
    width: 100%;
    height: 273px;

    align-items: flex-start;
    justify-content: center;

    background-color: ${({ theme }) => theme.colors.header};
    
    padding: 24px;
    padding-top: ${getStatusBarHeight() + 30}px;
`;

export const ButtonWrapper = styled.View`
    align-items: flex-start;
`;

export const Title = styled.Text`
    font-size: ${RFValue(30)}px;
    font-family: ${({ theme }) => theme.fonts.secondary_semibold};

    color: ${({ theme }) => theme.colors.shape};

    margin-top: 22px;
`;

export const SubTitle = styled.Text`
    font-size: ${RFValue(15)}px;
    font-family: ${({ theme }) => theme.fonts.secondary_regular};

    color: ${({ theme }) => theme.colors.shape};

    margin-top: 20px;
`;

export const Content = styled.View`
    flex: 1;
    width: 100%;
    padding: 0 16px;
`;

export const Schedulings = styled.View`
    width: 100%;

    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    
    margin-top: 24px;
    margin-bottom: 29px;
    padding: 0 8px;
`;

export const SchedulingsTitle = styled.Text`
    font-size: ${RFValue(15)}px;
    font-family: ${({ theme }) => theme.fonts.primary_regular}; 
    color: ${({ theme }) => theme.colors.text};

`;

export const SchedulingsQuantity= styled.Text`
    font-size: ${RFValue(15)}px;
    font-family: ${({ theme }) => theme.fonts.secondary_medium}; 
    color: ${({ theme }) => theme.colors.title};
`;

export const CarWrapper = styled.View`
    margin-bottom: 16px;
`;

export const CardCarFooter = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    background-color: ${({ theme }) => theme.colors.background_secondary};

    padding: 15px 24px;
    margin-top: -12px;
`;

export const CardCarFooterTitle = styled.Text`
    font-size: ${RFValue(10)}px;
    font-family: ${({ theme })=> theme.fonts.secondary_medium};
    color: ${({ theme }) => theme.colors.text_detail};
`;

export const CardCarFooterPeriod = styled.View`
    flex-direction: row;
`;

export const CardCarFooterDate = styled.Text`
    font-size: ${RFValue(13)}px;
    font-family: ${({ theme }) => theme.fonts.primary_regular};
    color: ${({ theme }) => theme.colors.title};
`;

