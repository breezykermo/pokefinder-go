import React from 'react'
import { View, Text } from 'react-native'

class PokemonGrid extends React.Component {
  componentDidMount() {
    console.log('componentDidMount') // eslint-disable-line no-console
  }
  render() {
    return (
      <View>
        <Text>PokemonGrid</Text>
      </View>
    )
  }
}

export default PokemonGrid
