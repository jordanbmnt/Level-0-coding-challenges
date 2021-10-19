function vowelSplitter(word){
    var outputVowels = [];
    var vowels = [];
    var counter = 0;
    var aCounter = 0;
    var eCounter = 0;
    var iCounter = 0;
    var oCounter = 0;
    var uCounter = 0;

    for(letter in word){
        switch (word[letter]){
            case "a":
            case "e":
            case "i":
            case "o":
            case "u":
                vowels.push(word[letter]);
                break;
            case "A":
                vowels.push("a");
                break;
            case "E":
                vowels.push("e");
                break;
            case "I":
                vowels.push("i");
                break;
            case "O":
                vowels.push("o");
                break;
            case "U":
                vowels.push("u");
                break;
            }
        }

        for(a in vowels){
            switch (vowels[a]){
                case "a":
                    aCounter+= 1;
                    counter ++;
                    break;
                case "e":
                    eCounter+= 1;
                    counter ++;
                    break;
                case "i":
                    iCounter+= 1;
                    counter ++;
                    break;
                case "o":
                    oCounter+= 1;
                    counter ++;
                    break;
                case "u":
                    uCounter+= 1;
                    counter ++;
                    break;
        }
    }
    
    if(aCounter > 0){
        outputVowels.push("a")
    }
    if(eCounter > 0){
        outputVowels.push("e")
    }
    if(iCounter > 0){
        outputVowels.push("i")
    }
    if(oCounter > 0){
        outputVowels.push("o")
    }
    if(uCounter > 0){
        outputVowels.push("u")
    }

        console.log("Vowels: ", outputVowels.toString(counter));
}



vowelSplitter("Umuzi");