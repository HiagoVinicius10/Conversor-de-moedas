const convertButton = document.querySelector(".convert-button");
const currencySelect = document.querySelector(".currency-Select");




function convertValues() {
  const inpuntCurrencyValue = document.querySelector(".input-currency").value;
  const currencyValuetoConvert = document.querySelector(
    ".currency-value-to-convert"
  ); //Valor em Real.
  const currencyValueConverted = document.querySelector(".currency-value"); // Outras moedas.

  const dolarToday = 4.9;
  const euroToday = 5.3;
  const libraToday = 6.2;
  const bitcoinToday = 321.0

  const convertedValue = inpuntCurrencyValue / dolarToday;

  if (currencySelect.value == "dolar") {
    // Se o select estiver selecionado o valor de dolar, entre aqui
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inpuntCurrencyValue / dolarToday);
  }

  if (currencySelect.value == "euro") {
    // Se o select estiver selecionado o valor de euro, entre aqui
    currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(inpuntCurrencyValue / euroToday);
  }

  currencyValuetoConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(inpuntCurrencyValue);

  if (currencySelect.value == "libra") {
  currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
  }).format(inpuntCurrencyValue / libraToday);
}

if (currencySelect.value == "bitcoin") 
  currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE",{
    style:"currency",
    currency: "USD",
   }).format(inpuntCurrencyValue / bitcoinToday);
}

function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector (".currency-img")


    if(currencySelect.value == "dolar") {
        currencyName.innerHTML =  "dolar americano"
        currencyImage.src= "./assets/USA.png"
      }

    if(currencySelect.value == "euro") {
        currencyName.innerHTML =  "Euro"
        currencyImage.src= "./assets/Euro.png.png"

    }

    if (currencySelect.value == "libra") {
        currencyName.innerHTML = "Libra"
        currencyImage.src="./assets/libra.png"

    } 
    
    if (currencySelect.value == "bitcoin") {
       currencyName.innerHTML = "bitcoin"
       currencyImage.src="./assets/bitcoin.png"
      
    }


    convertValues()

}

currencySelect.addEventListener ("change", changeCurrency)


convertButton.addEventListener("click", convertValues);
