
let image1 = document.createElement('img');
image1.src = 'D://js пробные проекты//photo//valet.jpg';
image1.alt = 'Valentine Image'; // Укажите атрибут alt для доступности
let image2 = document.createElement('img');
image2.src = 'D://js пробные проекты//photo//heart.jpg';
image2.alt = 'Valentine Image'; // Укажите атрибут alt для доступности
let image3 = document.createElement('img');
image3.src = 'D://js пробные проекты//photo//bear.jpg';
image3.alt = 'Valentine Image'; // Укажите атрибут alt для доступности

// Находим элемент с классом .container
let container = document.querySelector('.container');

// Создаем текстовый элемент
let text = document.createElement('p');
text.textContent = "Happy Valentine's Day 💓";
container.append(text);

// Добавляем изображение и элемент .container
container.append(image1);
container.append(image2);
container.append(image3);
// Функция для создания мерцающих звезд
function createStar() {
    const star = document.createElement('div');
    star.classList.add('star');
    star.style.left = Math.random() * 100 + 'vw';
    star.style.top = Math.random() * 100 + 'vh';
    document.body.appendChild(star);
}

// Создаем 100 мерцающих звезд
for (let i = 0; i < 200; i++) {
    createStar();
}
let post = document.querySelector('.post');
let button = document.createElement('button');
button.textContent = 'Нажми меня!';
post.appendChild(button);


let name = document.querySelector('.name');
let name_user = document.createElement('h2');
name_user.textContent = 'P.s. Yulia';
name.appendChild(name_user);

function func() {
    let text1 = '<div class="func"><h1>I Love U<span class="heart">♥️</span></h1></div>';
    // Append the new content instead of replacing the existing content
    container.insertAdjacentHTML('beforeend', text1);
}
button.addEventListener('click', func)