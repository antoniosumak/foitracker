const gumbdodajoi = document.getElementById("dodajoi");
const gumboduzmioi = document.getElementById("oduzmioi");
const outputoi = document.getElementById("oioutput");
const gumbdodajoisem = document.getElementById("dodajoisem");
const gumboduzmioisem = document.getElementById("oduzmioisem");
const outputoiseminar = document.getElementById("oioutputsem");
const gumbdodajppppred = document.getElementById("dodajppppred");
const gumboduzmippppred = document.getElementById("oduzmippppred");
const outputppppred = document.getElementById("pppoutputpred");
const gumbdodajpppsem = document.getElementById("dodajpppsem");
const gumboduzmipppsem = document.getElementById("oduzmipppsem");
const outputpppseminar = document.getElementById("pppoutputsem");
const gumbdodajpopred = document.getElementById("dodajpopred");
const gumboduzmipopred = document.getElementById("oduzmipopred");
const outputpopred = document.getElementById("pooutputpred");
const gumbdodajposem = document.getElementById("dodajposem");
const gumboduzmiposem = document.getElementById("oduzmiposem");
const outputposem = document.getElementById("pooutputsem");
const gumbdodajospred = document.getElementById("dodajospred");
const gumboduzmiospred = document.getElementById("oduzmiospred");
const outputospred = document.getElementById("osoutputpred");
const gumbdodajpipred = document.getElementById("dodajpipred");
const gumboduzmipipred = document.getElementById("oduzmipipred");
const outputpipred = document.getElementById("pioutputpred");
var brojacoisem = 0;
var brojacoipred = 0;
var brojacppppred = 0;
var brojacpppsem = 0;
var brojacpopred = 0;
var brojacposem = 0;
var brojacospred = 0;
var brojacpipred = 0;
if (localStorage.getItem("brojacoipred") === null) {
  localStorage.setItem("brojacoipred", "0");
}
if (localStorage.getItem("brojacoisem") === null) {
  localStorage.setItem("brojacoisem", "0");
}
if (localStorage.getItem("brojacppppred") === null) {
  localStorage.setItem("brojacppppred", "0");
}
if (localStorage.getItem("brojacpppsem") === null) {
  localStorage.setItem("brojacpppsem", "0");
}
if (localStorage.getItem("brojacpopred") === null) {
  localStorage.setItem("brojacpopred", "0");
}
if (localStorage.getItem("brojacposem") === null) {
  localStorage.setItem("brojacposem", "0");
}
if (localStorage.getItem("brojacospred") === null) {
  localStorage.setItem("brojacospred", "0");
}
if (localStorage.getItem("brojacpipred") === null) {
  localStorage.setItem("brojacpipred", "0");
}
console.log(localStorage);
gumbdodajoi.addEventListener("click", function () {
  brojacoipred = outputoi.innerText;
  brojacoipred++;
  localStorage.setItem("brojacoipred", brojacoipred);
  location.reload();
  localStorage.setItem("datum", date);
});
gumboduzmioi.addEventListener("click", function () {
  brojacoipred = outputoi.innerText;
  brojacoipred--;
  localStorage.setItem("brojacoipred", brojacoipred);
  location.reload();
});
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
gumbdodajppppred.addEventListener("click", function () {
  brojacppppred = outputppppred.innerText;
  brojacppppred++;
  localStorage.setItem("brojacppppred", brojacppppred);
  location.reload();
});

gumboduzmippppred.addEventListener("click", function () {
  brojacppppred = outputppppred.innerText;
  brojacppppred--;
  localStorage.setItem("brojacppppred", brojacppppred);
  location.reload();
});
gumbdodajpppsem.addEventListener("click", function () {
  brojacpppsem = outputpppseminar.innerText;
  brojacpppsem++;
  localStorage.setItem("brojacpppsem", brojacpppsem);
  location.reload();
});
gumboduzmipppsem.addEventListener("click", function () {
  brojacpppsem = outputpppseminar.innerText;
  brojacpppsem--;
  localStorage.setItem("brojacpppsem", brojacpppsem);
  location.reload();
});
gumbdodajpopred.addEventListener("click", function () {
  brojacpopred = outputpopred.innerText;
  brojacpopred++;
  localStorage.setItem("brojacpopred", brojacpopred);
  location.reload();
});

gumboduzmipopred.addEventListener("click", function () {
  brojacpopred = outputpopred.innerText;
  brojacpopred--;
  localStorage.setItem("brojacpopred", brojacpopred);
  location.reload();
});
gumbdodajposem.addEventListener("click", function () {
  brojacposem = outputposem.innerText;
  brojacposem++;
  localStorage.setItem("brojacposem", brojacposem);
  location.reload();
});

gumboduzmiposem.addEventListener("click", function () {
  brojacposem = outputposem.innerText;
  brojacposem--;
  localStorage.setItem("brojacposem", brojacposem);
  location.reload();
});
gumbdodajospred.addEventListener("click", function () {
  brojacospred = outputospred.innerText;
  brojacospred++;
  localStorage.setItem("brojacospred", brojacospred);
  location.reload();
});

gumboduzmiospred.addEventListener("click", function () {
  brojacospred = outputospred.innerText;
  brojacospred--;
  localStorage.setItem("brojacospred", brojacospred);
  location.reload();
});
gumbdodajpipred.addEventListener("click", function () {
  brojacpipred = outputpipred.innerText;
  brojacpipred++;
  localStorage.setItem("brojacpipred", brojacpipred);
  location.reload();
});

gumboduzmipipred.addEventListener("click", function () {
  brojacpipred = outputpipred.innerText;
  brojacpipred--;
  localStorage.setItem("brojacpipred", brojacpipred);
  location.reload();
});
for (let i = 0; i < localStorage.length; i++) {
  const oipred = localStorage.getItem("brojacoipred");
  outputoi.innerHTML = `${oipred}`;
  const oisem = localStorage.getItem("brojacoisem");
  outputoiseminar.innerHTML = `${oisem}`;
  const ppppred = localStorage.getItem("brojacppppred");
  outputppppred.innerHTML = `${ppppred}`;
  const pppsem = localStorage.getItem("brojacpppsem");
  outputpppseminar.innerHTML = `${pppsem}`;
  const popred = localStorage.getItem("brojacpopred");
  outputpopred.innerHTML = `${popred}`;
  const posem = localStorage.getItem("brojacposem");
  outputposem.innerHTML = `${posem}`;
  const ospred = localStorage.getItem("brojacospred");
  outputospred.innerHTML = `${ospred}`;
  const pipred = localStorage.getItem("brojacpipred");
  outputpipred.innerHTML = `${pipred}`;
}
