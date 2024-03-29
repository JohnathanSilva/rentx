import React, { useEffect, useState } from 'react';
import { StatusBar, BackHandler, StyleSheet } from 'react-native';
import { useTheme } from 'styled-components';
import { useNavigation } from '@react-navigation/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Ionicons } from '@expo/vector-icons';

import { RectButton, PanGestureHandler } from 'react-native-gesture-handler';

import Animated ,{
    useSharedValue,
    useAnimatedStyle,
    useAnimatedGestureHandler,
    withSpring
 } from 'react-native-reanimated';

const ButtonAnimated = Animated.createAnimatedComponent(RectButton);

import LogoSvg from '../../assets/logo.svg';

import { api }  from '../../services/api'

import { CardCar } from '../../components/CardCar';
import { LoadAnimation } from '../../components/LoadAnimation';
import { CarDTO } from '../../dtos/CarDTO';

import { Container, Header, TotalCars, CarList } from './styles'; 

export function Home() {
    const [cars, setCars] = useState([]);
    const [loading, setLoading] = useState(true);
    const theme = useTheme();
    const navigation = useNavigation<any>();

    const positionX = useSharedValue(0);
    const positionY = useSharedValue(0);

    const myCarsButtonStyle = useAnimatedStyle(() => {
        return{
            transform: [
                { translateX: positionX.value},
                { translateY: positionY.value},
            ]
        }
    });

    const onGestureEvent = useAnimatedGestureHandler({
        onStart(_, ctx: any){
            ctx.positionX = positionX.value;
            ctx.positionY = positionY.value;
        },
        onActive(event, ctx: any){
            positionX.value = ctx.positionX + event.translationX;
            positionY.value = ctx.positionY + event.translationY;
        },
        onEnd(){
            positionX.value = withSpring(0);
            positionY.value = withSpring(0);
        },
    });

    function handleCarDetails( car: CarDTO){
        navigation.navigate('CarDetails', { car });
    }

    function handleMyCars(){
        navigation.navigate('MyCars');
    }

    useEffect(() => {
        async function fetchCars() {
            try {
                const response = await api.get('/cars');
                setCars(response.data);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        }
        fetchCars();
    },[]);

    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', () => {
            return true;
        });
    },[]);

    return (
        <Container>
            <StatusBar 
                 barStyle="light-content"
                 backgroundColor="transparent"
                 translucent
            />
            <Header>
                <LogoSvg 
                    width={RFValue(108)}
                    height={RFValue(12)}
                />
                {
                    !loading &&
                    <TotalCars>
                        Total de {cars.length} carros
                    </TotalCars>
                }
            </Header>
            { loading ? <LoadAnimation /> 
                :
                <CarList 
                    data={cars}
                    keyExtractor={item => String(item.id)}
                    renderItem={    
                                ({ item}) => 
                                    <CardCar data={item} 
                                    onPress={() => handleCarDetails(item)} />
                                }
                />
            }
            
            <PanGestureHandler 
                onGestureEvent={onGestureEvent}
            >
                <Animated.View
                    style={[
                        myCarsButtonStyle,{
                            position: 'absolute',
                            bottom: 13, 
                            right: 22
                        }
                    ]}
                >
                    <ButtonAnimated 
                        style={[
                            styles.button,
                            { backgroundColor: theme.colors.main}
                        ]}
                    >
                        <Ionicons
                            name="ios-car-sport"
                            size={32}
                            color={theme.colors.shape}
                            onPress={handleMyCars}
                        /> 
                    </ButtonAnimated>
                </Animated.View>
            </PanGestureHandler>
        </Container>
    );
}

const styles = StyleSheet.create({
    button: {
        width: 60,
        height: 60,
        borderRadius: 30,

        justifyContent: 'center',
        alignItems: 'center',
    }
});