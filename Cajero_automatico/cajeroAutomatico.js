/*Este es la solucion de un reto que consiste en hacer un cajero automatico que devuelva la
cantidad de billetes dependiendo de la disponibilidad del mismo en el cajero. La implementacion del
algoritmo es en el lenguaje JavaScript*/

/*Posibles Mejoras:
  1-Crear un sistema de login
  2-Automatizar la entrada de disponibilidad de billetes en el cajero
  3-Obtener el valor que desea sacar el usuario(Actualmente esta establecido dentro del programa(hardcode)*/

import { getDenominations } from './denominations.js';

class ATM {
  // Improvements
  // 1 - Accumulate the change in the ATM if the user has not withdrawn all the money
  // 2 - Create an abstract function to improve the way of the change is given
  // 3 - Reload the amount of money of the desired denomination in the machine
  // 4 - Create a system of login

  constructor(denominations) {
    this.denominations = denominations;
  }

  changeMoney(money) {
    this.change = {};
    this.denominations.forEach((denomination) => {
      this.change[denomination.value] = 0;
    });
    let i = 0;
    while (money && i < this.denominations.length) {
      if (
        money >= this.denominations[i].value &&
        this.denominations[i].cuantity
      ) {
        this.change[this.denominations[i].value]++;
        this.denominations[i].cuantity--;
        money -= this.denominations[i].value;
      } else ++i;
    }
  }

  getChange() {
    console.log('Please take your change:');
    Object.keys(this.change).forEach((key) => {
      if (this.change[key]) console.log(`${key} x ${this.change[key]}`);
    });
    console.log('Thanks for using our ATM');
  }
}

const validation = (userCash) => {
  const { classic } = getDenominations();
  let machine = new ATM(classic);
  machine.changeMoney(userCash);
  machine.getChange();
};

//Para ejecutar en navegador descomente la siguiente linea y pasele la variable como valor a la funcion validation
// let valueUser = prompt("Teclee la cantidad a extraer");
validation(479);

/****************************By ElvisGT**********************************/
