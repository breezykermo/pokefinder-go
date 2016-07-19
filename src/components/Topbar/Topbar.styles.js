import { colors, text, sizes } from '../../common/constants'

export const OPAQUE_WHITE = 'rgba(255,255,255,0.18)'

export default {
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.RED,
    paddingTop: 28,
    borderBottomWidth: 2,
    borderBottomColor: colors.DARK_EMPHASIS,
  },
  text: text.header,
  searchbar: {
    marginBottom: 20,
    height: 25,
    width: sizes.SCREEN_WIDTH - sizes.STATUS_BAR_PADDING,
  },
}
