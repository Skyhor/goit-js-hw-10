import './css/styles.css';
import { fetchCountries } from './fetchCountries';
const DEBOUNCE_DELAY = 300;
const divEl = document.querySelector('.country-info');
const input = document.querySelector('input');
// let nameCountry = '';
// function fetchCountries(name) {
function onSerch(event) {
  //   event.preventDefault();
  //   const form = event.turget.qwery.values;
  //   console.log(form);
}
let page = 0;
onSerch();
function getEvents(page, keyword) {
  fetchCountries().then(data => {
    getMurkup(data);
    page, keyword;
  });
}
getEvents();

function getMurkup(data) {
  const murkap = data
    .map(
      ({
        fifa,
        flags,
        altSpellings,
        capital,
        population,
        languages,
        coatOfArms,
      }) => {
        return `<div class="card">
       <div class="img-card"><img src="${flags.png}" alt="${fifa}" width='100'></div>
       <div class="text-card">
         <p class="text">name: ${altSpellings}</p>
         <p class="text">capital: ${capital}</p>
         <p class="text">population: ${population}</p>
         <p class="text">languages: ${languages}</p>
       </div>
     </div>`;
      }
    )
    .join('');
  divEl.innerHTML = murkap;
  //   console.log(data);
}
input.addEventListener('input', event => {
  event.preventDefault();
  const qwery = event.target.value;
  if (!qwery) {
    return;
  }
  getEvents(page, qwery);
});
