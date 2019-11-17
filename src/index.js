'use strict';

const input = document.getElementById('tags-input');
const list = document.getElementsByClassName('tags-list')[0];
const modal = document.getElementById('question');
const modalBtnCancel = modal.querySelector('.cancel');
const modalBtnRemove = modal.querySelector('.accept');
const modalBtnCancelX = document.getElementById('close-btn');
const message = document.getElementById('alert-msg');

message.innerText = 'Are you sure ?';

const LS_KEY = 'tagList';


// const toggleModal = () => {
//   if (modal.className === 'hidden') {
//     modal.className = '';
//   } else {
//     modal.className = 'hidden';
//   }
// };

const saveItem = item => {
  const list = JSON.parse(localStorage.getItem(LS_KEY));
  if(list && list.length) {
    list.push(item);
    localStorage.setItem(LS_KEY, JSON.stringify(list));
  } else {
    localStorage.setItem(LS_KEY, JSON.stringify([item]));
  }
};

const removeItem = item => {
  const list = JSON.parse(localStorage.getItem(LS_KEY));
  const newList = list.filter(el => el !== item);
  localStorage.setItem(LS_KEY, JSON.stringify(newList));
};

const createListItem = item => {
  const li = document.createElement('li');
  li.className = 'tags-list-item';
  const span = document.createElement('span');
  span.innerText = item ? item : input.value;
  li.appendChild(span);
  if (!item) {
    saveItem(input.value);
  }
  input.value = '';
  const btn = document.createElement('span');
  btn.innerText = 'X';
  btn.className = 'remove-btn';
  li.appendChild(btn);
  list.appendChild(li);
  btn.addEventListener('click', () => {
    li.classList.add('need-to-remove');
    toggleModal();
  });
};

const initTags = () => {
  const list = JSON.parse(localStorage.getItem(LS_KEY));
  if(list && list.length) {
    list.forEach(el => createListItem(el));
  }
};

const toggleModal = () => {
  modal.classList.toggle('hidden');
};

const removeClass = () => {
  const liToRemove = list.querySelector('.need-to-remove');
  liToRemove.classList.remove('need-to-remove');
  toggleModal();
};


input.addEventListener('keyup', event => {
  if (event.keyCode === 13) {
    createListItem();
  }
});

modalBtnCancel.addEventListener('click', removeClass);
modalBtnCancelX.addEventListener('click', removeClass);

modalBtnRemove.addEventListener('click', () => {
  const liToRemove = list.querySelector('.need-to-remove');
  removeItem(liToRemove.getElementsByTagName('span')[0].innerText);
  list.removeChild(liToRemove);
  toggleModal();
});



initTags();
// console.log(modalBtnCancel);

