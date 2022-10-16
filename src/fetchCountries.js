export const fetchCountries = name => {
  //   const name = '';
  return fetch(`https://restcountries.com/v3.1/name/usa`)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .catch(error => {
      console.log(error);
    });
};
