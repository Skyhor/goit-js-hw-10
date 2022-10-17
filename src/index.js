import './css/styles.css';
// import { fetchCountries } from './fetchCountries';
// import RRR from './fetchCountries';
import debounce from 'lodash.debounce';
const DEBOUNCE_DELAY = 300;
const divEl = document.querySelector('.country-info');
const input = document.querySelector('input');
input.addEventListener('input', debounce(onSerch, DEBOUNCE_DELAY));

let qwery = '';
function onSerch(e, DEBOUNCE_DELAY) {
  e.preventDefault();
  qwery = e.target.value;
  articles(qwery);
}
function articles(qwery) {
  if (qwery === '') {
    return;
  }
  const url = `https://restcountries.com/v3.1/name/${qwery}`;
  //   const url = ` https:restcountries.com/v2/{service}?fields={name.official},{capital},{population},{flags.svg},{languages}`;
  fetch(url)
    .then(r => r.json())
    .then(getMurkup);
}
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
  //   console.log(murkap);
  console.log(data);
}
