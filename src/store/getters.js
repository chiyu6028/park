const getters = {
  getMaps (state) {
    let maps = []
    let province = state.province
    let city = state.city
    let egion = state.egion
    let street = state.street
    for (let i1 = 0; i1 < province.length; i1++) {
      let item1 = { value: province[i1].areaid, label: province[i1].areaname }
      let children1 = []
      for (let i2 = 0; i2 < city.length; i2++) {
        if (province[i1].areaid === city[i2].parentid) {
          let item2 = { value: city[i2].areaid, label: city[i2].areaname }
          let children2 = []
          for (let i3 = 0; i3 < egion.length; i3++) {
            if (city[i2].areaid === egion[i3].parentid) {
              let item3 = { value: egion[i3].areaid, label: egion[i3].areaname }
              let children3 = []
              for (let i4 = 0; i4 < street.length; i4++) {
                if (egion[i3].areaid === street[i4].parentid) {
                  children3.push({ value: street[i4].areaid, label: street[i4].areaname })
                }
              }
              if (children3.length > 0) item3.children = children3
              children2.push(item3)
            }
          }
          if (children2.length > 0) item2.children = children2
          children1.push(item2)
        }
      }
      if (children1.length > 0) item1.children = children1
      maps.push(item1)
    }
    return maps
  }
}

export default getters
