import { text, colors } from '../../common/constants'

export default {
  container: {
    position: 'absolute',
    top: 20,
    right: 2,
    height: 80,
    backgroundColor: 'white',
    borderRadius: 6,
    padding: 2,
  },
  text: [text.detailHeaderRight, {
    paddingTop: -10,
    color: colors.RED,
  }],
}
