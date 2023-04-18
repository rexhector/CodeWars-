function createPhoneNumber(arr) {
      let mask = '(nnn) nnn-nnnn';
      arr.forEach(item => {
          mask = mask.replace('n', item);
      });
      return mask;
  }