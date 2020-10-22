//variables
const nameInput = document.querySelector(".name-input");
const descriptionInput = document.querySelector(".description-input");
const addbBtn = document.querySelector(".submit-button");
const plantContainer = document.querySelector(".plant-container");
const plantList = document.querySelector(".plant-list");
const plantPhoto = document.getElementById("plant-photo").files;

//todays date
const today = new Date();
const day = today.getDate();
const month = today.getMonth() + 1;
const year = today.getFullYear();

if (day < 10) {
	day = "0" + day;
}
if (month < 10) {
	month = "0" + month;
}

const date = document.getElementById("date");

date.innerHTML = year + "-" + month + "-" + day;

//event listeners//
addbBtn.addEventListener("click", containerCreator);

//function to create the div with plant information
function containerCreator(event) {
	event.preventDefault();

	// create plant Div
	const plantDiv = document.createElement("div");
	/*plantDiv.classList.add("plant-list");*/

	//Display plant photo

	//variables to date
	const date = new Date();
	const dayOfTheMonth = date.getDate();

	//variables to rewater
	const dueWaterDate = dayOfTheMonth + 5;
	const daysToRewater = dueWaterDate - dayOfTheMonth;
	localStorage.setItem("dueWaterDate", dueWaterDate);

	//variables to fertilize
	const dueFertilizeDate = dayOfTheMonth + 12;
	const daysToFertilize = dueFertilizeDate - dayOfTheMonth;
	localStorage.setItem("dueFertilizeDate", dueFertilizeDate);

	//variables to repot
	const dueRepotDate = dayOfTheMonth + 45;
	const daysToRepot = dueRepotDate - dayOfTheMonth;
	localStorage.setItem("dueRepotDate", dueRepotDate);

	//Creates the header/name for the container
	const newName = document.createElement("h2");
	plantDiv.appendChild(newName);
	newName.innerText = nameInput.value;
	newName.classList.add("plant-name");

	// Clears name input
	nameInput.value = "";

	//Creates the description for the plant
	const newDescription = document.createElement("p");
	plantDiv.appendChild(newDescription);
	newDescription.innerText = descriptionInput.value;
	newDescription.classList.add("info-text");

	// Clears name input
	descriptionInput.value = "";

	//todo - water
	//Create check button - water
	const checkWaterBtn = document.createElement("button");
	plantDiv.appendChild(checkWaterBtn);
	checkWaterBtn.classList.add("water-btn");
	if (daysToRewater === 1) {
		checkWaterBtn.innerText = "Water in " + daysToRewater + " day";
	} else {
		checkWaterBtn.innerText = "Water in " + daysToRewater + " days";
	}
	checkWaterBtn.addEventListener("click", function () {
		checkWaterBtn.innerText = "Water in 5 days";
	});
	checkWaterBtn.classList.add("water-btn");

	//todo - fertilize
	//Create check button - fertilize
	const fertilizeBtn = document.createElement("button");
	fertilizeBtn.classList.add("fertilize-btn");
	plantDiv.appendChild(fertilizeBtn);
	if (daysToFertilize === 1) {
		fertilizeBtn.innerText = "Fertilize me in " + daysToFertilize + " day";
	} else {
		fertilizeBtn.innerText = "Fertilize me in " + daysToFertilize + " days";
	}
	fertilizeBtn.addEventListener("click", function () {
		fertilizeBtn.innerText = "Fertilize me in 12 days";
	});

	//todo - repot
	//Create check button - repot
	const checkRepotBtn = document.createElement("button");
	checkRepotBtn.classList.add("repot-btn");
	plantDiv.appendChild(checkRepotBtn);
	if (daysToRepot === 1) {
		checkRepotBtn.innerHTML = "Repot me in " + daysToRepot + " day";
	} else {
		checkRepotBtn.innerHTML = "Repot me in " + daysToRepot + " days";
	}
	checkRepotBtn.addEventListener("click", function () {
		checkRepotBtn.innerText = "Repot me in 45 days";
	});

	const binBtn = document.createElement("button");
	binBtn.classList.add("bin-btn");
	binBtn.innerHTML = `<i class="fas fa"></i>`;
	plantDiv.appendChild(binBtn);

	// Append to plant list
	plantList.appendChild(plantDiv);
}

//bin button

binBtn.addEventListener("click", function () {
	const divToDelete = document.getElementByClass("plant-list");
	divToDelete.remove();
});
