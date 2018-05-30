function popup(){
    var frame=document.getElementById("wrapper");
    var invalidMessage=document.createTextNode("The Full Name you entered is invalid. Please refresh and resend the form.");
    var h=document.createElement("h3");
    h.className="invalidMsg";
    h.appendChild(invalidMessage);
    frame.appendChild(h);
}
function validateNameForm(){
    var validNameNoA = document.getElementById("fName").value.indexOf("a",0);
    var validNameNoD = document.getElementById("fName").value.indexOf("d",0);
    var validNameNoSpace = document.getElementById("fName").value.indexOf(" ",0);

    // console.log(document.getElementById("fName").value);                                                        //--string checker--//
    // console.log(validNameNoA);                                                                                  //--string checker--//
    // console.log(validNameNoD);                                                                                  //--string checker--//
    // console.log(validNameNoSpace);                                                                              //--string checker--//
    if(validNameNoA<0 && validNameNoD<0 && validNameNoSpace<0)
        return true;
    else{
        popup();
        return false;
    }
}