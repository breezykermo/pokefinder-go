import GeoPoint from './GeoPoint'

const POKECREW_API = 'https://api.pokecrew.com/api/v1/seens'

export default (x, y) => {
  const loc = new GeoPoint(x, y)
  const boundingCoordinates = loc.boundingCoordinates(2, 1)
  const swLoc = boundingCoordinates[0]
  const neLoc = boundingCoordinates[1]

  return Promise.resolve()
    .then(() => (
      fetch(`${POKECREW_API}?center_latitude=${loc.latitude()}
                                &center_longitude=${loc.longitude()}
                                &southwest_latitude=${swLoc.latitude()}
                                &southwest_longitude=${swLoc.longitude()}
                                &northeast_latitude=${neLoc.latitude()}
                                &northeast_longitude=${neLoc.longitude()}
                                &minimal=false
                                &pokemon_id=`)
    )).then(response => response.json())
    .then(pokecrewData => pokecrewData)
}
