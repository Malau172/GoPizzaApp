import React from 'react';
import AppLoading from 'expo-app-loading';
import {StatusBar} from 'expo-status-bar';
import { useFonts,DMSans_400Regular } from '@expo-google-fonts/dm-sans';
import { DMSerifDisplay_400Regular } from '@expo-google-fonts/dm-serif-display';
import {ThemeProvider} from 'styled-components/native';
import { SignIn } from './src/screens/Signin/index';

import theme from './src/theme';
export default function App() {
  const [fonstLoaded] = useFonts({
    DMSans_400Regular,
    DMSerifDisplay_400Regular

  });
  
  if(!fonstLoaded){ //verifica se as fontes já carregaram
    return <AppLoading/>
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="light" translucent backgroundColor="tranparent"/> 
      <SignIn/>
    </ThemeProvider>
  );
}


