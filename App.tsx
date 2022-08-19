import React from 'react';
import { ThemeProvider } from 'styled-components'
import { useFonts, Inter_400Regular, Inter_500Medium} from '@expo-google-fonts/inter'
import { Archivo_400Regular, Archivo_500Medium, Archivo_600SemiBold } from  '@expo-google-fonts/archivo'

import * as SplashScreen from 'expo-splash-screen';

import theme  from './src/styles/theme';

import { Routes } from './src/routes'; 

import { LogBox } from 'react-native'

LogBox.ignoreLogs([
    'ViewPropTypes will be removed from React Native. Migrate to ViewPropTypes exported from \'deprecated-react-native-prop-types\'.'
]);

export default function App() {
  SplashScreen.preventAutoHideAsync();
  const [ fontsLoaded ] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Archivo_400Regular,
    Archivo_500Medium,
    Archivo_600SemiBold
  });

  if(!fontsLoaded){
    return null;
  }

  SplashScreen.hideAsync();

  return (
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
  );
}
