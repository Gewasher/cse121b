/* W05: Programming Tasks */

/* Declare and initialize global variables */

const apartmentElement = document.getElementById("apartment");
const complexElement = document.getElementById("complex")
let dropdown = document.getElementById("dropdown")
let apartmentList = [];
let rentList = [];



const displayApartment = (apartments, number) => {

        reset()
        
        let expectedRent = ""

        if(apartments[number].level == "lower")
        {
            expectedRent = "550"
        }
        else
        {
            expectedRent ="750"
        }
        let article = document.createElement("article");

        let h3 = document.createElement("h3");
        h3.innerHTML = `Apartment #${apartments[number].aptnum}`;

        let resident = document.createElement("p");
        resident.innerHTML = `Resident: ${apartments[number].Resident}`;

        let level = document.createElement("p");
        level.innerHTML = `Level: ${apartments[number].level}`;

        let rent = document.createElement("p");
        rent.innerHTML = `Rent: \$${apartments[number].rent}/month`;
        
        let eRent = document.createElement("p");
        eRent.innerHTML = `Expected Rent: \$${expectedRent}/month`;

        
        article.appendChild(h3);
        article.appendChild(resident)
        article.appendChild(level);
        article.appendChild(rent);
        article.appendChild(eRent);

        apartmentElement.appendChild(article);

}

const displayComplex = (apartments) =>{
    

    let upkeep = apartments[0].complexCosts[0].upkeep;
    let insurance = apartments[0].complexCosts[0].insurance;
    let mortgage = apartments[0].complexCosts[0].mortgage;
    let totalCost = upkeep + mortgage + insurance;

    apartments.shift();
    getRentList(apartments);

    let totalRevenue = rentList.reduce((sum, number) => sum + number)
    
    
    let article = document.createElement("article");

    let h3 = document.createElement("h3");
    h3.innerHTML = `Complex Info:`;

    let upkeepP = document.createElement("p");
    upkeepP.innerHTML = `Upkeep: \$<font color="red">${upkeep}</font>/month`;

    let insuranceP = document.createElement("p");
    insuranceP.innerHTML = `Insurance: \$<font color="red">${insurance}</font>/month`;

    let mortgageP = document.createElement("p");
    mortgageP.innerHTML = `Mortgage: \$<font color="red">${mortgage}</font>/month`;

    let totalCostP = document.createElement("p");
    totalCostP.innerHTML = `Total Cost: \$<font color="red">${totalCost}</font>/month`;

    let totalRevenueP = document.createElement("p");
    totalRevenueP.innerHTML = `Total Revenue: \$<font color="green">${totalRevenue}</font>/month`;

    let netRevenue = document.createElement("p");
    netRevenue.innerHTML = `Net Revenue: \$<font color="green">${totalRevenue-totalCost}</font>/month`;


    
    article.appendChild(h3);
    article.appendChild(upkeepP)
    article.appendChild(insuranceP);
    article.appendChild(mortgageP);
    article.appendChild(totalCostP);
    article.appendChild(totalRevenueP);
    article.appendChild(netRevenue);

    complexElement.appendChild(article);

}

const getRentList = (apartments) =>{
    apartments.forEach(apartment => {
        let rent = apartment.rent;
        rentList.push(rent)
    });
}




const getData = async () => {
    const response = await fetch("https://gewasher.github.io/cse121b/project/apartments.json");
    if (response.ok) {
        const data = await response.json();
        apartmentList = data;
        displayApartment(apartmentList, 1)
        displayComplex(apartmentList)
    }
}

function reset()
{
    apartmentElement.innerHTML = "";
}



dropdown.addEventListener("change", () => displayApartment(apartmentList, dropdown.value));


getData();

