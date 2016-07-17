import { Dimensions } from 'react-native'

const window = Dimensions.get('window')

export default {
  STATUS_BAR_PADDING: 28,
  SCREEN_WIDTH: window.width,
  SCREEN_HEIGHT: window.height,
}
