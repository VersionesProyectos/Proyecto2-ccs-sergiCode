function alphabetWar(fight) {
    const leftLetters = {
      "w": 4,
      "p": 3,
      "b": 2,
      "s": 1
    };
  
    const rightLetters = {
      "m": 4,
      "q": 3,
      "d": 2,
      "z": 1
    };
  
    let sumLeft = 0;
    let sumRight = 0;
  
    for (let letra of fight) {
      if (leftLetters.hasOwnProperty(letra)) {
        sumLeft += leftLetters[letra];
      }
      if (rightLetters.hasOwnProperty(letra)) {
        sumRight += rightLetters[letra];
      }
    }
  
    // Determinar el resultado de la batalla   
    return sumLeft === sumRight ? "Let's fight again!" : sumLeft > sumRight ? "Left side wins!" :"Right side wins!"
  }

 