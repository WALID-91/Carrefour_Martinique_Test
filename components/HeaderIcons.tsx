import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import SmartClubSvg from './iconSVG/SmartClubSvg';

const HeaderIcons = () => {
  return (
    <View style={styles.headerContainer}>
      {/* smartClub Icon + Prix */}
      <View style={styles.smartClub}>
        <View style={styles.priceContainer}>
          <Text style={styles.priceText}>{"0.00€"}</Text>
        </View>
        <SmartClubSvg />
      </View>
      {/* Carrefour Icon */}

      <Image
        source={require('../assets/images/logoCarrefourMartinique.png')}
        style={styles.logo}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 20,
  },
  priceContainer: {
    backgroundColor: "#bd2c68",
    height: 23,
    width: 55,
    position: "absolute",
    top: 28,
    left: 65,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  priceText: {
    color: "#FFFFFF",
    fontWeight: "700",
  },
  logo: {
    width: "22%",
    height: "95%",
  },
  smartClub: {
    alignItems: 'center',
  }
});

export default HeaderIcons;
