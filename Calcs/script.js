function zad1() {
    let a = prompt("Podaj dowolną liczbę");
    if (!isNaN(a)) document.write(Math.abs(a));
    else document.write("Proszę podać POPRAWNĄ liczcbę");


  }
  
  function zad2() {
    let r = prompt("Podaj promień okręgu");
    let obwod = 2 * Math.PI * r;
    let pole = Math.PI * Math.pow(r, 2);
    document.write(
      "Obwód koła: <br>",
      obwod.toFixed(2),
      "Pole koła: ",
      pole.toFixed(2)
    );
  }


  function zad3() {
    let suma = 0;
    for (let i = 0; i < 10; i++) {
      let value = Math.floor(Math.random() * 101);
      document.write(value, " ");
      suma += value;
    }
    document.write("<br>Suma: ", suma);
  }