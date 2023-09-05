function convertCelciusToFahrenheit(celsius) {
	const toConvert = Number(celsius);
	const fahrenheit = (toConvert * 1.8) + 32;
	//edite esta função
	//note que você já está recebendo o valor em celcius como parâmetro desta função
	return fahrenheit;
}





// -- Não edite abaixo!

function conversaoCtoF() {
	let textCelcius = document.getElementById("celciusText")
	let textFahrenheit = document.getElementById("resultFahrenheit")
	textFahrenheit.textContent = convertCelciusToFahrenheit(textCelcius.value) + 
								 "ºF"
}