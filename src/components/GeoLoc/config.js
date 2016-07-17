/* https://github.com/transistorsoft/react-native-background-geolocation/tree/master/docs */

export default {
  /* The minimum distance a device moves before update occurs. Increases elastically with speed. */
  distanceFilter: 5,
  /* Higher power means higher accuracy, but also greater battery drain. */
  desiredAccuracy: 1000,
  /* This is the minimum distance the device must move beyond the stationary location for
     aggressive background tracking to engage. Note that this is not exact. Required for iOS. */
  stationaryRadius: 25,
}
