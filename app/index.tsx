import { Image, StyleSheet, Platform, View } from 'react-native';
import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import HeaderIcons from '@/components/HeaderIcons';
import { LinearGradient } from 'expo-linear-gradient';




export default function HomeScreen() {
  return (
    <SafeAreaView 
      style={{flex:1}}
      edges={[ 'right','left']}
    >
      <HeaderIcons />

      <LinearGradient
        colors={['#b0b0b0','#F6F6F6','#FFFFFF']}
        style={styles.content}>
      </LinearGradient>

      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  gradient: {
    flex: 1,  // Remplit l'écran
    borderTopLeftRadius: 50,  // Ajuste ces valeurs pour l'arrondi
    borderTopRightRadius: 50,
  },
  content: {
    backgroundColor: 'red',
    width: '100%',
    height: '100%',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
});
