function vowelSplitter(word){
    var vowels = [];
    var counter = 0;
    for(letter in word){
        switch (word[letter]){
            case "a":
            case "e":
            case "i":
            case "o":
            case "u":
            case "A":
            case "E":
            case "I":
            case "O":
            case "U":
                vowels.push(word[letter]);
                break;
            }
        }
        for (a in vowels){
            counter ++;
        }
        console.log("Vowels: ", vowels.toString(counter));
}


vowelSplitter("Umuzi");