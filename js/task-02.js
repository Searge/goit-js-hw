const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulIngrid = document.querySelector('#ingredients');

[...ingredients].forEach(ingridient => {
  const liIngrid = document.createElement('li');

  liIngrid.textContent = ingridient;
  ulIngrid.appendChild(liIngrid);
});
