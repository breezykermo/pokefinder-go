export const DIFF_LOCATION_REQUEST = 'DIFF_LOCATION_REQUEST'
export const diffLocationRequest = (location) => ({
  type: DIFF_LOCATION_REQUEST,
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
