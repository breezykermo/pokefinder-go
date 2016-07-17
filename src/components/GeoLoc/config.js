export default {
  /**
    react-native-background-geolocation
    https://github.com/transistorsoft/react-native-background-geolocation/tree/master/docs
  **/
  bgGeo: {
    /* The minimum distance a device moves before update occurs.
       Increases elastically with speed. */
    distanceFilter: 5,
    /* Higher power means higher accuracy, but also greater battery drain. */
    desiredAccuracy: 1000,
    /* This is the minimum distance the device must move beyond the stationary location for
       aggressive background tracking to engage. Note that this is not exact. Required for iOS. */
    stationaryRadius: 25,
  },

  /**
    react-native-push-notification
    https://github.com/zo0r/react-native-push-notification
  **/
  pushNotification: {
    // (optional) Called when Token is generated (iOS and Android)
    onRegister: token => {
      console.log('TOKEN:', token) // eslint-disable-line no-console
    },
    // (required) Called when a remote or local notification is opened or received
    onNotification: notification => {
      console.log('NOTIFICATION:', notification) // eslint-disable-line no-console
    },

    // ANDROID ONLY: (optional) GCM Sender ID.
    senderID: 'YOUR GCM SENDER ID',

    // IOS ONLY (optional): default: all - Permissions to register.
    permissions: {
      alert: true,
      badge: true,
      sound: true,
    },

    // Should the initial notification be popped automatically
    // default: true
    popInitialNotification: true,

    /**
      * IOS ONLY: (optional) default: true
      * - Specified if permissions will requested or not,
      * - if not, you must call PushNotificationsHandler.requestPermissions() later
      */
    requestPermissions: true,
  },
}
