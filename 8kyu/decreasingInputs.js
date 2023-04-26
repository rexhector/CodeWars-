function add(...args) {
    if (args.length === 0) {
      return 0;
    }
  
    let sum = 0;
    for (let i = 0; i < args.length; i++) {
      sum += args[i] / (i + 1);
    }
  
    return Math.round(sum);
  }
  
  console.log(add(3, 4, 6)); // Output: 7
  