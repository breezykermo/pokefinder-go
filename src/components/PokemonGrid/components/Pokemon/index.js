import React, { PropTypes } from 'react'
import { Text, Image, TouchableOpacity } from 'react-native'
import styles from './Pokemon.styles'

const Pokemon = ({ data, onPressHandler }) => (
  <TouchableOpacity
    style={data.watched ? styles.containerWatched : styles.container}
    onPress={onPressHandler}
  >
    <Text style={styles.number}>{data.number}</Text>
    <Image
      style={styles.image}
      source={data.image}
    />
    <Text style={styles.name}>{data.name}</Text>
  </TouchableOpacity>
)
Pokemon.propTypes = {
  data: PropTypes.object.isRequired,
  onPressHandler: PropTypes.func.isRequired,
}

export default Pokemon
