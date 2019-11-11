'use strict';

const $tagsInputFirst = document.getElementById('tags-input');
const $tagsList = document.getElementsByClassName('tags-list');
const $modal = document.getElementById('question'); // modal window
const $btnsInModal = $modal.getElementsByClassName('btn');  // buttons Remove and Close in modal window
const $btnCloseInModal = document.getElementById('close-btn');  // span-button to close modal window
const tagsArrFirst = [];  // array for first input



