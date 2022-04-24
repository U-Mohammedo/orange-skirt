let reviews = [
  {
    info:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum alias dolorum error accusamus explicabo placeat, dicta eaque voluptates itaque cum culpa illum quae maxime!',
    author: 'james baldwin',
  },
  {
    info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum!',
    author: 'peter druery',
  },
  {
    info:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum alias      dolorum error accusamus explicabo placeat',
    author: 'sanchez',
  },
  {
    info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    author: 'james rodriguez',
  },
];

let leftBtn = document.querySelector('.left-btn');
let rightBtn = document.querySelector('.right-btn');
let text = document.querySelector('.text');
let name = document.querySelector('.name');

let currentItem = 0;

window.addEventListener('DOMContentLoaded', function () {
  showPerson();
});

function showPerson() {
  let item = reviews[currentItem];
  text.textContent = item.info;
  name.innerHTML = `<em>${' - ' + item.author}</em>`;
}

leftBtn.addEventListener('click', function () {
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  currentItem--;
  showPerson();
  console.log('it works');
});

rightBtn.addEventListener('click', function () {
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  currentItem++;
  showPerson();
  console.log('it also works');
});
