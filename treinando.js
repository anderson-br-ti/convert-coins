const currentCurrency = document.querySelector(".currency-to-convert")
const finalCurrency = document.querySelector(".final-coin")
const finalValue = document.querySelector(".final-value")
const finalFlag = document.querySelector(".coin-flag")

function convert() {
    const initialValue = document.querySelector(".initial-value")
    const typedValue = document.querySelector(".input-value")

    typedValue.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(initialValue.value)

    if (currentCurrency.value == "dollar") {
        finalValue.innerHTML = `US$ ${(initialValue.value / 5.2).toFixed(2)}`
    }
    if (currentCurrency.value == "euro") {
        finalValue.innerHTML = `€ ${(initialValue.value / 6.2).toFixed(2)}`
    }
    if (currentCurrency.value == "libra") {
        finalValue.innerHTML = `£ ${(initialValue.value / 6).toFixed(2)}`
    }
    if (currentCurrency.value == "cad") {
        finalValue.innerHTML = `CAD ${(initialValue.value / 4).toFixed(2)}`
    }
}

function changeCurrency() {
    if (currentCurrency.value == "euro") {
        finalCurrency.innerHTML = "Euro"
        finalFlag.src = "./img/euro.png"

    }
    if (currentCurrency.value == "dollar") {
        finalCurrency.innerHTML = "Dólar"
        finalFlag.src = "./img/usa-flag.png"
    }
    if (currentCurrency.value == "libra") {
        finalCurrency.innerHTML = "Libra"
        finalFlag.src = "./img/libra.png"
    }
    if (currentCurrency.value == "cad") {
        finalCurrency.innerHTML = "Dólar canadense"
        finalFlag.src = "./img/cad.png"
    }

    convert()
}

currentCurrency.addEventListener('change', changeCurrency)