import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

interface TabItemProps {
    label: string;
    isActive: boolean;
    SvgIcon: React.FC<{ isActive: boolean }>;
    handleTabPress: () => void;
}

const TabItem = (props: TabItemProps) => {
    const { label, isActive, SvgIcon, handleTabPress } = props;

    return (
        <TouchableOpacity style={{ alignItems: 'center', width:60, backgroundColor: isActive ? "#bd2c6840" : "transparent", borderRadius: 5}} onPress={handleTabPress}  >
            <View style={{ marginBottom: 5 }}>
                <SvgIcon isActive={isActive} />
            </View>
            <Text style={{ fontSize: 10 , color: isActive ? '#bd2c68' : '#000080' }}>
                {label}
            </Text>
        </TouchableOpacity>
    );
};

export default TabItem;
