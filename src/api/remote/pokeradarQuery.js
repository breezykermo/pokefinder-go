import GeoPoint from './GeoPoint'

const POKERADAR_API = 'http://www.pokemonradargo.com/api/v1/submissions'

export default (x, y) => {
  const loc = new GeoPoint(x, y)
  const boundingCoordinates = loc.boundingCoordinates(100)
  const swLoc = boundingCoordinates[0]
  const neLoc = boundingCoordinates[1]

  return Promise.resolve()
    .then(() => (
      // NB: hardcode a hack ID, seems to work better
      fetch(`${POKERADAR_API}?deviceId=jo14hqg7xn18gm80avkk2i8tsva7v8m6&minLatitude=${swLoc.latitude()}&minLongitude=${swLoc.longitude()}&maxLatitude=${neLoc.latitude()}&maxLongitude=${neLoc.longitude()}&pokemonId=0`)
    )).then(response => response.json())
    .then(pokeradarData => pokeradarData)
}