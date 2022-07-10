const clock = document.querySelector('.clock');

setInterval(() => {
  const currentTime = new Date();

  const hours = ("00" + currentTime.getHours()).slice(-2);
  const minutes = ("00" + currentTime.getMinutes()).slice(-2);
  const seconds = ("00" + currentTime.getSeconds()).slice(-2);

  clock.innerText = `${hours}:${minutes}:${seconds}`;
}, 100);