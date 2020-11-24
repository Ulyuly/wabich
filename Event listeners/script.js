const kwadrat = document.getElementById("kwadrat");
const imie = document.getElementById("nazwisko");

kwadrat.addEventListener("mouseover", () => {
    kwadrat.style.backgroundColor = "blue";
    kwadrat.style.borderWidth = "30px";
});

kwadrat.addEventListener("mouseout", () => {
    kwadrat.style.backgroundColor = "lime";
    kwadrat.style.borderWidth = "10px";
});

nazwisko.addEventListener("dblclick", () => {
    nazwisko.style.fontSize = "4em";
    nazwisko.style.fontWeight = "bold";
    nazwisko.style.textDecoration = "underline";
});
