const icons = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	}
];

/* Milestone 1
Partendo dalla seguente struttura dati , mostriamo in pagina tutte le icone disponibili come da layout.
*/
/* Milestone 2
Coloriamo le icone per tipo
*/



//generate icon cards through custom function
let cardsHTML = printCard(icons);

/* Milestone 3
Creiamo una select con i tipi di icone e usiamola per filtrare le icone 
*/

//generate option tag in DOM with each type of icon
const iconsTypes = [];

icons.forEach(icon => {
	if(!iconsTypes.includes(icon.type)){
		iconsTypes.push(icon.type);
	}
})

// console.log(iconsTypes);

//select 'select' element in DOM
const selectEl = document.getElementById('filter');

//generate option tag
iconsTypes.forEach(type =>{
	const optionEl = `<option value="${type}">${type}</option>`;
	selectEl.insertAdjacentHTML('beforeend', optionEl);
})

//add event listener on select change
selectEl.addEventListener('change', function () {
	
	document.querySelector('.row').innerHTML = '';

	//if ALL is selected
	if (this.value === 'All'){
		printCard(icons);
	}

	//if other options are selected
	const selectedIcons = icons.filter (icon => {
		return icon.type === this.value;
	})
	console.log(selectedIcons);
	printCard(selectedIcons);
})












/**
 * Prints card inside of a bootstrap .row class. Card contains an icon and its name.
 * @param {Array} iconsArr Array of Objects
 */
function printCard(iconsArr){
	iconsArr.forEach(icon => {

		const cardsHTML = genCardHTML(icon);
			
		document.querySelector('.row-cols-5').insertAdjacentHTML('beforeend', cardsHTML);

	});
}

function genCardHTML(iconObj){
	return `<div class="col card text-center p-3">
	<i class="${iconObj.family} ${iconObj.prefix}${iconObj.name} ${iconObj.prefix}2x ${iconObj.type}"></i>
	<div class="icon_name mt-3">${iconObj.name}</div>
	</div>
	`;
}