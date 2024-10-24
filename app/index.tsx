import { Image, StyleSheet, Platform, View, ScrollView, TouchableWithoutFeedback } from 'react-native';
import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import HeaderIcons from '@/components/HeaderIcons';
import { LinearGradient } from 'expo-linear-gradient';
import BottomNavigation from '@/components/BottomNavigation';
import { ArcSvg } from '@/components/iconSVG/IconsSvg';

{/* <Tab.Screen name="Accueil" component={HomeScreen} />
<Tab.Screen name="Promos" component={PromosScreen} />
<Tab.Screen name="Smart Club" component={SmartClubScreen} />
<Tab.Screen name="Listes" component={ListesScreen} />
<Tab.Screen name="Drive" component={DriveScreen} />
<Tab.Screen name="Profil" component={ProfilScreen} /> */}


export default function HomeScreen() {
  return (
    <SafeAreaView
      style={{ flex: 1 }}
      edges={['right', 'left']}

    >
      <HeaderIcons />
      <ArcSvg />
      <LinearGradient
        colors={['#c6c6c6','#F6F6F6','#FFFFFF']}
        style={styles.content}>


      </LinearGradient>
      <BottomNavigation />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  gradient: {
    flex: 1,  
    borderTopLeftRadius: 50,  
    borderTopRightRadius: 50,
  },
  content: {
    backgroundColor: 'red',
    flex: 1,
    width: '100%',
  },
});
