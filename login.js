// all js code for my login page here
function verify(){
    console.log("function called, variables recognised");
    var badge = document.getElementById("badge").value; // grabs the badge number
    var password = document.getElementById("password").value;// grabs the last name
    var username = document.getElementById("username").value; //grabs the first name
    var common = username + " " + password
    if (common.length > 40 || common.length < 2){ // if my var common is longer than 2 or shorter than 40
        console.log('fist invalid condition met(username too long or short)');
        alert('Invalid login credentials');
    }else{
        if (badge > 999 || badge < 100){ // ensures badge number is 3 digits between 100 and 300
            alert('Badge number invalid');
            console.log('second condition met(invalid player count)');
        }else{
            if (badge < 999 && badge > 100){
                console.log('login condition met'); //if the above conditions are false display the alert 
                alert('Login successful, Welcome  ' + username + ' ' + password + ' ID '+ badge);
                window.replace('counter.html'); // change to new window
            }          
        }
    }
}