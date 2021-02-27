const gumbdodajoisem = document.getElementById("dodajoisem");
const gumboduzmioisem = document.getElementById("oduzmioisem");
const outputoiseminar = document.getElementById("oioutputsem");
var brojacoisem = 0;

gumbdodajoisem.addEventListener("click", function () {
  brojacoisem = outputoiseminar.innerText;
  brojacoisem++;
  localStorage.setItem("brojacoisem", brojacoisem);
  location.reload();
});
gumboduzmioisem.addEventListener("click", function () {
  brojacoisem = outputoiseminar.innerText;
  brojacoisem--;
  localStorage.setItem("brojacoisem", brojacoisem);
  location.reload();
});
for (let i = 0; i < localStorage.length; i++) {
  const oisem = localStorage.getItem("brojacoisem");
  outputoiseminar.innerHTML = `${oisem}`;
}
