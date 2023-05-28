function add() {
    var result =
    Number(document.getElementById("firstno").value) +
    Number(document.getElementById("secondno").value);
    document.getElementById("result").innerHTML=result;
    }
    function sub() {
    var result =
    Number(document.getElementById("firstno").value) -
    Number(document.getElementById("secondno").value);
    document.getElementById("result").innerHTML=result;
    }
    function mul() {
    var result =
    Number(document.getElementById("firstno").value) *
    Number(document.getElementById("secondno").value);
    document.getElementById("result").innerHTML=result;
    }
    function div() {
    var result =
    Number(document.getElementById("firstno").value) /
    Number(document.getElementById("secondno").value);
    document.getElementById("result").innerHTML=result;
    }
    