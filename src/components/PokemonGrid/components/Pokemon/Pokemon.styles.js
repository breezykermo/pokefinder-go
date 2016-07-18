import { colors, text } from '../../../../common/constants'

export default {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.SMOKE,
    borderColor: colors.SILVER,
    borderWidth: 1,
    borderRadius: 2,
    margin: 3,
  },
  number: [text.pokemonName, {
    position: 'absolute',
    top: 7,
    left: 11,
    opacity: 0.4,
  }],
  image: {
    marginTop: 18,
    marginLeft: 29,
    marginRight: 29,
    width: 53,
    height: 53,
  },
  name: [text.pokemonName, {
    marginTop: 5,
    marginBottom: 18,
  }],
}
