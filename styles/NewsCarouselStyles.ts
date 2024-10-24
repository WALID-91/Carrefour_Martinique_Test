import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";



const NewsCarouselStyles = StyleSheet.create({
  carouselItem: {
    width: wp(88),
    height: hp(50),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 8,
    overflow: 'hidden',
  },
  carouselContainer: {
    width: "100%",
    height: "77%",
    alignItems: 'center',
    justifyContent: 'center',
  },
  paginationContainer: {
    flexDirection: 'row',
  },
  paginationDot: {
    width: 6,
    height: 6,
    borderRadius: 5,
    marginHorizontal: 3,
  },
  paginationDotActive: {
    backgroundColor: '#00000070',
  },
  paginationDotInactive: {
    backgroundColor: '#00000030',
  },
});

export default NewsCarouselStyles;