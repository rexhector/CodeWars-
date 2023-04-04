function _if(bool, func1, func2) {
      if (bool) {
        return func1();
      } else {
        return func2();
      }
    }
    
    // Example usage
    const sayHello = () => console.log("Hello");
    const sayGoodbye = () => console.log("Goodbye");
    
    _if(true, sayHello, sayGoodbye); // Output: "Hello"
    _if(false, sayHello, sayGoodbye); // Output: "Goodbye"
    