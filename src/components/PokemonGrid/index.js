import React from 'react'
import GridView from 'react-native-grid-view'
import styles from './PokemonGrid.styles'
import { POKEMON_PER_ROW } from '../../common/constants'
import Pokemon from './components/Pokemon'
import pokemonData from '../../assets/pokemonData'

class PokemonGrid extends React.Component {
  constructor(props) {
    super(props)
    this.renderItem.bind(this)
  }

  state = {
    dataSource: Object.keys(pokemonData).map(key => pokemonData[key]),
  }

  componentDidMount() {
    // TODO: load pokemon data from local file... could just be static.
  }

  renderItem(itemProps) {
    return <Pokemon data={itemProps} />
  }

  render() {
    return (
      <GridView
        style={styles.container}
        items={this.state.dataSource}
        itemsPerRow={POKEMON_PER_ROW}
        renderItem={this.renderItem}
      />
    )
  }
}

export default PokemonGrid
