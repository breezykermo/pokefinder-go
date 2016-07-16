import { Dimensions } from 'react-native'

const screenWidth = Dimensions.get('window').width

export default {
  container: {
    position: 'absolute',
    top: 0,
<<<<<<< 9bd5abb05f31c96d3989089e2fcd1bc2471c42be
    height: 70,
=======
    height: 100,
>>>>>>> [pokedex] go
    width: screenWidth,
    backgroundColor: '#ea2225',
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
