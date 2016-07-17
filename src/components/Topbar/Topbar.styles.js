import { Dimensions } from 'react-native'
import { colors } from '../../common/constants'

const screenWidth = Dimensions.get('window').width

export default {
  container: {
    position: 'absolute',
    top: 0,
    height: 70,
    height: 100,
    width: screenWidth,
    backgroundColor: colors.ONE,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    top: 5,
    fontFamily: 'TrebuchetMS',
    fontWeight: 'bold',
    fontSize: 32,
    color: '#fff',
  },
}
