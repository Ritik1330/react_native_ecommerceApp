import {StyleSheet, Dimensions} from 'react-native';
const {height, width} = Dimensions.get('screen');
import {white} from '../../styles/colors';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'column',
  },
  header: {
    width:"100%",
    height: responsiveHeight(6),
    position: 'absolute',
    top: 0,
    left: 0,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.4,
    shadowRadius: 2,
    elevation: 3,
    backgroundColor: 'white',
  },
  back: {
    width: responsiveWidth(6),
    height: responsiveWidth(6),
    // aspectRatio:1,
    resizeMode: 'contain',
    marginLeft: responsiveWidth(2),
  },
  input: {
    padding: 0,
    marginLeft: responsiveWidth(2),
    paddingHorizontal: responsiveWidth(2),
    width: responsiveWidth(70),
    height: responsiveHeight(3),
    borderRightWidth: 1,
    borderRightColor: '#0028',
  },
  search: {
    width: responsiveWidth(5),
  },
  raperContainer:{
    marginTop:responsiveHeight(6),
  },
  chip: {
  flexDirection:"row"
    // backgroundColor: 'white',
    // shadowColor: '#000',
    // shadowOffset: {width: 0, height: 1},
    // shadowOpacity: 0.4,
    // shadowRadius: 2,
    // elevation: 3,
  },
});
