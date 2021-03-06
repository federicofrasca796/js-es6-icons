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

//let totTypes = []; DISCARDED APPROACH

//interate for each array's object
icons.forEach((icon, index) => {
	
	/* DISCARDED APPROACH
 	//push each type in array without duplicates
	if (!totTypes.includes(icon.type)){
		totTypes.push(icon.type);
	} */

	let cardsHTML = `<div class="col card text-center p-3">
	<i class="${icon.family} ${icon.prefix}${icon.name} ${icon.prefix}2x"></i>
	<div class="icon_name mt-3">${icon.name}</div>
	</div>
	`;

	if (icon.type == 'animal'){
		//insert html structure
		cardsHTML = `<div class="col card text-center p-3">
		<i class="${icon.family} ${icon.prefix}${icon.name} ${icon.prefix}2x animal"></i>
		<div class="icon_name mt-3">${icon.name}</div>
		</div>
		`
	} else if (icon.type == 'vegetable'){
		cardsHTML = `<div class="col card text-center p-3">
		<i class="${icon.family} ${icon.prefix}${icon.name} ${icon.prefix}2x vegetable"></i>
		<div class="icon_name mt-3">${icon.name}</div>
		</div>
		`
	} else if (icon.type == 'user'){
		cardsHTML = `<div class="col card text-center p-3">
		<i class="${icon.family} ${icon.prefix}${icon.name} ${icon.prefix}2x user"></i>
		<div class="icon_name mt-3">${icon.name}</div>
		</div>
		`
	}
	
	document.querySelector('.row-cols-5').insertAdjacentHTML('beforeend', cardsHTML);
});






//DISCARDED APPROACH
//select all html elements with data-type attribute which corresponds to one of types listed in icons objects.

/* console.log(totTypes);
let typeClasses = [];
totTypes.forEach(element => {
	const HTMLel = document.querySelectorAll(`i[data-type='${element}']`);
	console.log(HTMLel);
	// console.log(HTMLel);
	typeClasses.push(HTMLel);
	//for type i need a different class/style.
	
})

typeClasses[0].className = 'blue_icon'; */

// console.log(typeClasses[0]);
/* for (let i = 0; i < typeClasses.length; i++) {
	const element = typeClasses[i];
	
} */


/* typeClasses = document.querySelectorAll(`i[data-type='${totTypes[0]}']`);
console.log(typeClasses); */


