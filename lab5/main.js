document.querySelector('.burger').addEventListener('click', function() {
	this.classList.toggle('burger_active');
	document.querySelector('.menu').classList.toggle('menu_open');
	document.querySelector('body').classList.toggle('menu-opened');
})


// 1. Заміна контенту блоків "4" і "5"
function swapBlocksContent() {
   const block4 = document.getElementById('4');
   const block5 = document.getElementById('5');
   [block4.textContent, block5.textContent] = [block5.textContent, block4.textContent];
}


// 2. Функція обчислення площі овала
function calculateEllipseArea(ellipse) {
   var a = ellipse.elements['semi-major'].value
   var b = ellipse.elements['semi-minor'].value;
   var area = Math.PI * a * b;
   // document.getElementById('2t-result').innerText = `Площа овала: ${area.toFixed(2)}`;
	const resultElement = document.createElement('p');
	resultElement.textContent = `Площа овала: ${area.toFixed(2)}`;
	document.getElementById('3').appendChild(resultElement);
}


// 3. Підрахунок кількості слів у тексті та робота з cookies
// function getCookie(name) {
// 	let matches = document.cookie.match(new RegExp(
// 		"(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
// 	));
// 	return matches ? decodeURIComponent(matches[1]) : undefined;
// }
document.addEventListener('DOMContentLoaded', checkCookie);
function checkCookie() {
	if (document.cookie != "") {
		if (confirm(`${document.cookie}\nВидалити ці cookies?`)) {
			// document.cookie = "wordCount=; max-age=0"; // не працює
			document.cookie = "wordCount=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
			document.location.reload();
		}
		else
			alert('Наявні cookies!\nПотрібно перезавантажити веб-сторінку.')
	}
	else {
		document.getElementById('3-task').innerHTML =
		`<form id="3-form" onsubmit="countWordsAndHandleCookies(this); return false;" method="post">
			<input type="submit" value="Підрахувати">
		</form>
		<textarea form="3-form" name="text"></textarea>`;
	}
	
}
function countWordsAndHandleCookies(form) {
   const text = form.elements['text'].value;
   const wordCount = text.split(/\s+/).filter(Boolean).length;
	alert(`Кількість слів: ${wordCount}`);
   document.cookie = `wordCount=${wordCount}; path=/;`;
};


// 4. Вирівнювання по лівому краю та збереження в localStorage
document.addEventListener('DOMContentLoaded', handleAlignment);
function handleAlignment() {
	const blocks = [
      document.querySelector('.main__content'),
      document.querySelectorAll('.aside__content')[0],
      document.querySelectorAll('.aside__content')[1]
   ];
   const form = document.createElement('form');
   blocks.forEach((block, index) => {
		const label = document.createElement('label');
		const checkbox = document.createElement('input');
		checkbox.type = 'checkbox';
		checkbox.checked = localStorage.getItem(`alignBlock${index + 3}`) === 'true';
		label.textContent = `Вирівняти блок ${index + 3} по лівому краю`;
		label.prepend(checkbox);
		checkbox.onchange = () => {
			localStorage.setItem(`alignBlock${index + 3}`, checkbox.checked);
		};
		form.appendChild(label);
   });
   document.getElementById('4-task').appendChild(form);
	alignBlocks(blocks);
   document.addEventListener('dblclick', () => {
      alignBlocks(blocks);
   });
}
function alignBlocks(blocks) {
	blocks.forEach((block, index) => {
		if (localStorage.getItem(`alignBlock${index + 3}`) === 'true')
			block.style.textAlign = 'left';
		else
			block.style.textAlign = 'center';
	});
}


// 5. Редагування вмісту номерних блоків
