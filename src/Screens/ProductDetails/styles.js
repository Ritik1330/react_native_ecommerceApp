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
    backgroundColor: colors.white,
    borderTopLeftRadius: responsiveWidth(15),
    borderTopRightRadius: responsiveWidth(15),
    paddingHorizontal: responsiveWidth(10),
    paddingTop: responsiveHeight(5),
    paddingBottom: responsiveHeight(2),
  },
  detailsmain: {
    flex: 1,
  },
  detailsHead: {
    // backgroundColor: colors.white,
    height: responsiveHeight(8),
  },
  productname: {
    fontSize: responsiveFontSize(3),
    fontWeight: '400',
  },
  productPrice: {
    fontSize: responsiveFontSize(2.5),
    fontWeight: '900',
  },
  discription: {
    height: responsiveHeight(23),
  },
  discriptionText: {
    fontSize: responsiveFontSize(2),
  },
  quantity: {
    // backgroundColor: 'white',
    height: responsiveHeight(6),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  quantityHendlerContainer: {
    flexDirection: 'row',
  },
  quantityHendlerButton: {
    width: responsiveWidth(8),
    padding: responsiveHeight(0.2),
    // paddingHorizontal:responsiveHeight(1),
    marginHorizontal: responsiveWidth(2),
    textAlign: 'center',
    backgroundColor: 'rgba(175, 175, 175, 0.8)',
    borderRadius: 7,
  },
  quantityBody: {
    // padding: responsiveWidth(3),
    // paddingHorizontal: 0,
    // marginHorizontal: responsiveWidth(2),
    // height: responsiveHeight(3),
    // // backgroundColor: 'blue',
  },
  addToCart: {
    height: responsiveHeight(8),
    justifyContent: 'center',
    // marginBottom:responsiveHeight()
    // alignItems:"center"
  },
  addToCartbody: {
    width: '100%',
    height: responsiveHeight(6),
    backgroundColor: colors.themeColor,
    borderRadius: responsiveHeight(3),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
