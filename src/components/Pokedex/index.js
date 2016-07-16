import React from 'react'
import {
  View,
  Text,
} from 'react-native'
import styles from './Pokedex.styles'
import Pokemon from '../Pokemon'

const Pokedex = () => (
  <View style={styles.container}>
    <View style={styles.row}>
      <Pokemon name="Pikachu" />
      <Pokemon name="Charzard" />
      <Pokemon name="Bulbasaur" />
    </View>
    <View style={styles.row}>
      <Pokemon name="Squirtle" />
      <Pokemon name="Mew" />
      <Pokemon name="Andy" />
    </View>
    <View style={styles.row}>
      <Pokemon name="Squirtle" />
      <Pokemon name="Mew" />
      <Pokemon name="Andy" />
    </View>
    <View style={styles.row}>
      <Pokemon name="Squirtle" />
      <Pokemon name="Mew" />
      <Pokemon name="Andy" />
    </View>
    <View style={styles.row}>
      <Pokemon name="Squirtle" />
      <Pokemon name="Mew" />
      <Pokemon name="Andy" />
    </View>
  </View>
)

export default Pokedex
