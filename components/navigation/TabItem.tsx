import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import TabItemStyles from '@/styles/TabItemStyles'; // Importation des styles extraits

interface TabItemProps {
    label: string;
    isActive: boolean;
    SvgIcon: React.FC<{ isActive: boolean }>;
    handleTabPress: () => void;
}

const TabItem = ({ label, isActive, SvgIcon, handleTabPress }: TabItemProps) => {
    return (
        <TouchableOpacity 
            style={[TabItemStyles.container, isActive && TabItemStyles.activeContainer]} 
            onPress={handleTabPress}
        >
            <View style={TabItemStyles.iconContainer}>
                <SvgIcon isActive={isActive} />
            </View>
            <Text style={[TabItemStyles.label, isActive ? TabItemStyles.activeLabel : TabItemStyles.inactiveLabel]}>
                {label}
            </Text>
        </TouchableOpacity>
    );
};

export default React.memo(TabItem);
