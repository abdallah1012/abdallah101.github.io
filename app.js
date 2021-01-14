'use strict';
console.log('Here\'s a hidden message\nThis is used for testing\ntesting mooore ...')

let today = new Date()
let formatDate = today.toDateString()
let selectElement = document.getElementById('datee')
selectElement.innerHTML = formatDate

let timetoday = new Date()
let t = timetoday.toTimeString()
selectElement = document.getElementById('time')
selectElement.innerHTML = t


function loggingin(u,p){ //use function to see if user exists in database (database still not created)

    var x = document.getElementById(u).value;
    var y = document.getElementById(p).value;

    console.log(x);
    console.log(y);

}


//This function opens the content of the horizantel tab if closed and closes if opened
function openS(evt, tabname){
    
    var i, tabcontent, tablinks;

    if(document.getElementById(tabname).style.display == "none")
    {
        tabcontent = document.getElementsByClassName("tabcontent");
    for(i = 0; i < tabcontent.length; i++)
    {
        tabcontent[i].style.display = "none";
        
    }

    tablinks = document.getElementsByClassName("tablink");
    for(i = 0; i < tablinks.length; i++)
    {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
        
    }

    document.getElementById(tabname).style.display = "block";

    // document.getElementById(tabname).slideToggle();

    evt.currentTarget.className += " active";
    }
    else{
        document.getElementById(tabname).style.display = "none";
        document.getElementById(tabname).className.replace(" active", "");
        tablinks = document.getElementsByClassName("tablink");
    for(i = 0; i < tablinks.length; i++)
    {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
        
    }

    }

}


