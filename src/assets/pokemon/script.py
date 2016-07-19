import urllib

array = []
for x in range(1, 151):
    array.append(x)

# print array
for index in array:
    if index < 10:
        fill = "00{0}".format(index)
    elif index < 100:
        fill = "0{0}".format(index)
    else:
        fill = "{0}".format(index)
    urllib.urlretrieve(
        "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/{0}.png").format(fill),
        "{0}.png").format(fill)
    )
