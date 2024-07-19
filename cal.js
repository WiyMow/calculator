const inputEI = document.querySelector(".calculator input");
const historyEI = document.querySelector(".calculator .history");
inputEI.value = "0";

function handleButtonClick(e){
    const key = e.target.value;
    if(key === "c"){
        inputEI.value = "0";
        historyEI.innerText = "";
    } else if (key === "del"){
        if(
            inputEI.value === "Math error" ||
            inputEI.value === "infinity"
        ){
            inputEI.value= "0";
        } else {
            inputEI.value = inputEI.value.substr(
                0,
                inputEI.value.length - 1
            ) || 0;
        }
    } else if(key === "="){
        try{
            const val = inputEI.value;
            inputEI.value = eval(val);
            historyEI.innerText = val;
        } catch(error){
            historyEI.innerText = "";
            inputEI.value = "Math error";
        }
    } else {
        if(
            inputEI.value === "0" ||
            inputEI.value === "NaN" ||
            inputEI.value === "undefined" ||
            inputEI.value === "Math error" ||
            inputEI.value === "Infinity"
        ) {
            inputEI.value = key;
        } else {
            inputEI.value =  inputEI.value + key;
        }
    }
}

[...document.querySelectorAll(".calculator button")].forEach(el => {
    el.addEventListener("click", handleButtonClick);
})