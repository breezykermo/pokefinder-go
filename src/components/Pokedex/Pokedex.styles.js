import { Dimensions } from 'react-native'

const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height
const pokedexHeight = screenHeight - 80

export default {
  container: {
    position: 'absolute',
    top: 80,
    flex: 1,
    height: pokedexHeight,
    padding: 10,
    width: screenWidth,
    backgroundColor: 'rgba(0, 0, 0, 1)',
  },
  row: {
    flexDirection: 'row',
  },
  text: {
    top: 15,
    fontFamily: 'TrebuchetMS',
    fontSize: 22,
  },
}
