
async function convertidor() {
    const divorig = document.getElementById("div-orig")
    const divdes = document.getElementById("div-dest")
    const url = `https://cdn.dinero.today/api/boa.json`;
    const respuesta = await fetch(url);
    if (!respuesta.ok)
        throw new Error("Error. tasa incorrecta")
    const json = await respuesta.json();
    console.log(json)
    console.log(json.rates)
    for (const property in json.rates) {
        console.log(`${property}`);
        divorig.innerHTML += `<option value="${property}">${property}</option>`
        divdes.innerHTML += `<option value="${property}">${property}</option>`
      }   
}

async function convertidor() {
    let origen = parseFloat(document.getElementById('cant-orig').value)
    let monedaOrigen = document.getElementById("div-orig")
    let monedaDestino = document.getElementById("div-dest")
    const url = `https://cdn.dinero.today/api/boa.json`;
    const respuesta = await fetch(url);
    if (!respuesta.ok)
        throw new Error("Error. tasa incorrecta")
    const json = await respuesta.json();
    console.log(json.rates)
    let valorOrigen =  parseFloat(json.rates.monedaOrigen)
    let valorDestino =  parseFloat(json.rates.monedaDestino)
    convertido =  (valorOrigen * origen) / valorDestino
    console.log(convertido)
    document.getElementById('cant-dest').value = convertido.toFixed(2) 
}

let inputOrigen = document.getElementById('cant-orig')

inputOrigen.addEventListener('input', function () {
    const celsius = parseFloat(cenInput.value);
    if (!isNaN(celsius)) {
        farInput.value = convertirCenToFah(celsius).toFixed(2);
        actualizarFondo(farInput);
    } else {
        farInput.value = '';
        farInput.style.backgroundColor = '';
    }
});


window.addEventListener("load", (event) => {
    convertidor()
  });

