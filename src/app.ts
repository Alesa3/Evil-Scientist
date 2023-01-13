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
        description: "Likes to improvise with evil stuff"
    },
    {
        nickname: "Truffle",
        age: 20,
        henchmen: 8,
        description: "Enjoys yoga and trees"

    },

]
console.log(allScientists);

// a function to show all Evil Scientists from the array 


const buttonAdd = document.getElementById('button-add') as HTMLButtonElement;
let unorderList = document.getElementById('unorder-list') as HTMLElement;
const showScientists = document.getElementById('show-scientists') as HTMLElement;
const detailedScientist = document.getElementById('detailed-scientist') as HTMLElement;
const detailedText = document.getElementById('detailed-text') as HTMLParagraphElement;
// const sectionId = document.querySelector('.div') as HTMLElement;


function printArrScientists() {

    for (let i = 0; i < allScientists.length; i++) {

        const createCard = document.createElement("div") as HTMLDivElement;
        createCard.className = "card";
        createCard.innerHTML = allScientists[i].nickname;
        const cardButton = document.createElement('button');
        cardButton.className = "showAll";
        cardButton.innerHTML = "Find out more";
        showScientists.append(createCard);
        showScientists.append(cardButton);
    }

    //listener when clicking on the nickname
    const aboutButton = document.getElementsByClassName("showAll");

    for (let i = 0; i < aboutButton.length; i++) {
        aboutButton[i].addEventListener("click", function () {
            // let listElement = document.createElement('li');
            // unorderList.append(listElement)
            detailedText.innerHTML = allScientists[i].nickname, allScientists[i].age, allScientists[i].henchmen, allScientists[i].description;

        })
    }

}

// a function to add a new scientist and push it to the existing array

buttonAdd.addEventListener('click', (e) => {
    e.preventDefault();

    const nameInput = document.getElementById('name-input') as HTMLInputElement;
    const ageInput = document.getElementById('age-input') as HTMLInputElement;
    const henchInput = document.getElementById('hench-input') as HTMLInputElement;
    const infoInput = document.getElementById('info-input') as HTMLInputElement;


    if (nameInput.value.length > 0, ageInput.value.length > 0, henchInput.value.length > 0) {
        const newScientist: Scientist = {
            nickname: nameInput.value,
            age: parseInt(ageInput.value),
            henchmen: parseInt(henchInput.value),
            description: infoInput.value,
        }

        allScientists.push(newScientist);
        showScientists.innerHTML = "";
        console.log(newScientist);
        printArrScientists();
    }
});
