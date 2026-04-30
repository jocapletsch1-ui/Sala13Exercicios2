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
