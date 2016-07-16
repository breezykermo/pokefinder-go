// all at api
http://api.pokecrew.com/api/v1/seens
?center_latitude=37.78738059991135
&center_longitude=-122.39927037277221
&minimal=true
&northeast_latitude=37.818169517417466
&northeast_longitude=-122.29472859420775
&pokemon_id= // seems optional, to limit to a particular pokemon
&southwest_latitude=37.75657884929354
&southwest_longitude=-122.50381215133666

// returns readable data e.g.:
{"seens":[
  {"id":24030,"latitude":37.7920976183732,"longitude":-122.39428605143,"pokemon_id":72},
  {"id":24031,"latitude":37.7920976183732,"longitude":-122.39428605143,"pokemon_id":72},
  {"id":24032,"latitude":37.7920976183732,"longitude":-122.39428605143,"pokemon_id":72},
  {"id":16548,"latitude":37.7914120240537,"longitude":-122.39919887567,"pokemon_id":41},
  {"id":33942,"latitude":37.7920976183732,"longitude":-122.39428605143,"pokemon_id":129},
  {"id":33170,"latitude":37.786847422702,"longitude":-122.398189600343,"pokemon_id":127},
  {"id":35986,"latitude":37.7900315766908,"longitude":-122.400052061426,"pokemon_id":146}
],
"pokemons":[
  {"id":72,"name":"Tentacool","pokenumber":72,"preview_url":"http://s3.amazonaws.com/pokecrew-prod/pokemons/previews/000/000/072/original/data?1468308722","marker_url":"http://s3.amazonaws.com/pokecrew-prod/pokemons/markers/000/000/072/google/72.png?1468382052","seen_in_afternoon":true,"seen_in_morning":true,"seen_in_evening":true,"kinds":"water,poison"},
  {"id":41,"name":"Zubat","pokenumber":41,"preview_url":"http://s3.amazonaws.com/pokecrew-prod/pokemons/previews/000/000/041/original/data?1468308718","marker_url":"http://s3.amazonaws.com/pokecrew-prod/pokemons/markers/000/000/041/google/41.png?1468382051","seen_in_afternoon":true,"seen_in_morning":true,"seen_in_evening":true,"kinds":"poison,flying"}
]}

// for which you just map the pokemon ids in seen to the returned pokemons.
