

function getData(cardData) {
    console.log(cardData);
}

console.log

//function getData()

fetch("cards.json")
    .then(response => {
    return response.json();
    })
    .then(jsondata => getData(jsondata));