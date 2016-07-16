import { Dimensions } from 'react-native'

const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height
const pokedexHeight = screenHeight - 80

export default {
  container: {
    position: 'relative',
    width: screenWidth/3 - 12,
    height: screenWidth/3 - 12,
    borderRadius: 10,
    margin: 3,
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 1)',
  },
  text: {
    top: 5,
    fontFamily: 'TrebuchetMS',
    fontSize: 16,
    paddingBottom: 5,
  },
  pokemonImg: {
    width: 90,
    height: 90,
  },
}
