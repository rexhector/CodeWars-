function bandNameGenerator(noun){
      if (noun[0] === noun[noun.length - 1]) {
      return noun.charAt(0).toUpperCase() + noun.slice(1) + noun.slice(1);
    } else {
      return "The " + noun.charAt(0).toUpperCase() + noun.slice(1);
    }
  }