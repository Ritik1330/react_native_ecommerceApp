import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../styles/colors';
const {width, height} = Dimensions.get('window');

export default styles = StyleSheet.create({
  total: {
    width: '90%',
    height: '6%',
    marginVertical: '3%',
    // backgroundColor: '#fff',
    flexDirection:"row",
    alignSelf: "center",
    alignItems:"center",
    justifyContent: "space-between",
  },
  chackout: {
    width: '80%',
    height: '6%',
    marginVertical: '3%',
    // backgroundColor: '#fff',
    backgroundColor: colors.themeColor,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: (height / 100) * 4,
  },
});
