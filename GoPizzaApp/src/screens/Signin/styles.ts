import styled from 'styled-components/native';
import {LinearGradient} from  'expo-linear-gradient'


export const Container = styled(LinearGradient).attrs(({ theme}) =>({
  colors: theme.COLORS.GRADIENT,
  start: { x: 0, y: 1}, //Manipula a posição do gradiente 
  end: { x: 0.5, y: 0.5}
}))`
  flex: 1; //Ocupa a tela toda do disp
  justify-contentent: center; // conteudo centralizado

`;
