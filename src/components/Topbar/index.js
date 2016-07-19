import React, { PropTypes } from 'react'
import {
  View,
  Text,
  StatusBar,
} from 'react-native'
import I18n from '../../common/i18n'
import SearchBar from 'react-native-search-bar'
import styles from './Topbar.styles'

class Topbar extends React.Component {
  static propTypes = {
    onChangeTextHandler: PropTypes.func.isRequired,
  }
  componentDidMount() {
    this.refs.searchBar.focus()
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Text style={styles.text}>{I18n.t('headerText')}</Text>
        <View style={styles.searchbar}>
          <SearchBar
            onChangeText={this.props.onChangeTextHandler}
            textFieldBackgroundColor="rgba(255,255,255,0.18)"
            barStyle="default"
            searchBarStyle="minimal"
            barTintColor="white"
            barTintColor="white"
            tintColor="white"
            textColor="white"
            hideBackground={false}
            ref="searchBar"
            placeholder={I18n.t('searchMessage')}
          />
        </View>
      </View>
    )
  }
}
export default Topbar
