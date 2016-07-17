import React, { PropTypes } from 'react'
import { View, Text } from 'react-native'

const Pokemon = () => (
  <View>
    <Text>I am a pokemon</Text>
  </View>
)
Pokemon.propTypes = {
  type: PropTypes.string,
}

export default Pokemon
