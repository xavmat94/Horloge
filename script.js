function updateTime() {
  var now = new Date();
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();

  // Ajoute un zéro devant les nombres < 10 pour un affichage à deux chiffres
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  var timeString = hours + ":" + minutes + ":" + seconds;
  document.getElementById("time").textContent = timeString;
}

// Met à jour l'heure toutes les secondes
setInterval(updateTime, 1000);

