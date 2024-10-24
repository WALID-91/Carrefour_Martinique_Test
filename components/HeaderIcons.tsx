import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import SmartClubSvg from './iconSVG/SmartClubSvg';
import HeaderIconsStyles from '@/styles/HeaderIconsStyles';


const HeaderIcons = () => {
  return (
    <View style={HeaderIconsStyles.headerContainer}>
      {/* smartClub Icon + Prix */}
      <View style={HeaderIconsStyles.smartClub}>
        <View style={HeaderIconsStyles.priceContainer}>
          <Text style={HeaderIconsStyles.priceText}>{"0.00€"}</Text>
        </View>
        <SmartClubSvg />
      </View>
      {/* Carrefour Icon */}

      <Image
        source={require('../assets/images/logoCarrefourMartinique.png')}
        style={HeaderIconsStyles.logo}
      />
    </View>
  );
};

export default HeaderIcons;
