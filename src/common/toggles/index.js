/** Simple feature toggles */
export const ifEnabled = (type, renderComponent) => {
  if (!type) return null
  return renderComponent()
}

export default {
  LOCATION_MONITORING: false,
}
