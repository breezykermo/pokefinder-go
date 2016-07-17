import React, { PropTypes } from 'react'
import { View, Text, Image } from 'react-native'
import styles from './Pokemon.styles'

const Pokemon = ({ data }) => (
  <View style={styles.container}>
    <Text style={styles.number}>{data.number}</Text>
    <Image
      style={styles.image}
      source={data.image}
    />
    <Text style={styles.name}>{data.name}</Text>
  </View>
)
Pokemon.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Pokemon
