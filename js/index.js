//Allons-y

//declare variables here
const monsterUrl = "http://localhost:3000/monsters";
let limit = 50;
let page = 1;

//On page load, do workies
document.addEventListener("DOMContentLoaded", () => {

    getMonsters();
    renderMonsterForm();
});

function getMonsters(){
    fetch(`${monsterUrl}/?_limit=${limit}&_page=${page}`)
        .then(res => res.json())
        .then(monstersData => {
            console.log(monstersData);
            monstersData.forEach(monsterData => renderMonster(monsterData));
        });
}

function renderMonster(monsterData){
    let monsterInfo = document.createElement('div');
    monsterInfo.classList.add('monster-info');
    let h4 = document.createElement("h4");
    h4.innerText = `Name: ${monsterData.name}`;
    let h6 = document.createElement("h6");
    h6.innerText = `Age: ${monsterData.age}`
    let p = document.createElement("p");
    p.innerText = `Description: ${monsterData.description}`

    monsterInfo.append(h4, h6, p);
    let monsterContainer = document.getElementById('monster-container');
    monsterContainer.appendChild(monsterInfo);
}

//Have a form to create a new monster above your list of monsters
//Create input fileds for name, age, description
//Have a 'Create Monster Button'
function renderMonsterForm(){
    let createMonsterContainer = document.getElementById("create-monster"); //locate the create monster div
    let form = document.createElement("form");
    form.classList.add("create-monster-form");

    let nameInput = document.createElement("input");
    nameInput.classList.add("input-text");
    nameInput.type = "text";
    nameInput.name = "name";
    nameInput.value = "";
    nameInput.placeholder = "Enter a monster's name..."
    
    let ageInput = document.createElement("input");
    ageInput.classList.add("input-text");
    ageInput.type = "text";
    ageInput.name = "age";
    ageInput.value = "";
    ageInput.placeholder = "Enter a monster's age..."

    let descriptionInput = document.createElement("input");
    descriptionInput.classList.add("input-text");
    descriptionInput.type = "text";
    descriptionInput.name = "description";
    descriptionInput.value = "";
    descriptionInput.placeholder = "Enter a monster's description..."

    let createMonsterBtn = document.createElement("input");
    createMonsterBtn.type = "submit";
    createMonsterBtn.name = "submit";
    createMonsterBtn.value = "Create Monster Button";
    createMonsterBtn.classList.add("submit");

    form.append(nameInput, ageInput, descriptionInput, createMonsterBtn);
    createMonsterContainer.appendChild(form);
}
