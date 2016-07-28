import GeoPoint from './GeoPoint'

const POKECREW_API = 'https://api.pokecrew.com/api/v1/seens'

export default (x, y) => {
  const loc = new GeoPoint(x, y)
  // NB, query is approx. 1.415 mile radius with this.
  const boundingCoordinates = loc.boundingCoordinates(1)
  const swLoc = boundingCoordinates[0]
  const neLoc = boundingCoordinates[1]

  return Promise.resolve()
    .then(() => (
      /* eslint-disable max-len */
      // console.log(`${POKECREW_API}?center_latitude=${loc.latitude()}&center_longitude=${loc.longitude()}&southwest_latitude=${swLoc.latitude()}&southwest_longitude=${swLoc.longitude()}&northeast_latitude=${neLoc.latitude()}&northeast_longitude=${neLoc.longitude()}&live=true&minimal=true&pokemon_id=`)
      fetch(`${POKECREW_API}?center_latitude=${loc.latitude()}&center_longitude=${loc.longitude()}&southwest_latitude=${swLoc.latitude()}&southwest_longitude=${swLoc.longitude()}&northeast_latitude=${neLoc.latitude()}&northeast_longitude=${neLoc.longitude()}&live=true&minimal=true&pokemon_id=`)
      /* eslint-enable max-len */
    )).then(response => response.json())
    .then(pokecrewData => pokecrewData)
}
