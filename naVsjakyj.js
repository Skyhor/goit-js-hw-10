// const NewFetchCountries = new fetchCountries();
// let nameCountry = '';
// function fetchCountries(name) {
// function onSerch(event) {
//   //   event.preventDefault();
//   //   const form = event.turget.qwery.values;
//   //   console.log(form);
// }

// let page = 0;
// onSerch();
// function getEvents(page, keyword) {
//   fetchCountries().then(data => {
//     getMurkup(data);
//     page, keyword;
//   });
// }
// getEvents();

// function getMurkup(data) {
//   const murkap = data
//     .map(
//       ({
//         fifa,
//         flags,
//         altSpellings,
//         capital,
//         population,
//         languages,
//         coatOfArms,
//       }) => {
//         return `<div class="card">
//        <div class="img-card"><img src="${flags.png}" alt="${fifa}" width='100'></div>
//        <div class="text-card">
//          <p class="text">name: ${altSpellings}</p>
//          <p class="text">capital: ${capital}</p>
//          <p class="text">population: ${population}</p>
//          <p class="text">languages: ${languages}</p>
//        </div>
//      </div>`;
//       }
//     )
//     .join('');
//   divEl.innerHTML = murkap;
//   //   console.log(murkap);
//   //   console.log(data);
// }
// input.addEventListener('input', event => {
//   event.preventDefault();
//   const qwery = event.target.value;
//   if (!qwery) {
//     return;
//   }
//   getEvents(q, qwery);
// });
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// let name = '';
// const URL = 'https://restcountries.com/';
// const URL_COUNTRY = 'v3.1/name/';
// export const URL_NAME = `${name}`;

// fetch(`https://restcountries.com/v3.1/name/usa`);
// export const fetchCountries = name => {
//   //   const name = '';
//   return fetch(`https://restcountries.com/v3.1/name/usa`)
//     .then(response => {
//       if (!response.ok) {
//         throw new Error(response.status);
//       }
//       return response.json();
//     })
//     .catch(error => {
//       console.log(error);
//     });
// };
// export default function onSerch(e) {
//   e.preventDefault();
//   const qwery = e.target.value;
//   const URL = `https://restcountries.com/v3.1/name/${qwery}`;
//   fetch(url)
//     .then(r => r.json())
//     .then(console.log());
// }

// export default class RRR {
//   constructor() {}
//   // if (qwery === '') {
//   //   return;
//   // }
//   fetchCountries(qwery) {
//     const url = `https://restcountries.com/v3.1/name/${qwery}`;
//     fetch(url)
//       .then(r => r.json())
//       .then(console.log());
//   }
// }
