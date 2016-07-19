import GeoPoint from './GeoPoint'

const POKERADAR_API = 'https://www.pokemonradargo.com/api/v1/submissions'

export default (x, y) => {
  const loc = new GeoPoint(x, y)
  const boundingCoordinates = loc.boundingCoordinates(2, 1)
  const swLoc = boundingCoordinates[0]
  const neLoc = boundingCoordinates[1]

  return Promise.resolve()
    .then(() => (
      fetch(`${POKERADAR_API}?minLatitude=${swLoc.latitude()}
                            &minLongitude=${swLoc.longitude()}
                            &maxLatitude=${neLoc.latitude()}
                            &maxLongitude=${neLoc.longitude()}
                            &pokemonId=0`)
    )).then(response => response.json())
    .then(pokeradarData => pokeradarData)
}
