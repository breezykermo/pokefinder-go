import { text, colors } from '../../common/constants'

export default {
  container: {},
  innerContainer: {
    flexDirection: 'row',
    margin: 15,
    paddingBottom: 10,
    borderBottomWidth: 1.5,
    borderBottomColor: colors.LIGHT_BLACK,
  },
  leftText: [text.detailHeaderLeft, { flex: 1 }],
  rightText: [text.detailHeaderRight, { flex: 1 }],
}
