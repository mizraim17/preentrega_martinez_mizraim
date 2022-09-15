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
	let arrWitMurder = [];

	let newList = suspectsArray.filter((item) => item.nombre !== nameDiedPerson);

	// for (element in newList) {
	// 	arrWitMurder = newList[element].nombre;
	// 	alert(`== ${newList[element].nombre}`);
	// }

	return newList;
};

let genereAssesinMurder = () => {
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

	console.log(`que tiene ${arrWitMurd[0].nombre}`);

	// for (element in arrWitMurd) {
	// 	alert(`== ${arrWitMurd[element].nombre}`);
	// }

	let numAssesin = parseInt(doRandom(arrWitMurd));

	alert(`numAssesin ${numAssesin}`);

	do {
		// alert(`oportunities ${oportunities}`);
		alert(`coins ${coins}`);

		let selectUser = parseInt(
			prompt(
				`"Bienvenido a Clue the Office \n mataron a "
				 ${
						asseMurder[1]
					} "es tu deber adivinar en 5 oportunidades, quién lo mato, con que lo mató y donde lo mató\n "
					  ${
							oportunities[0] == true
								? "Asesino adivinado "
								: "1.-Adivinar el nombre del asesino\n"
						}
				${oportunities[2] == true ? "Arma adivinada" : "2. Adivinar Arma\n"}  `
			)
		);

		switch (selectUser) {
			case 1:
				const TXT_1 = "Adivina el asesino seleciona su número";
				let instructions = "",
					optiAssesin = 0;
				counter = 0;
				// listOpWiAss = listWithoutMurder(parseInt(asseMurder[1]));

				// alert(`listOpWiAss ${listOpWiAss}`);

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

				// alert(`selectUser=  ${selectUser}`);

				break;
			case 2:
				alert("2.-Adivina ");
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

// let nameDiedPersonz = "Michael Scott";

// let test = () => {
// 	let newList = suspectsArray.filter((item) => item.nombre !== nameDiedPersonz);

// 	console.log("newList", newList);

// 	for (element in newList) {
// 		alert(`ele  ${newList[element].nombre}`);
// 	}
// };

// test();
