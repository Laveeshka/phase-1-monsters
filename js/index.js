//Allons-y

//declare variables here
const monsterUrl = "http://localhost:3000/monsters";
let limit = 50;
let page = 1;

//On page load, do workies
document.addEventListener("DOMContentLoaded", () => {

    getMonsters();
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
