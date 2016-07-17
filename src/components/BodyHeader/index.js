import React, { PropTypes } from 'react'
import { View, Text } from 'react-native'
import I18n from '../../common/i18n'
import styles from './BodyHeader.styles'

const BodyHeader = ({ watchlistCount }) => (
  <View style={styles.container}>
    <View style={styles.innerContainer}>
      <Text style={styles.leftText}>{I18n.t('bodyHeaderLeft')}</Text>
      <Text style={styles.rightText}>
        {`${I18n.t('bodyHeaderRight')} (${watchlistCount})`}
      </Text>
    </View>
  </View>
)
BodyHeader.propTypes = {
  watchlistCount: PropTypes.number,
}

export default BodyHeader
