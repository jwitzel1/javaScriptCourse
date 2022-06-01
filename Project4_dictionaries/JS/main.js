function myDictionary(){
    var Book = {
        Chapter1:"forward",
        Chapter2:"intro",
        Chapter3:"content1",
        Chapter4:"content2",
        Chapter5:"content3",
        Chapter6:"conclusion",
        Chapter7:"afterward"
    };
    delete Book.Chapter1;
    document.getElementById("Dictionary").innerHTML = "BOOK: <br />Chapter1: " + Book.Chapter1 + "<br />Chapter7: "+Book.Chapter7;
}

