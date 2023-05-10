function myfun(){
    let input=document.getElementById("creditnum").value;
    let res = document.getElementById("result");
    res.style.left = "70px";
    if(checkInp(input)){
        document.getElementById("name").style.visibility = "visible" ;
        document.getElementById("name2").style.visibility = "visible" ;
        if(validcard(input)){
        res.style.color = "green";
        res.innerText="Valid Card";
        bankcheck(input);
        
    }
    else{
        res.style.color = "red";
        res.innerHTML=("unvalid card");
        let output = document.getElementById("out");
        output.innerHTML="UNIDENTIFIED";
    }
    }
}

function validcard(card){
    let digits = card.length;
    let sum=0;
    let second = false;
    for (let i = digits-1; i >=0; i--)
    {
        let num = card[i] - '0';
        if(second){
            num*=2;
            if(num>=10){
                sum+=Math.floor(num/10);
                sum+=Math.floor(num%10);
            }
            else{
                sum+=num;
            }
        }
        else{
            sum+=num;
        }
        second = !second;
    }
    console.log(sum);
    return (sum%10==0);
}
function checkInp(inputNumber) {
    let input = inputNumber.toString().trim();
    console.log(input.length);
    if (input.length > 0) {
        var x = parseInt(Number(input))
        if (isNaN(x)) {
            alert("Input should contain only numbers");
            return false;
        }
        if(input.length>16){
            alert("cahracter limit exceeded");
            return false;
        }
    }
    else {
        alert("Input should not be empty");
        return false;
    }
    return true
}
function array(num){
    let arr = [];
    for (let i = 0; i <=2; i++)
    {
        let digi = num[i] - '0';
        arr.push(digi);
    }
    return arr;
}
function bankcheck(input){
    let digi = input[0]+input[1];
    let output = document.getElementById("out");
    switch (digi) {
        case "34":
        case "37":
            output.innerHTML="AMERICAN EXPRESS"
            console.log("amex");
            break;
        case "51":
        case "52":
        case "53":
        case "54":
        case "55":
        case "22":
            output.innerHTML="MASTERCARD"
            console.log("mastercard");
            break;
        case "40":
        case "41":
        case "42":
        case "43":
        case "44":
        case "45":
        case "46":
        case "47":
        case "48":
        case "49":
            output.innerHTML="VISA"
            console.log("visa");
            break;
        case "65":
        case "60":
            output.innerHTML="RUPAY"
            console.log("rupay");
            break;
            
            default:
            output.innerHTML="UNIDENTIFIED"
            console.log("unidentified");
            break;
    }
}