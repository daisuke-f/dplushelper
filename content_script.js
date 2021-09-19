function closePopup() {
  let popup = document.querySelector('#player-container .js-error-modal');

  if(popup) {
    let button = popup.querySelector('.c-btn--primary');
    button.click();
  }
}

exportFunction(closePopup, window, {defineAs: 'closePopup'});

// Check and close a popup window every second.
var timer = window.setInterval(closePopup, 1000);
