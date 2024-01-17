const input = document.querySelector('#fruit');

let list = document.querySelector('.list');

const fruitList = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

input.addEventListener("keyup", (e) => {
	clearList();
	for (let fruit of fruitList){
		if (fruit.toLowerCase().includes(input.value.toLowerCase()) && input.value !== ''){
			let suggestion = document.createElement('li');
			suggestion.classList.add('suggestions');
			suggestion.setAttribute('onclick',
			"selectSuggestion('"+fruit+"')");
			let startIndex = fruit.toLowerCase().indexOf(input.value.toLowerCase());
			suggestion.innerHTML = boldString(fruit, fruit.substring(startIndex, startIndex + input.value.length));
			list.appendChild(suggestion);
		}
	}
});

function boldString(str, substr) {
	return str.replace(substr, '<b>'+substr+'</b>');
}

function selectSuggestion(value) {
	input.value = value;
	clearList();
}

function clearList(){
	let suggestionsList = document.querySelectorAll(".suggestions");
  	suggestionsList.forEach((suggestion) => {
    suggestion.remove();
  });
}