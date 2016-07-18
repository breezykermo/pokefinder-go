import React, { PropTypes } from 'react'
import GridView from 'react-native-grid-view'
import styles from './PokemonGrid.styles'
import { POKEMON_PER_ROW } from '../../common/constants'
import { togglePokemon } from '../.././reducers/user/actions'
import Pokemon from './components/Pokemon'
import pokemonData from '../../assets/pokemonData'

class PokemonGrid extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    pokemonData: PropTypes.arrayOf(PropTypes.shape({
      number: PropTypes.number,
      name: PropTypes.string,
      image: PropTypes.any,
    })),
  }

  constructor(props) {
    super(props)
    this.renderItem.bind(this)
  }

  state = {
    dataSource: Object.keys(pokemonData).map(key => pokemonData[key]),
  }

  renderItem(pokeProps, key) {
    const { dispatch } = this.props
    const onPressHandler = () => {
      dispatch(togglePokemon(pokeProps.number))
    }
    return <Pokemon key={key} data={pokeProps} onPressHandler={onPressHandler} />
  }

  render() {
    return (
      <GridView
        style={styles.container}
        items={this.props.pokemonData}
        itemsPerRow={POKEMON_PER_ROW}
        renderItem={props => this.renderItem(props)}
      />
    )
  }
}

export default PokemonGrid
