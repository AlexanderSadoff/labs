var stupid = 0;
function btnc(s){
    var str ='';
     if (s=='*'||s=='-'||s=='+'||s=='/') ++stupid;
    if (stupid<2||s == 'C') {
        if (document.getElementById("res").innerHTML.length > 18&&!s=='C') {
            document.getElementById("res").innerHTML = 'Перебор!';
        } else {
            if (s == 'C') {
                document.getElementById("res").innerHTML = '0';
                stupid = 0;
            } else {
                if (s == '=') {
                    document.getElementById("res").innerHTML = eval(document.getElementById("res").innerHTML);
                    if (document.getElementById("res").innerHTML == 'Infinity') {
                        document.getElementById("res").innerHTML = 'Серьёзно?';
                    }
                    stupid = 0;
                } else {
                        if (document.getElementById("res").innerHTML == '0') {
                        document.getElementById("res").innerHTML = s;
                    } else document.getElementById("res").innerHTML += s;
                }
            }
        }
    } else {
        document.getElementById("res").innerHTML = "Калькулятор слабый(";
    }
}
