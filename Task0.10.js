function commonChar(input1, input2){
    input1Char = [];
    input2Char = [];
    input1CharCount = [];
    input2CharCount = [];
    commonCharArr = []
    counter = 0;

    
    for(char in input1){
        input1Char.push(input1[char]);
    }
    for(char in input2){
        input2Char.push(input2[char]);
    }

    //Look through the array of letters for first word
    for(letter in input1Char){
        //Look through the array of letters for second word
        for(a in input2Char){
            //Compare Letters of second word to letters in first word, then add to an array of common letters
            if(input1Char[letter] == input2Char[a]){
                commonCharArr.push(input1Char[letter]);
            }
        }
    }
    console.log("Commone letters: ", commonCharArr.toString(counter));
}

commonChar("house", "computers");