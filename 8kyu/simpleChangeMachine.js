function changeMe(input) {
      const acceptedValues = ["£5", "£2", "£1", "50p", "20p"];
      const changeValues = {
        "£5": 500,
        "£2": 200,
        "£1": 100,
        "50p": 50,
        "20p": 20,
      };
    
      const outputChange = {
        "20p": 0,
        "10p": 0,
      };
    
      if (!acceptedValues.includes(input)) {
        return input;
      }
    
      let changeInPence = changeValues[input];
    
      if (input === "20p") {
        outputChange["10p"] = 2; // Return '10p 10p' when the input is '20p'
      } else {
        while (changeInPence >= 20) {
          outputChange["20p"] += 1;
          changeInPence -= 20;
        }
    
        while (changeInPence >= 10) {
          outputChange["10p"] += 1;
          changeInPence -= 10;
        }
      }
    
      let result = "";
      for (let coin in outputChange) {
        for (let i = 0; i < outputChange[coin]; i++) {
          result += `${coin} `;
        }
      }
    
      return result.trim();
    }
    