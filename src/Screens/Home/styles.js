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
    backgroundColor: white,
  },
  containerSearch: {
    width: responsiveWidth(90),
    height: responsiveHeight(5),
    // justifyContent: 'center',
    alignSelf: 'center',
   

    backgroundColor: 'red',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: responsiveHeight(5),
    marginTop: responsiveHeight(2),
  
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.4,
    shadowRadius: 2,
    elevation: 3,
  },
  touchableOpacity: {
    flexDirection: 'row',
    width: responsiveWidth(70),
    borderRightWidth:1,
    borderRightColor:"#0028",
  },
  searchImage: {
    width: responsiveHeight(2),
    height: responsiveHeight(2),
    aspectRatio: 1,
    resizeMode: 'contain',
    marginTop: responsiveHeight(0.4),

    marginLeft: responsiveWidth(4),
  },
  text: {
    marginLeft: responsiveWidth(2),
  },
});
