const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulIngrid = document.querySelector('#ingredients');

const items = ingredients.map(ingridient => {
  const liIngrid = document.createElement('li');

  liIngrid.textContent = ingridient;
  liIngrid.classList.add('item');

  return liIngrid;
});

ulIngrid.append(...items);
