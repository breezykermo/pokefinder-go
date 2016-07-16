import React from 'react'
import {
  ScrollView,
  View,
  Text,
} from 'react-native'
import styles from './Pokedex.styles'
import Pokemon from '../Pokemon'

const Pokedex = () => (
  <ScrollView style={styles.container}>
    {[0,0,0,0,0,0,0,0,0].map((k, i) => (
      <View key={i} style={styles.row}>
        <Pokemon name="Pikachu" />
        <Pokemon name="Charzard" />
        <Pokemon name="Bulbasaur" />
      </View>
    ))}
  </ScrollView>
)

export default Pokedex
