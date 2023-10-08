
window.onload = function () {
  let c = document.getElementById("celsius");
  let f = document.getElementById("fahrenheit");
  let k = document.getElementById("kelvin");

  c.oninput = function () {
    f.value = (c.valueAsNumber * 9) / 5 + 32;
    k.value = c.valueAsNumber + 273.15;
  };

  f.oninput = function () {
    c.value = ((f.valueAsNumber - 32) * 5) / 9;
    k.value = c.valueAsNumber + 273.15;
  };

  k.oninput = function () {
    c.value = k.valueAsNumber - 273.15;
    f.value = (9 / 5) * (k.valueAsNumber - 273.15) + 32;
  };
};
