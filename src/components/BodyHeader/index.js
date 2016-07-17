import React from 'react'
import { View, Text } from 'react-native'
import I18n from '../../common/i18n'
import styles from './BodyHeader.styles'

const BodyHeader = () => (
  <View style={styles.container}>
    <View style={styles.innerContainer}>
      <Text style={styles.leftText}>{I18n.t('bodyHeaderLeft')}</Text>
      <Text style={styles.rightText}>{I18n.t('bodyHeaderRight')}</Text>
    </View>
  </View>
)

export default BodyHeader
