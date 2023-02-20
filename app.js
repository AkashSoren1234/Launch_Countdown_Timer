

const countToDate = new Date().setHours(new Date().getHours() + 400);

let previous;

setInterval(() => {
  const currentDate = new Date();
  const timedifference = Math.floor((countToDate - currentDate) / 1000);
  if (timedifference != previous) {
    flipAllCards(timedifference);
  }
  previous = timedifference;
}, 250);

function flipAllCards(time) {
  const days = Math.floor(time / (24 * 3600));
  const hours = Math.floor((time / 3600) % 24);
  const minutes = Math.floor((time / 60) % 60);
  const seconds = Math.floor(time % 60);


  const daysCard = document.querySelector(".days > .flip_card");
  const hoursCard = document.querySelector(".hours > .flip_card");
  const minutesCard = document.querySelector(".minutes > .flip_card");
  const secondsCard = document.querySelector(".seconds > .flip_card");


  flipCards(daysCard, days);
  flipCards(hoursCard, hours);
  flipCards(minutesCard, minutes);
  flipCards(secondsCard, seconds);
}

function flipCards(flipCard, time) {
  time = String(time).padStart(2, "0");
  const currentValue = flipCard.querySelector(".top").innerText;


  if (time === currentValue) {
    return;
  }

  const topFlip = document.createElement("div");
  topFlip.classList.add("top_flip");
  topFlip.innerText = currentValue;

  const bottomFlip = document.createElement("div");
  bottomFlip.classList.add("bottom_flip");
  bottomFlip.innerText = time;

  const topHalf = flipCard.querySelector(".top");
  const bottomHalf = flipCard.querySelector(".bottom");

  topFlip.addEventListener("animationstart", () => {
    topHalf.innerText = time;
  });

  topFlip.addEventListener("animationend", () => {
    topFlip.remove();
  });

  bottomFlip.addEventListener("animationend", () => {
    bottomHalf.innerText = time;
    bottomFlip.remove();
  });

  flipCard.appendChild(topFlip);
  flipCard.appendChild(bottomFlip);
}


