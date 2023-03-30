
export const useCombination = () => {

    
    const GenerateCombinations = (userArray, desiredCombLength) => {
        const numCombinations = factorial(userArray.length) / (factorial(desiredCombLength) * factorial(userArray.length - desiredCombLength));
        let maxGenerations = 300;
        let generatedCombinations = [];
    
        if(numCombinations < maxGenerations ) maxGenerations = numCombinations;
        
        do{
            let combination = [];
            do{
                let randomPickFromArray = userArray[Math.round(Math.random() * (userArray.length-1)) ]
                if(!combination.some( x => x == randomPickFromArray))
                    combination.push(randomPickFromArray);
            }while(combination.length < desiredCombLength);
            generatedCombinations.push(combination.join('-'));
        }while(generatedCombinations.length < maxGenerations)
        
        
        return generatedCombinations;
    }

    const factorial = (num) =>{
        if (num === 0) {
          return 1;
        } else {
          return num * factorial(num - 1);
        }
      }

    return {
        GenerateCombinations
    }
}






