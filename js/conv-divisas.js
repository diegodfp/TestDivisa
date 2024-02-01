window.addEventListener("load", (event) => {
    convertidor()
  });

window.onload = function() {
    const prueba = function() {
        let caja1 = document.getElementById("cant-orig")
        let caja2 = document.getElementById("cant-dest")

        caja1.className += "colorearA"
        caja2.className += "colorearB"
    }
    document.getElementById('cant-orig').addEventListener('input',prueba); 

};
async function convertidor() {
    const divorig = document.getElementById("div-orig")
    const divdes = document.getElementById("div-dest")
    const url = `https://cdn.dinero.today/api/boa.json`;
    const respuesta = await fetch(url);
    if (!respuesta.ok)
        throw new Error("Error. tasa incorrecta")
    const json = await respuesta.json();
    for (const property in json.rates) {

        divorig.innerHTML += `<option value="${property}">${property}</option>`
        divdes.innerHTML += `<option value="${property}">${property}</option>`
      }   
}

//async function convertidor() {
//     let origen = parseFloat(document.getElementById('cant-orig').value)
//     let monedaOrigen = document.getElementById("div-orig")
//     let monedaDestino = document.getElementById("div-dest")
//     const url = `https://cdn.dinero.today/api/boa.json`;
//     const respuesta = await fetch(url);
//     if (!respuesta.ok)
//         throw new Error("Error. tasa incorrecta")
//     const json = await respuesta.json();
//     console.log(json.rates)
//     let valorOrigen =  parseFloat(json.rates.monedaOrigen)
//     let valorDestino =  parseFloat(json.rates.monedaDestino)
//     convertido =  (valorOrigen * origen) / valorDestino
//     console.log(convertido)
//     document.getElementById('cant-dest').value = convertido.toFixed(2) 
// }








