let _animal = null;
let _animal_filter = '';
let _popup__animal = document.querySelector('.popup__animal');
let _popup__answers = document.querySelectorAll('.popup__answer');
let _popup__fail = document.querySelector('.popup__fail');
let _popup__meta_dialog = document.querySelector('.popup__meta_dialog');
let _popup__solution = document.querySelector('.popup__solution');
let _popup_content_index = 0;


let animals = [
  {name: 'Акула', mask: 0b100000},
  {name: 'Змея', mask: 0b000000},
  {name: 'Ёж', mask: 0b010010},
  {name: 'Кит', mask: 0b110000},
  {name: 'Кот', mask: 0b011011},
  {name: 'Лев', mask: 0b001001},
  {name: 'Медведь', mask: 0b010001},
  {name: 'Орёл', mask: 0b000110},
  {name: 'Слон', mask: 0b010000},
  {name: 'Страус', mask: 0b011000},
  {name: 'Щука', mask: 0b110010},
];
let popup_contents = [
  {
    question: 'В какой среде вы хотите обитать?',
    answers: ['На суше', 'В воде'],
  },
  {
    question: 'Каковы ваши пищевые предпочтения?',
    answers: ['Мясо', 'Всеяден'],
  },
  {
    question: 'Вы любите бегать?',
    answers: ['Нет', 'Да'],
  },
  {
    question: 'Нравится ли вам летать?',
    answers: ['Нет', 'Да'],
  },
  {
    question: 'Вы хотите быть большим или маленьким?',
    answers: ['Большим', 'Маленьким'],
  },
  {
    question: 'Хотите ли вы обладать шерстью?',
    answers: ['Нет', 'Да'],
  },
];




function _animal_define() {
  _animal = animals.filter((_animal) => _animal.mask == parseInt(_animal_filter, 2))[0] ?? '';
}


function _popup__meta_dialog__on_click(event) {
  if (_animal != null) return;
  
  if (event.target == _popup__answers[0]) {
    _animal_filter += 0;
    popup_content_refresh();
  }
  else if (event.target == _popup__answers[1]) {
    _animal_filter += 1;
    popup_content_refresh();
  }
}




function popup_content_refresh() {
  if (_popup_content_index < popup_contents.length) {
    _popup__meta_dialog.children[0].textContent = popup_contents[_popup_content_index].question;
    _popup__meta_dialog.children[1].textContent = popup_contents[_popup_content_index].answers[0];
    _popup__meta_dialog.children[2].textContent = popup_contents[_popup_content_index].answers[1];
    _popup_content_index++;
    
    return;
  }
  
  _popup__meta_dialog.classList.add('popup__hidden');
  _animal_define();
  
  if (_animal) {
    _popup__animal.textContent = _animal.name;
    _popup__solution.classList.remove('popup__hidden');
  }
  else {
    _popup__fail.classList.remove('popup__hidden');
  }
}


function main() {
  _popup__meta_dialog.addEventListener('click', _popup__meta_dialog__on_click);
  popup_content_refresh();
}




main();
