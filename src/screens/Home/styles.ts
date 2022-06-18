import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    justify-content: flex-start;
    align-items: center;

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
    font-size: 16px;
    font-family: ${({ theme }) => theme.fonts.primary_regular};
    
    color: ${({ theme }) => theme.colors.shape};
`;