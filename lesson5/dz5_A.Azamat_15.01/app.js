const som = document.querySelector("#som")
const usd = document.querySelector("#usd")
const cny = document.querySelector("#cny")

const convert = (elem, target, target2) => {
    elem.addEventListener("input", () => {
        const request = new XMLHttpRequest()
        request.open("GET", "data.json")
        request.setRequestHeader("Content-type", "application/json")
        request.send()
        request.addEventListener("load", () => {
            const response = JSON.parse(request.response)
            if (elem === som){
                target.value = (elem.value / response.usd).toFixed(2)
                if (elem === som) {
                    target2.value = (elem.value / response.cny).toFixed(2)
                }
            } else if (elem === usd){
                target.value = (elem.value * response.usd).toFixed(2)
                if (elem === usd){
                    target2.value = (target.value / response.cny).toFixed(2)
                }
            } else if (elem === cny){
                target2.value = (elem.value * response.cny).toFixed(2)
                if (elem === cny){
                    target.value = (target2.value / response.usd).toFixed(2)
                }
            }

            elem.value === "" ? (target.value = "") : null;
            elem.value === "" ? (target2.value = "") : null;
        })
    })
};
convert(som, usd, cny)
convert(usd, som, cny)
convert(cny, usd, som)







