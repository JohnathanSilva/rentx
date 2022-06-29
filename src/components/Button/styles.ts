import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

interface ButtonProps extends RectButtonProps {
    color: string;
}

export const Container = styled(RectButton)<ButtonProps>`
    width: 100%;
    height: ${RFValue(56)}px;
    
    justify-content: center;
    align-items: center;
    
    background-color: ${({ color, theme }) => color ? color : theme.colors.main};
`as unknown as typeof RectButton;

export const Title = styled.Text`
    font-size: ${RFValue(15)}px;
    font-family: ${({ theme }) => theme.fonts.primary_medium};
    color: ${({ theme }) => theme.colors.shape};
`;