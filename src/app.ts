type Scientist = {
    nickname: string,
    age: number,
    henchmen: number,
    description: string,
}


const allScientists: Scientist[] = [
    {
        nickname: "Muffin",
        age: 300,
        henchmen: 2,
        description: "An Old Evil Scientist with a young heart."

    },
    {
        nickname: "Jinglebell",
        age: 30,
        henchmen: 6,
        description: "Likes to improvise with evil stuff."
    },
    {
        nickname: "Truffle",
        age: 20,
        henchmen: 8,
        description: "Enjoys yoga and trees."

    },

]
// console.log(allScientists);

// retrieve data from HTML
const buttonAdd = document.getElementById('button-add') as HTMLButtonElement;
let unorderList = document.getElementById('unorder-list') as HTMLElement;
const showScientists = document.getElementById('show-arrScientists') as HTMLElement;
const detailedScientist = document.getElementById('detailed-scientist') as HTMLElement;
const detailedText = document.getElementById('detailed-text') as HTMLParagraphElement;
const detailedName = document.getElementById('detailed-name') as HTMLParagraphElement;
const detailedAge = document.getElementById('detailed-age') as HTMLParagraphElement;
const detailedHench = document.getElementById('detailed-hench') as HTMLParagraphElement;


// a function to show all Evil Scientists from the array.
function showArrScientists() {

    showScientists.innerHTML = "";
    //empties the array so it wont be duplicated

    for (let i = 0; i < allScientists.length; i++) {

        //creating a card with the scientists name and a button in order to click and find out more. We append it to the showScientists html.
        const createCard = document.createElement("div") as HTMLDivElement;
        createCard.className = "card";
        createCard.innerHTML = allScientists[i].nickname;
        const cardButton = document.createElement('button');
        cardButton.className = "showAll";
        cardButton.innerHTML = "About";
        showScientists.append(createCard);
        showScientists.append(cardButton);
        const allSciHeader = document.createElement("h2") as HTMLHeadingElement;
        showScientists.append(allSciHeader);
    }


    //listener when clicking on the About button
    const aboutButton = document.getElementsByClassName("showAll");
    for (let i = 0; i < aboutButton.length; i++) {
        aboutButton[i].addEventListener("click", function () {
            detailedName.innerHTML = `Name: ${allScientists[i].nickname}`;
            detailedText.innerHTML = `Description: ${allScientists[i].description}`;
            detailedAge.innerHTML = `Age: ${allScientists[i].age.toString()} years old`;
            detailedHench.innerHTML = `Amount of Henchmen: ${allScientists[i].henchmen.toString()}`;
        })
    }
}

// add a new scientist and push it to the existing array
buttonAdd.addEventListener('click', function (event) {
    event.preventDefault();

    const nameInput = document.getElementById('name-input') as HTMLInputElement;
    const ageInput = document.getElementById('age-input') as HTMLInputElement;
    const henchInput = document.getElementById('hench-input') as HTMLInputElement;
    const infoInput = document.getElementById('info-input') as HTMLInputElement;
    const errorMessage = document.getElementById('error-message') as HTMLElement;


    if (nameInput.value.length > 0, ageInput.value.length > 0, henchInput.value.length > 0) {
        errorMessage.innerHTML = "";
        const newScientist: Scientist = {
            nickname: nameInput.value,
            age: parseInt(ageInput.value),
            henchmen: parseInt(henchInput.value),
            description: infoInput.value,
        }

        allScientists.push(newScientist);
        showArrScientists();

        alert('Your Evil Scientist has been added!');
    } else {
        (errorMessage.innerHTML = 'You need to add something!');
    }


    //clearing the form 
    nameInput.value = "";
    ageInput.value = "";
    henchInput.value = "";
    infoInput.value = "";

}
);


showArrScientists();