'use strict';

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden'); // 1. Покажите блок .setup, убрав в JS-коде у него класс .hidden.

var similarListElement = document.querySelector('.setup-similar-list'); //
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content; // элемент в который мы будем вставлять похожих магов

// var randomizeArray = function(arr:Array):Array {};

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_LASTNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var wizardCoat = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var wizardEyes = ['black', 'red', 'blue', 'yellow', 'green'];

var namerand = Math.floor(Math.random() * WIZARD_NAMES.length);
var lastnamerand = Math.floor(Math.random() * WIZARD_LASTNAMES.length);
var wizarcoatrandom = Math.floor(Math.random() * wizardCoat.length);
var wizardeyesrandom = Math.floor(Math.random() * wizardEyes.length);

var wizards = []
   wizards[0] = {
     name: WIZARD_NAMES[namerand] + ' ' + WIZARD_LASTNAMES[lastnamerand],
     coatColor: wizardCoat [wizarcoatrandom],
     eyesColor: wizardEyes[wizardeyesrandom]
   }
    wizards[1] = {
      name: WIZARD_NAMES[namerand] + ' ' + WIZARD_LASTNAMES[lastnamerand],
      coatColor: wizardCoat [wizarcoatrandom],
      eyesColor: wizardEyes[wizardeyesrandom]
    }
    wizards[2] = {
      name: WIZARD_NAMES[namerand] + ' ' + WIZARD_LASTNAMES[lastnamerand],
      coatColor: wizardCoat [wizarcoatrandom],
      eyesColor: wizardEyes[wizardeyesrandom]
    }
    wizards[3] = {
      name: WIZARD_NAMES[namerand] + ' ' + WIZARD_LASTNAMES[lastnamerand],
      coatColor: wizardCoat [wizarcoatrandom],
      eyesColor: wizardEyes[wizardeyesrandom]
    }


var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var i = 0; i < 4; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden'); // 5.Покажите блок .setup-similar, удалив у него CSS-класс hidden
