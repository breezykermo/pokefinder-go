export default {
  LOCATION_MONITORING: true,
}

/** Simple feature toggles */
export const toggle = (type, renderComponent) => {
  if (!type) return null
  return renderComponent()
}
