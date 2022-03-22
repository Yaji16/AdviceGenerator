//getting the DOM elements - the id and the advice

let adviceId = document.querySelector('#advice-id');
let advice = document.querySelector('.advice');
const button = document.querySelector('.btn');

//need to get the api object and populate the content of id and advice when the button is clicked 
//While loading - should have some quote
//clicking the button should give new advices.

button.addEventListener('click',()=>{
    getAdvice();
});

window.onload = () => {
    getAdvice();
};

function getAdvice(){
    fetch('https://api.adviceslip.com/advice')
    .then(response => {return response.json();})
    .then(adviceData => {
        const adviceObj = adviceData.slip;
        adviceId.textContent = adviceObj.id;
        advice.textContent = `"${adviceObj.advice}"`;
    })
    .catch(error => {console.log(error);});
}