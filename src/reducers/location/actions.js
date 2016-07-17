export const UPDATE_LOCATION = 'UPDATE_LOCATION'
export const updateLocation = (location) => ({
  type: UPDATE_LOCATION,
  location,
})

export const DIFF_LOCATION_SUCCESS = 'DIFF_LOCATION_SUCCESS'
export const diffLocationSuccess = () => ({
  type: DIFF_LOCATION_SUCCESS,
})

export const DIFF_LOCATION_FAILURE = 'DIFF_LOCATION_FAILURE'
export const diffLocationFailure = (error) => ({
  type: DIFF_LOCATION_FAILURE,
  error,
})
