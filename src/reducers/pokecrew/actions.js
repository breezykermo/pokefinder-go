export const ADD_SIGHTING = 'ADD_SIGHTING'
export const addSighting = (sighting) => ({
  type: ADD_SIGHTING,
  sighting,
})

export const REQUEST_SIGHTINGS = 'REQUEST_SIGHTINGS'
export const requestSightings = () => ({
  type: REQUEST_SIGHTINGS,
})
