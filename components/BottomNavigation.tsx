import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import TabItem from './navigation/TabItem';
import { HomeSvg, PromosSvg, SmartClubSvgTab, ListeSvg, DriveSvg, ProfilSvg } from './iconSVG/IconsSvg';
import BottomNavigationStyles from '@/styles/BottomNavigationStyles';



const BottomNavigation = () => {
  const [tabs, setTabs] = useState([
    { label: 'Accueil', SvgIcon: HomeSvg, isActive: true },
    { label: 'Promos', SvgIcon: PromosSvg, isActive: false },
    { label: 'Smart Club', SvgIcon: SmartClubSvgTab, isActive: false },
    { label: 'Listes', SvgIcon: ListeSvg, isActive: false },
    { label: 'Drive', SvgIcon: DriveSvg, isActive: false },
    { label: 'Profil', SvgIcon: ProfilSvg, isActive: false },
  ]);

  const handleTabPress = (index: number) => {
    const newTabs = tabs.map((tab, i) => ({
      ...tab,
      isActive: i === index,
    }));
    setTabs(newTabs);
  };

  return (
    <View style={BottomNavigationStyles.container}>
      {tabs.map((tab, index) => (
        <TabItem
          key={index}
          label={tab.label}
          isActive={tab.isActive}
          SvgIcon={tab.SvgIcon}
          handleTabPress={() => handleTabPress(index)}
        />
      ))}
    </View>
  );
};

export default BottomNavigation;
