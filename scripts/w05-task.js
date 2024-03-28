/* W05: Programming Tasks */

/* Declare and initialize global variables */

const templesElement = document.querySelector("div");
let templeList = [];

/* async displayTemples Function */

const displayTemples = (temples) => {
    temples.forEach(temple => {
        let article = document.createElement("article");

        let h3 = document.createElement("h3");
        h3.innerHTML = temple.templeName;

        let img = document.createElement("img");
        img.setAttribute("src", temple.imageUrl)
        img.setAttribute("src", temple.imageUrl)
        
        article.appendChild(h3);
        article.appendChild(img);

        templesElement.appendChild(article);

    })
}

/* async getTemples Function using fetch()*/

const getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    if (response.ok) {
        const data = await response.json();
        templeList = data;
        displayTemples(templeList);

    }
}

/* reset Function */

function reset()
{
    templesElement.innerHTML = "";
}


/* filterTemples Function */

const filterTemples = (temples) => {
    reset()
    let filter = document.getElementById("filtered");
    switch (filter.value) {
        case "utah":
            displayTemples(templeList.filter(temple => temple.location.includes("Utah")));
            break;
        case "notutah":
            displayTemples(templeList.filter(temple => !temple.location.includes("Utah")));            console.log(filter.value)
            break;
        case "older":
            displayTemples(templeList.filter(temple => new Date(temple.dedicated) < new Date(1950, 0, 1)))
            break;
        case "all":
            displayTemples(templeList)
            break;
    }
}

/* Event Listener */

document.getElementById("filtered").addEventListener("change", () => filterTemples(templeList));

getTemples();