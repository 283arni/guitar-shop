'use strict';
(function () {
  function disableCheckbox() {
    var guitars = [
      {
        type: 'акустическая гитара',
        value: '6,7,12,'
      },
      {
        type: 'укулеле',
        value: '4,'
      },
      {
        type: 'электрогитара',
        value: '4,6,7,'
      },
    ];

    var typeBoxes = document.querySelectorAll('#type-guitars input:checked');
    var stringsBoxes = document.querySelectorAll('#strings-guitars input');

    var strings = '';

    typeBoxes.forEach(function (type) {
      guitars.forEach(function (item) {
        if (type.value === item.type) {
          strings += item.value;
        }
      });
    });

    stringsBoxes.forEach(function (box) {
      if (typeBoxes.length) {
        box.disabled = true;

      } else {
        box.disabled = false;
      }
    });

    stringsBoxes.forEach(function (box) {
      strings.split(',').forEach(function (amountStrings) {
        if (box.value === amountStrings) {
          box.disabled = false;
        }
      });
    });

    var stringDisabled = document.querySelectorAll('#strings-guitars input:disabled');

    stringDisabled.forEach(function (box) {
      box.checked = false;
    });
  }

  window.disableCheckbox = disableCheckbox;
})();
