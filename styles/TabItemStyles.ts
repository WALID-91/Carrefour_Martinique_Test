import { StyleSheet } from 'react-native';



const TabItemStyles = StyleSheet.create({
    container: {
        alignItems: 'center',
        width: 60,
        borderRadius: 5,
        backgroundColor: 'transparent',
    },
    activeContainer: {
        backgroundColor: "#bd2c6840",  // Couleur de fond pour l'élément actif
    },
    iconContainer: {
        marginBottom: 5,
    },
    label: {
        fontSize: 10,
    },
    activeLabel: {
        color: '#bd2c68',  // Couleur pour le label actif
    },
    inactiveLabel: {
        color: '#000080',  // Couleur pour le label inactif
    },
});

export default TabItemStyles;