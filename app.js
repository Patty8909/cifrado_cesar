function cipher (str){
    var solved = ""
    for (var i = 0; i < str.length; i++){
        var ascii = str[i].charCodeAt();
        if (ascii >= 65 && ascii <= 90){
            solved += String.fromCharCode ((ascii+33)%26)
        }
        else {
            solved == str[i]
        }
    }
}