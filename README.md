# PokefinderGo

Subscribe to Pokemon, and get notified when the Pokemon you are watching have appeared in your area. The app is made using React Native and Redux, and has only been tested on iOS. It uses [Redux Saga](https://github.com/yelouafi/redux-saga) for asynchronous operations, and the [Pokecrew](https://www.pokecrew.com/) API ([just in case](https://fevgames.net/walking-a-dangerous-line-pokemon-go-and-unofficial-api-projects/)).

![Pokemon Pic 1](/assets/screen1.png)
![Pokemon Pic 2](/assets/screen2.png)

See the very compelling [Powerpoint Presentation](https://docs.google.com/presentation/d/1WSPHb8pvFU1a2U04RjQly76gqdXCYcvjyJylkXPKdQ0/edit#slide=id.g15f19ec232_0_165) for more info.

## Getting Started

Ensure that you have [React Native](https://facebook.github.io/react-native/) installed on your computer. Follow the [Getting Started](https://facebook.github.io/react-native/docs/getting-started.html#content) docs on their website if not.

Clone the directory and install dependencies:
```bash
git clone https://github.com/breezykermo/pokefinder-go
cd pokefinder-go
npm install
```
Start the packager in a separate terminal and run the project:
```bash
npm start

...

npm run debug:ios:6
```

## Addendum

This is a work in progress. I haven't yet been able to sync up Background Geolocation and API querying, nor properly trigger push notifications. The infrastructure is all there, but the connective tissue isn't quite. Feel free to pull request! I don't actually play PokemonGo (just making this for my sister), so this is not one of my major priorities right now.

**HUGE** credit to:

 - [Mariam Braimah](https://twitter.com/mbraimah_), who designed the interface.
 - [Jake Brady](https://www.linkedin.com/in/jacobbrady), who helped brainstorm the concept and hash out some of the code.