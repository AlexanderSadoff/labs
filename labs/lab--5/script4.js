var r = [];
let check;
var turns = 9;
for(var j = 0; j<10; ++j) r[j]=j;
function turn(i){

if (r[i]==i){
    r[i]='O';
    document.getElementById("b"+i).innerHTML = 'O';
    --turns;
    checkin();
    if (check==1){turns=0}
    ai(turns);
}

}
function ai(){
    if (turns > 1) {
        var b = false;
        var i = Math.floor(Math.random() * 8) + 1;
        while (b != true) {
            if (r[i] == i) {
                r[i] = 'X';
                document.getElementById("b" + i).innerHTML = 'X';
                b = true;
            } else i = Math.floor(Math.random() * 8) + 1;
        }
        --turns;
        if (check==1){turns=0}
    }
    if (check!==1 && turns===0){alert('Ничья')};
}
function checkin(){
    if (r[1] === r[2] && r[1]===r[3]){
        if (r[1]==='X'){
            alert("You lose!");
            check = 1;
        }else{
            alert("You win!");
            check = 1;
        }

    }
    if (r[4] === r[5] && r[4]===r[6]){
        if (r[4]==='X'){
            alert("You lose!");
            check = 1;
        }else{
            alert("You win!");
            check = 1;
        }

    }
    if (r[7] === r[8] && r[7]===r[9]){
        if (r[7]==='X'){
            alert("You lose!");
            check = 1;
        }else{
            alert("You win!");
            check = 1;
        }

    }
    if (r[1] === r[4] && r[1]===r[7]){
        if (r[1]==='X'){
            alert("You lose!");
            check = 1;
        }else{
            alert("You win!");
            check = 1;
        }

    }
    if (r[2] === r[5] && r[2]===r[8]){
        if (r[2]==='X'){
            alert("You lose!");
            check = 1;
        }else{
            alert("You win!");
            check = 1;
        }

    }
    if (r[3] === r[6] && r[3]===r[9]){
        if (r[3]==='X'){
            alert("You lose!");
            check = 1;
        }else{
            alert("You win!");
            check = 1;
        }

    }
    if (r[1] === r[5] && r[1]===r[9]){
        if (r[1]==='X'){
            alert("You lose!");
            check = 1;
        }else{
            alert("You win!");
            check = 1;
        }

    }
    if (r[3] === r[5] && r[3]===r[7]){
        if (r[3]==='X'){
            alert("You lose!");
            check = 1;
        }else{
            alert("You win!");
            check = 1;
        }

    }
}
