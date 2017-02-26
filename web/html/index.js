/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var personName = document.getElementById("inputName");
var protestLocation = document.getElementById("inputAddress");
var protestInfo = document.getElementById("inputInfo");

function submitClick() {

    // window.alert("hello");


    var personNameText = personName.value;
    var protestLocationText = protestLocation.value;
    var protestInfoText = protestInfo.value;
    console.log(personNameText + " " + protestLocationText + " " + protestInfoText);
    
    window.alert(personNameText);
    var fireBaseRef = firebase.database().ref();
   
    fireBaseRef.set({
        "Name": personNameText,
        "Protest Info": protestInfoText,
        "Protest Location": protestLocationText
    });



}


