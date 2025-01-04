function setCountdown() {
  const countdownElement = document.querySelector("#countdown");
  const daysLeft = Math.ceil((1749877200000 - Date.now())/86400000);
  countdownElement.innerText = `${daysLeft} ${daysLeft == 1 ? "day" : "days"} away!`;
}

setCountdown();
