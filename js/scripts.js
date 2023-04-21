
// Elements responsives
let text = document.querySelector(".drawer");
let btn = document.querySelector(".menu-mobile");
let button = document.querySelector (".close");
let isVisible = false;

btn.addEventListener('click', () =>{
isVisible =! isVisible;
isVisible ? text.classList.add('is-visible') : false ;
})
button.addEventListener('click', () =>{
    isVisible =! isVisible;
    isVisible ? true : text.classList.remove('is-visible') ;
    })


// Ajout des fichiers Json
let courTemp = ` 
    <div class="cours-items">
        <img src="images/Git.jpeg" alt="cours 1">
        <h2>Git & GitHub</h2>
        <p>05 heures</p>
    </div>`


let coursListView = document.querySelector(".cours-list")
if(coursListView) {
    fetch('js/cours.json')
    .then((reponse) => reponse.json())
    .then((data) => {
        console.log(data)
        let courses = data
        for (const cours of courses) {
            coursListView.innerHTML +=
            ` 
    <div class="cours-items">
        <img src=${cours.image}>
        <h2>${cours.name}</h2>
        <p>${cours.time} heures</p>
    </div>`
        }
    });
}

// let listView = document.querySelector(".name-list");
// let saveButton = document.querySelector("button");
// let inputName = document.getElementById ("message");

// saveButton.addEventListener('click',function(e) {
    
//     e.preventDefault()

//     let name = inputName.value

//     if(name != '' && name != null) {
//         let item = document.createElement("li");
       
//          item.innerText = name
//          inputName.value = ''

//         listView.appendChild(item)

//     }

// })
// page communaute
let membersTemp = ` <div class="members-items">
<img src="images/selfie.jpg" alt="Membres">
<h2>Ludwig Van</h2>
</div>`

let membersListView = document.querySelector(".members-list");
if(membersListView) {
    fetch('js/communaute.json')
    .then((reponse) => reponse.json())
    .then ((data) => {
        console.log(data)
        let members = data
        for (const member of members) {
            membersListView.innerHTML += 
            ` <div class="members-items">
<img src="images/selfie.jpg">
<h4>Ludwig Van</h4>
</div>`     
        }

    });

}
