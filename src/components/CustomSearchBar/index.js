import React from 'react'
import I18n from '../../common/i18n'
import SearchBar from 'react-native-search-bar'

class CustomSearchBar extends React.Component {
  componentDidMount() {
    this.refs.searchBar.focus()
  }

  render() {
    return (
      <SearchBar
        ref="searchBar"
        placeholder={I18n.t('searchMessage')}
      />
    )
  }
}

export default CustomSearchBar
