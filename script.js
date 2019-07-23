const face = document.getElementsByClassName("face")[0];
const jokeBox = document.getElementById("joke");
const curtains = Array.from(document.getElementsByClassName("face-bar"));

window.addEventListener("keypress", e => {
  e.preventDefault();
  if (e.keyCode === 32) {
    // Shut
    curtains.forEach(bar => {
      bar.classList.add("shut");
      bar.classList.remove("open");
    });
    // Fetch
    window.setTimeout(function() {
      fetch("https://icanhazdadjoke.com/", {
        headers: { Accept: "application/json" }
      })
        .then(res => res.json())
        .then(data => {
          let joke = data.joke;
          jokeBox.textContent = joke;
          // Open
          curtains.forEach(bar => {
            bar.classList.add("open");
            bar.classList.remove("shut");
          });
        });
    }, 2000);
  }
});