
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
window.addEventListener("load", (event) => {
    convertidor()
  });

