import React from 'react'
import {
  View,
  Text,
} from 'react-native'
import I18n from '../../common/i18n'
import SearchBar from 'react-native-search-bar'
import styles from './Topbar.styles'

class Topbar extends React.Component {
  componentDidMount() {
    this.refs.searchBar.focus()
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{I18n.t('headerText')}</Text>
        <SearchBar
          ref="searchBar"
          placeholder={I18n.t('searchMessage')}
        />
      </View>
    )
  }
}
export default Topbar
