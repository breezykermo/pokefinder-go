import { Dimensions } from 'react-native'

const screenWidth = Dimensions.get('window').width

export default {
  container: {
    position: 'absolute',
    bottom: 0,
    height: 60,
    width: screenWidth,
    backgroundColor: '#ea2225',
    justifyContent: 'center',
    alignItems: 'center',
  },
}
