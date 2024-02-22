const Kbot = require("./Kbot");

//Saludar a Andrés en idioma default
let kbot = new Kbot();
console.log(kbot.saludar("Andrés"));

//"Saludar a Andrés en ingles
kbot = new Kbot("EN");
console.log(kbot.saludar("Andrés"));
