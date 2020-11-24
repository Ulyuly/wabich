document.getElementById("first").addEventListener("click", () => {
    let a = document.getElementById("a");
    let b = document.getElementById("b");
    a = parseInt(a.value);
    b = parseInt(b.value);
    let result = document.getElementById("firstResult");
    if (a > b) {
      result.innerHTML = `Smaller number: ${b}`;
    } else if (b > a) {
      result.innerHTML = `Smaller number: ${a}`;
    } else {
      result.innerHTML = "Numbers are the same";
    }
    a = "";
    b = "";
  });

  document.getElementById("second").addEventListener("click", () => {
    let color = document.getElementById("color");
    let font = document.getElementById("font");
    let size = document.getElementById("size");
    let result = document.getElementById("secondResult");

    result.style.color = color.value;
    result.style.fontFamily = font.value;
    result.style.fontSize = size.value + "px";
    result.innerHTML = "Kamil Tuszyński";

    color.value = "";
    font.value = "";
    size.value = "";
  });