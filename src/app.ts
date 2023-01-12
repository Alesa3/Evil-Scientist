

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


// a function to show all Evil Scientists from the array 

const showScientists = document.getElementById('show-scientists') as HTMLElement;
const detailedScientist = document.getElementById('detailed-scientist') as HTMLElement;
const detailedText = document.getElementById('detailed-text') as HTMLParagraphElement;


function printScientists() {
    console.log("hit?")

    for (let i = 0; i < length; i++) {
        console.log("men hit?")
        const createCard = document.createElement("div") as HTMLDivElement;
        createCard.className = "card";
        createCard.innerHTML = `${allScientists[i].nickname}`;
        const cardButton = document.createElement('button');
        cardButton.className = "showScientists";
        cardButton.innerHTML = "About";
        showScientists.append(createCard);
        showScientists.append(cardButton);

    }
    console.log(printScientists);


    //listener when clicking on the nickname
    const aboutButton = document.getElementsByClassName("showScientists");

    for (let s = 0; s < aboutButton.length; s++) {
        aboutButton[s].addEventListener("click", function () {
            detailedText.innerHTML = `${allScientists[s].description}`

        })
    }

}

// a function to add a new scientist

const buttonAdd = document.getElementById('button-add') as HTMLButtonElement;
const nameInput = document.getElementById('name-input') as HTMLInputElement;
const ageInput = document.getElementById('age-input') as HTMLInputElement;
const henchInput = document.getElementById('hench-input') as HTMLInputElement;
const infoInput = document.getElementById('info-input') as HTMLInputElement;

buttonAdd.addEventListener('click', (e) => {
    e.preventDefault();

    const newScientist: Scientist = {
        nickname: nameInput.value,
        age: parseInt(ageInput.value),
        henchmen: parseInt(henchInput.value),
        description: infoInput.value,
    }

    allScientists.push(newScientist);
    showScientists.innerHTML = "";
    console.log(newScientist);
    printScientists();
});

