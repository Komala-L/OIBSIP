function convertTemperature() {
  let temp = parseFloat(document.getElementById("temperature").value);
  let unit = document.getElementById("unit").value;

  let celsius, fahrenheit, kelvin;

  if (isNaN(temp)) {
    alert("Please enter a valid number!");
    return;
  }

  if (unit === "celsius") {
    celsius = temp;
    fahrenheit = (temp * 9/5) + 32;
    kelvin = temp + 273.15;
  } 
  else if (unit === "fahrenheit") {
    celsius = (temp - 32) * 5/9;
    fahrenheit = temp;
    kelvin = celsius + 273.15;
  } 
  else if (unit === "kelvin") {
    celsius = temp - 273.15;
    fahrenheit = (celsius * 9/5) + 32;
    kelvin = temp;
  }

  document.getElementById("celsius").innerText = `Celsius: ${celsius.toFixed(2)} °C`;
  document.getElementById("fahrenheit").innerText = `Fahrenheit: ${fahrenheit.toFixed(2)} °F`;
  document.getElementById("kelvin").innerText = `Kelvin: ${kelvin.toFixed(2)} K`;
}
