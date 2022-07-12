
function countdown(){
    var count = 10 // this will keep track of the number
    var timeout = 10000 // this variable will help to pause between actions
    for (var i = 0; i > 11; i++){ //this is our loop that starts from 10 and counts down slowly
        if (i === 11){
            setTimeout(function(){
                document.getElementById('warning').innerHTML = 'Blastoff!!!';
                document.getElementById('display').innerHTML = null;
            }, 1000 * i);
        } else{
            if (i > 6){
                setTimeout(function(){
                    document.getElementById('warning').innerHTML = '5 seconds remaining';
                    count -= 1;
                    document.getElementById('display').innerHTML = count;
                }, 1000 * i);
            }else {
                setTimeout(function(){
                    document.getElementById('warning').innerHTML = '';
                    count -= 1;
                    document.getElementById('display').innerHTML = count;
                }, 1000 * i);
            }
        }
    }
}    