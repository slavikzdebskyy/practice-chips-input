
class Car {

  constructor(params) {
    this.id = params.id;
    this.brand = params.brand;
    this.model = params.model;
    this.color = params.color;
    this.year = params.year;
    this.taxes = params.taxes;
    this.documents = params.documents;
    this.price = params.price;
  }

  isAvailable() {
    return this.taxes && this.documents ? 'YES' : 'NO';
  }

  getAge() {
    return new Date().getFullYear() - this.year;
  }

  getDisplayPrice() {
    return `${this.price}.00 $`;
  }

  getDisplayTaxes() {
    return this.taxes ? 'YES' : 'NO';
  }

  getDisplayDocuments() {
    return this.documents ? 'YES' : 'NO';
  }
}

const addTD = (tr, txt) => {
  const td = document.createElement('td');
  td.innerText = txt;
  tr.appendChild(td);
};

const createRow = car => {
  const tr = document.createElement('tr');

  addTD(tr, car.brand);
  addTD(tr, car.model);

  const color = document.createElement('td');
  const div = document.createElement('div');
  color.className = 'td-color';
  div.className = 'color';
  div.style.backgroundColor = car.color;
  color.appendChild(div);
  tr.appendChild(color);

  addTD(tr, car.year);
  addTD(tr, car.getDisplayPrice());
  addTD(tr, car.getDisplayDocuments());
  addTD(tr, car.getDisplayTaxes());
  addTD(tr, car.isAvailable());

  return tr;
};


const cars = data.map(car => new Car(car));
const selectedValues = [];

const tbody = document.getElementById('tbody');
const chBoxes = document.getElementById('ch-boxes');
const rows = cars.map(car => createRow(car));

const renderTable = rows => {

  while (tbody.firstChild) {
    tbody.removeChild(tbody.firstChild);
  }

  rows.forEach(row => tbody.appendChild(row));
};

const onSortBy = (prop, sortBy) => {
  cars.sort((a,b) => {
    if (sortBy === 'a-z') {
      return a[prop] < b[prop] ? -1 : 1;
    }
    return a[prop] > b[prop] ? -1 : 1;
  });

  const sortedRows = cars.map(car => createRow(car));

  renderTable(sortedRows);
};

const addLisenerSort = prop => {
  document.getElementById(`th-${prop}`).addEventListener('click', ({target}) => {
    const sortBy = target.attributes.data.value;
    onSortBy(prop, sortBy);
    target.attributes.data.value = target.attributes.data.value === 'a-z' ? 'z-a' : 'a-z';

  });
};

const checked = (value, chBox) => {
  if (!chBox.checked) {
    const index = selectedValues.findIndex(el => el === value);
    selectedValues.splice(index, 1);
    return;
  }
  selectedValues.push(value);
};

const createChBox = label => {
  const div = document.createElement('div');
  const input = document.createElement('input');
  const labelTag = document.createElement('label');

  input.type = 'checkbox';
  input.id = label;
  labelTag.setAttribute('for', label);
  labelTag.innerText = label;
  labelTag.className = 'label';

  div.appendChild(input);
  div.appendChild(labelTag);

  input.addEventListener('click', ({target}) => {checked(label, target);});

  chBoxes.appendChild(div);
};


const renderCheckBoxes = prop => {
  while (chBoxes.firstChild) {
    chBoxes.removeChild(chBoxes.firstChild);
  }

  const uniqueLabels = [];
  cars.map(car => car[prop])
    .forEach(el => {
      if (!uniqueLabels.includes(el)) {
        uniqueLabels.push(el);
      }
    });

  uniqueLabels
    .sort((a,b) => {
      return a < b ? -1 : 1;
    })
    .forEach(el => createChBox(el));
};

const addLisenerSelectCat = prop => {
  document.getElementById(`select-${prop}`)
    .addEventListener('click', () => renderCheckBoxes(prop));
};




renderTable(rows);
addLisenerSort('brand');
addLisenerSort('model');
addLisenerSort('year');
addLisenerSort('price');
addLisenerSelectCat('brand');
addLisenerSelectCat('model');

