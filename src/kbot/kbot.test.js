const Kbot = require("./Kbot");

describe("Saludador", () => {
  it("Saludar a Andrés en idioma default en la mañana", () => {
    let kbot = new Kbot();
    expect(kbot.saludar("Andrés", 8)).toEqual("Buenos días Andrés");
  });

  it("Saludar a Andrés en ingles en la mañana", () => {
    let kbot = new Kbot("EN");
    expect(kbot.saludar("Andrés", 9)).toEqual("Good morning Andrés");
  });
});

/*

console.log("Saludar a Andrés en ingles en la mañana".toUpperCase());
kbot = new Kbot("EN");
console.log(kbot.saludar("Andrés", 9) === "Good morning Andrés");

console.log("Saludar a Juan en idioma español en la tarde".toUpperCase());
kbot = new Kbot();
console.log(kbot.saludar("Juan", 14) === "Buenas tardes Juan");

console.log("Saludar Pedro en idioma español en la noche".toUpperCase());
kbot = new Kbot();
console.log(kbot.saludar("Pedro", 20) === "Buenas noches Pedro");
*/
