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


function getCookie(name) {
	let matches = document.cookie.match(new RegExp(
		"(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
	));
	return matches ? decodeURIComponent(matches[1]) : undefined;
}

function countWordsAndHandleCookies(form) {
   const text = form.elements['text'].value;
   const wordCount = text.split(/\s+/).filter(Boolean).length;
   document.cookie = `wordCount=${wordCount}; path=/;`;
	alert(`Кількість слів: ${getCookie('wordCount')}`);
};

   //  const cookies = document.cookie.split('; ').find((row) => row.startsWith('wordCount='));
   //  if (cookies) {
   //      const wordCount = cookies.split('=')[1];
   //      const deleteCookies = confirm(`Збережена кількість слів: ${wordCount}. Видалити cookies?`);

   //      if (deleteCookies) {
   //          document.cookie = 'wordCount=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
   //          location.reload();
   //      } else {
   //          alert('Cookies збережені. Оновіть сторінку для видалення.');
   //      }

   //      form.remove();
   //  }