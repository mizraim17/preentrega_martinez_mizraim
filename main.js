///juego de Clue

let selectUser = 0;

const suspectsArray = [
	{ id: 0, nombre: "Michael Scott" },
	{ id: 1, nombre: "Jim Halpert" },
	{ id: 2, nombre: "Dwight Schrute" },
	{ id: 3, nombre: "Pam Beesly" },
	{ id: 4, nombre: "Ryan Howard" },
	{ id: 5, nombre: "Oscar Martinez" },
	{ id: 6, nombre: "Angela Martin" },
	{ id: 7, nombre: "Andy Bernard" },
	{ id: 8, nombre: "Kevin Malone" },
];

const roomsArray = ["Cocina", "Oficina", "Zona de Estacionamiento", "Bodega"];

const weaponsArray = [
	"Olla",
	"Estrella ninja",
	"Parrilla Asadora",
	"Pistola",
	"Engrapadora",
];

let doRandom = (arrSearch) =>
	Math.round(Math.random() * (arrSearch.length - 1));

let listWithoutMurder = (nameDiedPerson) => {
	let arrWitMurder = [],
		newList;
	newList = suspectsArray.filter((item) => item.nombre !== nameDiedPerson);

	return newList;
};

let genereAssesinMurder = (fue) => {
	let arrayAssesinDied = [];

	let numDiedPerson = parseInt(doRandom(suspectsArray));

	// alert(`"numero muerto" ${numDiedPerson}`);

	arrayAssesinDied[1] = suspectsArray[numDiedPerson].nombre;

	// alert(`arrayAssesinDied[1]  ${arrayAssesinDied[1]}`);

	let listNew = listWithoutMurder(arrayAssesinDied[1]);

	arrayAssesinDied[0] = listNew;

	// console.log("number asesino", numAssesinPerson);

	// alert(`Asesino= ${arrayAssesinDied[0]} - Muerto= ${arrayAssesinDied[1]}`);

	return arrayAssesinDied;
};

let verifyMistery = (asseMurder) => {
	dataMurder = ` el asesino fue ${suspectsArray[asseMurder[0]].nombre}  
	}
		 		 y mato a ${suspectsArray[asseMurder[1]].nombre} 
	}

		 	con ${weaponsArray[doRandom(weaponsArray)]},
			en ${roomsArray[doRandom(roomsArray)]}	
		`;

	console.log("dataMurder", dataMurder);

	alert(`quien fue  ${dataMurder}`);

	return dataMurder;
};

let oportunities = [false, false, false, false];

let menu = (asseMurder) => {
	let coins = 0;

	let arrWitMurd = asseMurder[0];

	let numAssesin = parseInt(doRandom(arrWitMurd));

	let numWeapon = parseInt(doRandom(weaponsArray));
	let numRoom = parseInt(doRandom(roomsArray));

	alert(`numAssesin ${numAssesin}`);
	alert(`numWeapon ${numWeapon}`);

	do {
		// alert(`oportunities ${oportunities}`);
		alert(`coins ${coins}`);

		let selectUser = parseInt(
			prompt(
				`"Bienvenido a Clue version the Office mataron a: "
				${asseMurder[1]} "es tu deber adivinar en 5 oportunidades,"
				"quién lo mato, con que lo mató y donde lo mató\n "${
					oportunities[0] == true
						? "Asesino adivinado \n"
						: "1.-Adivinar el nombre del asesino\n"
				}
				${oportunities[1] == true ? "Arma adivinada" : " 2. Adivinar Arma\n"}
				${
					oportunities[1] == true
						? "Habitación adivinada"
						: " 3. Adivinar Habitación\n"
				}  `
			)
		);

		switch (selectUser) {
			case 1:
				const TXT_1 = "Adivina el asesino seleciona su número";
				let instructions = "",
					optiAssesin = 0;
				counter = 0;

				for (element in arrWitMurd) {
					instructions =
						instructions + `${counter}.- ${arrWitMurd[element].nombre}\n`;
					counter++;
				}

				instructions + TXT_1;

				console.log("numero asesino", asseMurder[0]);

				do {
					optiAssesin = parseInt(prompt(`${instructions}`));

					alert(`optiAssesin ${optiAssesin}`);
					alert(`asseMurder= ${numAssesin}`);

					coins++;

					// alert(`coins=${coins}`);
				} while (numAssesin !== optiAssesin && coins < 5);

				if (optiAssesin === numAssesin) {
					alert(`Ganaste fue ${arrWitMurd[numAssesin].nombre}`);
					selectUser = "s";
					oportunities[0] = true;
				} else if (coins === 5) {
					alert(`Perdiste fue ${arrWitMurd[numAssesin].nombre}`);
					selectUser = "s";
				}

				break;

			case 2:
				alert("entro al case 2");
				const TXT2 = "Adivina el arma del asesino";
				let instructions2 = "",
					optiWeapons = 0;
				counter2 = 0;

				for (element in weaponsArray) {
					instructions2 =
						instructions2 + `${counter2}.- ${weaponsArray[element]}\n`;
					counter2++;
				}

				instructions2 + TXT2;

				do {
					optiWeapons = parseInt(prompt(`${instructions2}`));

					alert(`optiAssesin ${optiWeapons}`);
					alert(`asseMurder= ${numWeapon}`);

					coins++;

					alert(`numWeapon=${numWeapon}`);
				} while (numWeapon !== optiWeapons && coins < 5);

				if (numWeapon === optiWeapons) {
					alert(`Ganaste el arma usada fue ${weaponsArray[numWeapon]}`);
					selectUser = "s";
					oportunities[1] = true;
				} else if (coins === 5) {
					alert(`Perdiste el arma usada era ${weaponsArray[numWeapon]}`);
					selectUser = "s";
				}

				break;

			case 3:
				alert("entro al case 2");
				const TXT3 = "Adivina donde fue el asesinato";
				let instructions3 = "",
					optiPlace = 0;
				counter3 = 0;

				for (element in roomsArray) {
					instructions3 =
						instructions3 + `${counter3}.- ${roomsArray[element]}\n`;
					counter3++;
				}

				instructions3 + TXT3;

				do {
					optiPlace = parseInt(prompt(`${instructions3}`));

					alert(`optiAssesin ${optiPlace}`);
					alert(`asseMurder= ${numRoom}`);

					coins++;

					alert(`numRoom=${numRoom}`);
				} while (numRoom !== optiPlace && coins < 5);

				if (numRoom === optiPlace) {
					alert(`Ganaste el lugar es la ${roomsArray[numRoom]}`);
					selectUser = "s";
					oportunities[2] = true;
				} else if (coins === 5) {
					alert(`Perdiste el lugar era ${roomsArray[numRoom]}`);
					selectUser = "s";
				}

				break;

			default:
				alert("Opción inválida");
				break;

			case "s":
				break;
		}
	} while (selectUser === "s" || selectUser === "S" || coins < 5);

	if (coins == 5) {
		alert("game over");
	}
};

let main = () => {
	arrToPlay = menu(genereAssesinMurder());
};

main();
