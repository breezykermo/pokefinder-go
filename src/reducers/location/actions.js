export const UPDATE_BACKGROUND_LOCATION_ERROR = 'UPDATE_BACKGROUND_LOCATION_ERROR'
export const updateBackgroundLocationError = (error) => ({
  type: UPDATE_BACKGROUND_LOCATION_ERROR,
  error,
})

export const UPDATE_CURRENT_LOCATION = 'UPDATE_CURRENT_LOCATION'
export const updateCurrentLocation = (location) => ({
  type: UPDATE_CURRENT_LOCATION,
  location,
})
