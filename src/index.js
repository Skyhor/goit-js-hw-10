import './css/styles.css';
import Notiflix from 'notiflix';
import debounce from 'lodash.debounce';
const DEBOUNCE_DELAY = 300;
const divEl = document.querySelector('.country-info');
const input = document.querySelector('input');
input.addEventListener('input', debounce(onSerch, DEBOUNCE_DELAY));

let name = '';
function onSerch(e) {
  e.preventDefault();
  name = e.target.value;
  articles(name);
}
function articles(name) {
  if (name === '') {
    divEl.innerHTML = '';
    return;
  }
  const url = `https://restcountries.com/v3.1/name/${name}`;

  fetch(url).then(resp => {
    if (!resp.ok) {
      divEl.innerHTML = '';
      throw Notiflix.Notify.failure('Oops, there is no country with that name');
    }
    return resp.json().then(makeMarkup, getMurkup);
  });
}
function getMurkup(data) {
  if (data.length > 10) {
    Notiflix.Notify.info(
      'Too many matches found. Please enter a more specific name.'
    );
    return;
  }
  if (data.length < 2) {
    const murkap = data
      .map(({ fifa, flags, altSpellings, capital, population, languages }) => {
        return `<div class="card">
       <div class="img-card"><img src="${
         flags.png
       }" alt="${fifa}" width='100'></div>
       <div class="text-card">
         <p class="text">name: ${altSpellings[1]}</p>
         <p class="text">capital: ${capital}</p>
         <p class="text">population: ${population}</p>
         <p class="text">languages: ${Object.values(languages)}</p>
       </div>
     </div>`;
      })
      .join('');
    divEl.innerHTML = murkap;
  }
}

function makeMarkup(data) {
  if (data.length >= 2 && data.length < 10) {
    const testMarkup = data
      .map(({ fifa, flags, altSpellings, coatOfArms }) => {
        return `<div>
<p class='text'>
<img src="${flags.png}" alt="${fifa}" width='20'>
${altSpellings[1]}

</div>`;
      })
      .join('');
    divEl.innerHTML = testMarkup;
  } else if (data.length > 11) {
    divEl.innerHTML = '';
  }
  getMurkup(data);
}
