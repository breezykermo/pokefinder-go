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

AH!
API only returns 50 results at a time, and then calls more times with 'exclude' paramters to further populate.

https://api.pokecrew.com/api/v1/seens
?center_latitude=37.41011650480844
&center_longitude=-122.06603025536499
&exclude%5B%5D=55763
&exclude%5B%5D=44541
&exclude%5B%5D=21851
&exclude%5B%5D=30748
&exclude%5B%5D=5643
&exclude%5B%5D=12804
&exclude%5B%5D=54494
&exclude%5B%5D=6489
&exclude%5B%5D=8791
&exclude%5B%5D=20005
&exclude%5B%5D=11828
&exclude%5B%5D=44600
&exclude%5B%5D=22510
&exclude%5B%5D=11330
&exclude%5B%5D=16530
&exclude%5B%5D=12015
&exclude%5B%5D=17106
&exclude%5B%5D=35415
&exclude%5B%5D=35520
&exclude%5B%5D=16863
&exclude%5B%5D=11005
&exclude%5B%5D=17104
&exclude%5B%5D=44553
&exclude%5B%5D=14002
&exclude%5B%5D=24953
&exclude%5B%5D=12855
&exclude%5B%5D=24797
&exclude%5B%5D=34982
&exclude%5B%5D=13123
&exclude%5B%5D=11171
&exclude%5B%5D=32158
&exclude%5B%5D=29724
&exclude%5B%5D=29838
&exclude%5B%5D=18670
&exclude%5B%5D=12856
&exclude%5B%5D=40327
&exclude%5B%5D=744
&exclude%5B%5D=36869
&exclude%5B%5D=13162
&exclude%5B%5D=7411
&exclude%5B%5D=10577
&exclude%5B%5D=12802
&exclude%5B%5D=54775
&exclude%5B%5D=23310
&exclude%5B%5D=25027
&exclude%5B%5D=6488
&exclude%5B%5D=23242
&exclude%5B%5D=18633
&exclude%5B%5D=41049
&exclude%5B%5D=24798

&minimal=true
&northeast_latitude=37.44378785171615
&northeast_longitude=-121.96286176781615
&pokemon_id=&southwest_latitude=37.37643001661407
&southwest_longitude=-122.17194532494506


though it seems as though the exclude parameters are not IDs. Maybe bundles?
