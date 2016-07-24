import { text, colors, sizes } from '../../common/constants'

export default {
  container: {
    position: 'absolute',
    top: 20,
    right: 2,
    height: sizes.SCREEN_HEIGHT,
    width: 250,
    backgroundColor: 'white',
    borderRadius: 6,
    padding: 2,
  },
  text: [text.detailHeaderRight, {
    textAlign: 'center',
    paddingTop: -10,
    color: colors.RED,
    marginBottom: -5,
  }],
  body: [text.pokemonName, {
    padding: 2,
  }],
}
