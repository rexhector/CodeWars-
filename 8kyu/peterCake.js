function cakes(recipe, available) {
      return Object.keys(recipe).reduce(function(val,ingredient){
        return Math.min(Math.floor(available[ingredient] / recipe[ingredient] || 0), val)
      }, Infinity)
    }

//     completed this one with Victor J, mind is honestly blown 