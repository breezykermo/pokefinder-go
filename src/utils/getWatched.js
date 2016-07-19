export const getWatched = (objects, watched) => {
  watched.forEach(id => {
    objects[id].watched = true
  })
  return Object.keys(objects).map(key => objects[key])
}
