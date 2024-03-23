/* LESSON 3 - Programming Tasks */

/* Profile Object  */

let myProfile = {
    name: "Gabe Elton",
    photo: "images/profile.jpg",
    favoriteFoods: [
        "Steak",
        "Salmon",
        "Shrimp",
        "Peas"
    ],
    hobbies: [
        "Climbing",
        "Games",
        "Wrestling"
    ],
    placesLived: [

    ]

};



/* Populate Profile Object with placesLive objects */

myProfile.placesLived.push( 
    {
        place: "Idaho",
        time: "6 years"
    }
);
myProfile.placesLived.push( 
    {
        place: "California",
        time: "7 years"
    }
);
myProfile.placesLived.push( 
    {
        place: "Utah",
        time: "6 years"
    }
);
myProfile.placesLived.push( 
    {
        place: "Pennsylvania",
        time: "5 years"
    }
);


/* DOM Manipulation - Output */

/* Name */

document.querySelector("#name").textContent = myProfile.name;

/* Photo with attributes */

document.querySelector("#photo").setAttribute("src", myProfile.photo);
document.querySelector("#photo").setAttribute("alt", myProfile.name);

/* Favorite Foods List*/

myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
});

/* Hobbies List */

myProfile.hobbies.forEach (hoby => {
    let li = document.createElement('li');
    li.textContent = hoby;
    document.getElementById("hobbies").appendChild(li);
});

/* Places Lived DataList */

myProfile.placesLived.forEach (item => {
    let dt = document.createElement('dt');
    dt.textContent = item.place;

    let dd = document.createElement('dd');
    dd.textContent = item.time;

    document.getElementById("places-lived").appendChild(dt);
    document.getElementById("places-lived").appendChild(dd);
});

