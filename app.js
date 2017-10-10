function cipher (str){
    var solved = ""
    for (var i = 0; i < str.length; i++){
        var ascii = str[i].charCodeAt();
        if (ascii >= 65 && ascii <= 90){
            solved += String.fromCharCode ((ascii-65+33)%26)+65)
        }
        else if(ascii >= 97 && ascii <= 122) {
            solved += String.fromCharCode ((ascii-97+33)%26)+97)
        }
    }
    return solved
}

cipher ("ABCD")