var lista = [2];
var btncomp = document.getElementById("comp")
var btnsim = document.getElementById("sim")
var span = document.getElementById("resultado")

// ============= simples =====================
btncomp.addEventListener('click', function(){
    btncomp.style.display = "none"
    btnsim.style.display = "inline-block"
    lista.push(1)})
// ============= composto ====================
btnsim.addEventListener('click', function(){
    btnsim.style.display = "none"
    btncomp.style.display = "inline-block"
    lista.push(2)})

var btnenv = document.getElementById("enviou")

btnenv.addEventListener('click', function(){
    var numnum = (lista.length) - 1
    var capital = document.getElementById("cap").value
    var taxa = document.getElementById("taxa").value
    var temp = document.getElementById("temp").value

    if ( lista[numnum] == 1){
        let resultadofinal = capital * (taxa/100) * temp
        span.innerHTML = (resultadofinal)}
    if ( lista[numnum] == 2){
        let resultadofinal = capital * (( 1 + (taxa/100)) ** temp)
        span.innerHTML = (Math.round(resultadofinal*100)/100)}})