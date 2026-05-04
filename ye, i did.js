function somar(){
    var n1 = document.getElementById("n1").valueAsNumber
    var n2 = document.getElementById("n2").valueAsNumber 
    var resp = document.getElementById("respostasoma")
    resp.textContent = n1 + n2
}
function dividir(){
    var n3 = parseFloat(document.getElementById("n3").value)
    var n4 = parseFloat(document.getElementById("n4").value)
    var resp = document.getElementById("respostadividir")
    resp.textContext = n3 / n4

    if (n4 !== 0)
        resp.textContext = n3 / n4

    else
        resp.textContent = "Esse número é invalido."
}
function multiplicar(){
    var n5 = document.getElementById("n5").valueAsNumber
    var n6 = document.getElementById("n6").valueAsNumber
    var resp = document.getElementById("respostamultiplicar")
    resp.textContent = n5 * n6
}
function subtrair(){
    var n7 = document.getElementById("n7").valueAsNumber
    var n8 = document.getElementById("n8").valueAsNumber
    var resp = document.getElementById("respostasubtrair")
    resp.textContent = n7 - n8
}
