let searchBox = document.getElementById('searchBox');
const btn = document.getElementById('btn');

async function getData(country) {
  const res = await fetch(
    `https://restcountries.com/v3.1/name/${country}?fullText=true`
  );
  const data = await res.json();

  //printing the flag
  const flag = (document.getElementById('flag').src = data[0].flags.png);

  //printing the country name
  let countryName = (data[0].name.common);
  let countryNameUpppper=countryName.toUpperCase()
  const countryValue = (document.getElementById('country').innerHTML =
    'Country Name : ' + countryNameUpppper);

  //printing capital name
  let capital = (document.getElementById('capital').innerHTML =
    'Capital Name :' + data[0].capital[0]);
  //printing the country area
  const areaValue = (document.getElementById('area').innerHTML =
    'Area : ' + data[0].area + ' Square Kilometers');

  //border country name
  let border = data[0].borders;
  let borderValue = (document.getElementById('border').innerHTML =
    'Borders Country : ' + border);

  //continents name
  const continents = (document.getElementById('continents').innerHTML =
    `Continents Name : ` + data[0].continents[0]);

  //population
  const population = (document.getElementById('population').innerHTML =
    `Population : ` + data[0].population);

  //language
  const languages = (document.getElementById('languages').innerHTML = "Languages : " +
    Object.values(data[0].languages).toString());

  //car site
  let carSide = document.getElementById('carSide').innerHTML = `Car Side : ` + data[0].car.side;

  //independent yes or not
  let independent = document.getElementById('independent');
  if (data[0].independent == true) {
    independent.innerHTML = 'Independent : YES';
  }
  else {
    independent.innerHTML = 'Independent : NO';
  }
  // const map = document.getElementById('map');
  // map.href.innerHTML = data[0].maps.googleMaps;
  // console.log(data[0].maps.googleMaps);
}
btn.addEventListener('click', () => {
  getData(searchBox.value);
});
