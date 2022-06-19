import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';



export const Container = styled.View`
    flex: 1;

    background: ${({ theme }) => theme.colors.background_primary};
`;

export const Header = styled.View`
    width: 100%;
    height: 113px;

    background: ${({ theme }) => theme.colors.header};
    
    align-items: flex-end;
    justify-content: space-between;
    flex-direction: row;

    padding: 24px;
`;

export const TotalCars = styled.Text`
    font-size: ${RFValue(16)}px;
    font-family: ${({ theme }) => theme.fonts.primary_regular};
    
    color: ${({ theme }) => theme.colors.shape};
`;

export const CarList = styled(FlatList).attrs({
    contentContainerStyle: {
        padding: 20 
    },
    showsVerticalScrollIndicator: false
})``;