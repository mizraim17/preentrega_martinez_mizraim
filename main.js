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

let listWithoutMurder = (numberAssesin) => {
	newList = [];
	suspectsArray.splice(numberAssesin, 1);

	for (element in suspectsArray) {
		newList[element] = suspectsArray[element].nombre;
	}

	alert(`newList ${newList}`);

	return newList;
};

let genereMistery = () => {
	let asessinMuerdered = [];

	let numberDied = parseInt(doRandom(suspectsArray));

	console.log("nnumero muerto", numberDied);
	let numberAssesin = parseInt(doRandom(listWithoutMurder(numberDied)));
	console.log("number asesino", numberAssesin);

	asessinMuerdered[0] = numberAssesin;
	asessinMuerdered[1] = numberDied;

	alert(`asessinMuerdered ${asessinMuerdered}`);

	return asessinMuerdered;
};

let verifyMistery = (asseMurder) => {
	console.log("array asesinos", asseMurder[0]);

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

	let fullCase = verifyMistery(asseMurder);

	console.log("muerto menu", asseMurder[1]);
	console.log(
		"muerto menu nombre",
		suspectsArray[parseInt(asseMurder[1])].nombre
	);

	for (element in suspectsArray) {
		console.log(`${element} ${suspectsArray[element].nombre}`);
	}

	do {
		// alert(`oportunities ${oportunities}`);
		alert(`coins ${coins}`);

		let selectUser = parseInt(
			prompt(
				`"Bienvenido a Clue the Office \n mataron a " ${
					suspectsArray[parseInt(asseMurder[1])].nombre
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
				listOpWiAss = listWithoutMurder(parseInt(asseMurder[1]));

				alert(`listOpWiAss ${listOpWiAss}`);

				for (element in listOpWiAss) {
					instructions =
						instructions + `${counter}.- ${listOpWiAss[element]}\n`;
					counter++;
				}

				instructions + TXT_1;

				console.log("numero asesino", asseMurder[0]);

				do {
					optiAssesin = parseInt(prompt(`${instructions}`));
					numberAssesin = parseInt(asseMurder[0]);

					alert(`optiAssesin ${optiAssesin}`);
					alert(`asseMurder= ${asseMurder[0]}`);

					coins++;

					// alert(`coins=${coins}`);
				} while (optiAssesin !== numberAssesin && coins < 5);

				if (optiAssesin === numberAssesin) {
					alert(`Ganaste fue ${listOpWiAss[asseMurder[0]]}`);
					selectUser = "s";
					oportunities[0] = true;
				} else if (coins === 5) {
					alert(`Perdiste fue ${listOpWiAss[asseMurder[0]]}`);
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
	let x;

	// alert(` x=== ${x}`);
	menu(genereMistery());
};

main();
