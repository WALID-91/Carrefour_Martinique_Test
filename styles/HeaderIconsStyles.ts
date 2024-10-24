
import { StyleSheet } from 'react-native';

const HeaderIconsStyles = StyleSheet.create({
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
  },
});

export default HeaderIconsStyles;
