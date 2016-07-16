import React from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native'
import styles from './Pokemon.styles'

function launchModal() {

}

const Pokemon = ({name}) => (
  <TouchableOpacity onPress={launchModal}>
    <View style={styles.container}>
      <Text style={styles.text}> {name} </Text>
      <Image
        style={styles.pokemonImg}
        source={require('../7.png')}
      />
    </View>
  </TouchableOpacity>
)

export default Pokemon
