/*Este es la solucion de un reto que consiste en hacer un cajero automatico que devuelva la 
cantidad de billetes dependiendo de la disponibilidad del mismo en el cajero. La implementacion del 
algoritmo es en el lenguaje JavaScript*/

/*Posibles Mejoras:
  1-Crear un sistema de login
  2-Automatizar la entrada de disponibilidad de billetes en el cajero
  3-Obtener el valor que desea sacar el usuario(Actualmente esta establecido dentro del programa(hardcode)*/

//give money object
let give_money = {
	cien: 0,
	cincuenta: 0,
	veinte: 0,
	diez: 0,
	uno: 0,
};

//globals
let one_hundredLenght = 3,
	one_hundred = 100;

let fiftyLenght = 6,
	fifty = 50;

let twentyLenght = 10,
	twenty = 20;

let tenLenght = 50,
	ten = 10;

let oneLenght = 50,
	one = 1;

const validation = (userCash) => {
	let counterCash = userCash;

	while (counterCash > 0) {
		if (one_hundredLenght > 0 && one_hundred <= counterCash) {
			give_money.cien++;
			one_hundredLenght--;
			counterCash -= one_hundred;
		} else if (fiftyLenght > 0 && fifty <= counterCash) {
			give_money.cincuenta++;
			fiftyLenght--;
			counterCash -= fifty;
		} else if (twentyLenght > 0 && twenty <= counterCash) {
			give_money.veinte++;
			twentyLenght--;
			counterCash -= twenty;
		} else if (tenLenght > 0 && ten <= counterCash) {
			give_money.diez++;
			tenLenght--;
			counterCash -= ten;
		} else if (oneLenght > 0 && one <= counterCash) {
			give_money.uno++;
			oneLenght--;
			counterCash -= one;
		}
	}

	console.log("Tome su dinero");
	for (const key in give_money) {
		if (give_money[key] > 0) {
			console.log(`--${give_money[key]} billete(s) de ${key}--`);
		}
	}
	console.log("Gracias por su visita!!!");
};

//Para ejecutar en navegador descomente la siguiente linea y pasele la variable como valor a la funcion validation
// let valueUser = prompt("Teclee la cantidad a extraer");
validation(50);

/****************************By ElvisGT**********************************/
