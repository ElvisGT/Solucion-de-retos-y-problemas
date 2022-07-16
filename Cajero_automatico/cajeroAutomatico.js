/*Este es la solucion de un reto que consiste en hacer un cajero automatico que devuelva la
cantidad de billetes dependiendo de la disponibilidad del mismo en el cajero. La implementacion del
algoritmo es en el lenguaje JavaScript*/

/*Posibles Mejoras:
  1-Crear un sistema de login
  2-Automatizar la entrada de disponibilidad de billetes en el cajero
  3-Obtener el valor que desea sacar el usuario(Actualmente esta establecido dentro del programa(hardcode)*/

import { getDenominations } from './denominations.js';
import { basicATM } from './atm.js';

const validation = (userCash) => {
  const { classic } = getDenominations();
  let machine = new basicATM(classic);
  machine.changeMoney(userCash);
  machine.getChange();
};

//Para ejecutar en navegador descomente la siguiente linea y pasele la variable como valor a la funcion validation
// let valueUser = prompt("Teclee la cantidad a extraer");
validation(479);

/****************************By ElvisGT**********************************/
