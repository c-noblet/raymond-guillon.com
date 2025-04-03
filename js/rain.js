document.addEventListener('DOMContentLoaded', function() {
  let rainInterval = 1000;
  let isRaining = true;
  let timeBetweenNumberGeneration = 500;

  function startRain() {
    rainInterval = setInterval(addLetter, timeBetweenNumberGeneration);
    isRaining = true;
  }

  function stopRain() {
    clearInterval(rainInterval);
    isRaining = false;
  }

  function addLetter() {
    let letterElem = document.createElement('DIV');
    letterElem.innerHTML = randomLetter();
    letterElem.classList.add("letter")
    addElementDeath(letterElem);
    addCss(letterElem);
    document.getElementsByClassName('letters-wrapper')[0].appendChild(letterElem);
  }

  function randomLetter() {
    let letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    let letter = letters[Math.floor(Math.random() * letters.length)];
    return letter
  }

  function generateAnimation() {
    let clockwise = (Math.random() >= 0.5); // Random boolean
    let fallTime = ((Math.random() * 10) + 12); // 10s to 12s
    let turnTime = ((Math.random() * 8) + 10); // 8s to- 10s
    let fallAnimation = 'fall ' + fallTime + 's linear forwards';
    let turnAnimation = clockwise ?
      'turn ' + turnTime + 's linear forwards infinite' :
      'turn-alt ' + turnTime + 's linear forwards infinite';
    return fallAnimation + ', ' + turnAnimation;
  }

  function addElementDeath(letterElem) {
    letterElem.addEventListener('animationend', () => {
      if (!elementInViewport(letterElem)) {
        letterElem.parentNode.removeChild(letterElem)
      }
    });
  }

  function addCss(letterElem) {
    let startPosition = (Math.random() * 100); // A % of the screen width
    let font = Math.floor((Math.random() * 50) + 20);
    let animations = generateAnimation(); // 20px to 70px
    letterElem.style.animation = animations;
    letterElem.style.webkitAnimation = animations;
    letterElem.style.position = 'absolute';
    letterElem.style.fontSize = font;
    letterElem.style.left = startPosition + '%';
  }

  function elementInViewport(el) {
    let rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  window.onfocus = function() {
    startRain();
  };
  window.onblur = function() {
    stopRain();
  };

  startRain();
});
