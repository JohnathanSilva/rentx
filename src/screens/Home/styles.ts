import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    justify-content: flex-start;
    align-items: center;

    background: ${({ theme }) => theme.colors.background_primary};
`;

export const Header = styled.View`
    width: 100%;
    height: 25%;

    background: ${({ theme }) => theme.colors.header};
    
    align-items: center;
    justify-content: flex-end;
`;

export const Title = styled.Text`
    font-size: 16px;
    font-family: ${({ theme }) => theme.fonts.primary_regular};
    
    color: ${({ theme }) => theme.colors.shape};
`;