import {StyleSheet} from 'react-native';
const {default: colors} = require('../../styles/colors');
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    backgroundColor: colors.themeColor,
  },
  header: {
    flexDirection: 'row',
    width: '100%',
    // backgroundColor: 'pink',
    height: responsiveHeight(8),
    justifyContent: 'space-between',
    paddingHorizontal: responsiveWidth(5),
    alignItems: 'center',
  },
  headerImage: {
    width: responsiveWidth(6),
    height: responsiveHeight(6),
    resizeMode: 'contain',
  },
  carouselView: {
    flex: 1,
    // borderWidth: 1,b
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'pink',
  },
  carouselImage: {
    width: responsiveHeight(40),
    height: responsiveHeight(40),
    resizeMode: 'contain',
  },
  detailsContainer: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: 'white',
    borderTopLeftRadius: responsiveWidth(15),
    borderTopRightRadius: responsiveWidth(15),
    paddingHorizontal: responsiveWidth(10),
    paddingTop: responsiveHeight(5),
  },
  detailsmain: {
    flex: 1,
    backgroundColor: 'pink',
  },
  productname: {
    fontSize: responsiveFontSize(3),
    fontWeight: '400',
  },
  productPrice:{
    fontSize: responsiveFontSize(2.5),
    fontWeight: '900',
  }
});
