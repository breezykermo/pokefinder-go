import GeoPoint from './GeoPoint'

const CORE_API = 'https://api.pokecrew.com/api/v1/seens'

export default (x, y) => {
  const loc = new GeoPoint(x, y)
  const boundingCoordinates = loc.boundingCoordinates(1)
  const swLoc = boundingCoordinates[0]
  const neLoc = boundingCoordinates[1]
  return Promise.resolve()
    .then(() => {
      console.log('about to fetch...')
      return fetch(`${CORE_API}?center_latitude=${loc.latitude()}
                                &center_longitude=${loc.longitude()}
                                &southwest_latitude=${swLoc.latitude()}
                                &southwest_longitude=${swLoc.longitude()}
                                &northeast_latitude=${neLoc.latitude()}
                                &northeast_longitude=${neLoc.longitude()}
                                &minimal=true
                                &pokemon_id=`)
      // return fetch('https://jsonplaceholder.typicode.com/posts/1')
    }).then(response => {
      return response.json()
    })
    .then(json => json)
    .catch(e => {
      console.log(e.message)
      return e
    })
}
