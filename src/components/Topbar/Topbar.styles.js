import { Dimensions } from 'react-native'
import { colors, text, sizes } from '../../common/constants'

const screenWidth = Dimensions.get('window').width

export default {
  container: {
    paddingTop: sizes.STATUS_BAR_PADDING,
    position: 'absolute',
    top: 0,
    height: 100,
    width: screenWidth,
    borderBottomWidth: 2,
    borderBottomColor: colors.DARK_EMPHASIS,
    backgroundColor: colors.ONE,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: text.header,
}
