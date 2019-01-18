// Creacion de variables generales del documento
let response;
const request = new XMLHttpRequest();
// Variables generales del load
const container = document.getElementById('evento1');
const container2 = document.getElementById('evento2');
const container3 = document.getElementById('evento3');
const container4 = document.getElementById('evento4');
const container5 = document.getElementById('evento5');
const btnInfo = document.getElementById('btn-info');
const imagen = document.getElementById('imagen');
const anterior1 = document.getElementById('anterior');
const siguiente1 = document.getElementById('siguiente');
let indiceImg = 1;
let info = 0;

request.addEventListener('load', (event) => {
  // Obtiene la respuesta.
  response = event.target.response.events;
  console.log(response);
  // IMAGEN PRINCIPAL
  document.querySelector('h2').innerHTML = response[0].hardcoded;
  document.querySelector('#descrpcion0').innerHTML = response[0].name.text;
  document.querySelector('#locacion0').innerHTML = `- ${response[0].venue.name}`;
  btnInfo.setAttribute('href', response[0].url);
  imagen.src = 'img/bg-event-1.jpeg'
  // EVENTO 1
  // FECHA
  const itemResponseName = response[0].hardcoded;
  const listItemName = document.getElementById('fecha');
  listItemName.innerHTML = itemResponseName;
  container.appendChild(listItemName);
  // DESCRICION
  const itemResponse = response[0].name.text;
  const listItem = document.getElementById('descripcion');
  listItem.innerHTML = itemResponse;
  container.appendChild(listItem);
  // LOCALIZACION
  const itemResponseLi = response[0].venue.name;
  const listItemLi = document.getElementById('locacion');
  listItemLi.innerHTML = `- ${itemResponseLi}`;
  container.appendChild(listItemLi);
  // BOTON
  const btn1 = document.getElementById('btn1');
  const btn0 = document.getElementById('btn0');
  const itemResponseBtn1 = response[0].url;
  btn1.setAttribute('href', itemResponseBtn1);
  btn0.appendChild(btn1);
  container.appendChild(btn0);

  // EVENTO 2
  // FECHA
  const itemResponseName2 = response[1].hardcoded;
  const listItemName2 = document.getElementById('fecha2');
  listItemName2.innerHTML = itemResponseName2;
  container2.appendChild(listItemName2);
  // DESCRICION
  const itemResponse2 = response[1].name.text;
  const listItem2 = document.getElementById('descripcion2');
  listItem2.innerHTML = itemResponse2;
  container2.appendChild(listItem2);
  // LOCALIZACION
  const itemResponseLi2 = response[1].venue.name;
  const listItemLi2 = document.getElementById('locacion2');
  listItemLi2.innerHTML = `- ${itemResponseLi2}`;
  container2.appendChild(listItemLi2);
  // BOTON
  const btn2 = document.getElementById('btn2');
  const btn9 = document.getElementById('btn9');
  const itemResponseBtn2 = response[1].url;
  btn2.setAttribute('href', itemResponseBtn2);
  btn9.appendChild(btn2);
  container2.appendChild(btn9);

  // EVENTO 3
  // FECHA
  const itemResponseName3 = response[2].hardcoded;
  const listItemName3 = document.getElementById('fecha3');
  listItemName3.innerHTML = itemResponseName3;
  container3.appendChild(listItemName3);
  // DESCRICION
  const itemResponse3 = response[2].name.text;
  const listItem3 = document.getElementById('descripcion3');
  listItem3.innerHTML = itemResponse3;
  container3.appendChild(listItem3);
  // LOCALIZACION
  const itemResponseLi3 = response[2].venue.name;
  const listItemLi3 = document.getElementById('locacion3');
  listItemLi3.innerHTML = `- ${itemResponseLi3}`;
  container3.appendChild(listItemLi3);
  // BOTON
  const btn3 = document.getElementById('btn3');
  const btn8 = document.getElementById('btn8');
  const itemResponseBtn3 = response[2].url;
  btn3.setAttribute('href', itemResponseBtn3);
  btn8.appendChild(btn3);
  container3.appendChild(btn8);

  // EVENTO 4
  // FECHA
  const itemResponseName4 = response[3].hardcoded;
  const listItemName4 = document.getElementById('fecha4');
  listItemName4.innerHTML = itemResponseName4;
  container4.appendChild(listItemName4);
  // DESCRICION
  const itemResponse4 = response[3].name.text;
  const listItem4 = document.getElementById('descripcion4');
  listItem4.innerHTML = itemResponse4;
  container4.appendChild(listItem4);
  // LOCALIZACION
  const itemResponseLi4 = response[3].venue.name;
  const listItemLi4 = document.getElementById('locacion4');
  listItemLi4.innerHTML = `- ${itemResponseLi4}`;
  container4.appendChild(listItemLi4);
  // BOTON
  const btn4 = document.getElementById('btn4');
  const btn7 = document.getElementById('btn7');
  const itemResponseBtn4 = response[3].url;
  btn4.setAttribute('href', itemResponseBtn4);
  btn7.appendChild(btn4);
  container4.appendChild(btn7);

  // EVENTO 5
  // FECHA
  const itemResponseName5 = response[4].hardcoded;
  const listItemName5 = document.getElementById('fecha5');
  listItemName5.innerHTML = itemResponseName5;
  container5.appendChild(listItemName5);
  // DESCRICION
  const itemResponse5 = response[2].name.text;
  const listItem5 = document.getElementById('descripcion5');
  listItem5.innerHTML = itemResponse5;
  container5.appendChild(listItem5);
  // LOCALIZACION
  const itemResponseLi5 = response[2].venue.name;
  const listItemLi5 = document.getElementById('locacion5');
  listItemLi5.innerHTML = `- ${itemResponseLi5}`;
  container5.appendChild(listItemLi5);
  // BOTON
  const btn5 = document.getElementById('btn5');
  const btn6 = document.getElementById('btn6');
  const itemResponseBtn5 = response[2].url;
  btn5.setAttribute('href', itemResponseBtn5);
  btn6.appendChild(btn5);
  container5.appendChild(btn6);
});

// CAMBIAR IMAGEN
function siguiente() {
  indiceImg ++;
  if (indiceImg > 5) {
    indiceImg = 1;
  }
  imagen.src = `img/bg-event-${indiceImg}.jpeg`;
  console.log('hola');

  // Cambio de información
  info ++;
  if (info > 4) {
    info = 0;
  }
  document.querySelector('h2').innerHTML = response[info].hardcoded;
  document.querySelector('#descrpcion0').innerHTML = response[info].name.text;
  document.querySelector('#locacion0').innerHTML = response[info].venue.name;
  btnInfo.setAttribute('href', response[info].url);
}
function anterior() {
  indiceImg--;
  if (indiceImg < 1) {
    indiceImg = 5;
  }
  imagen.src = `img/bg-event-${indiceImg}.jpeg`;
  // Cambio de información
  info--;
  if (info < 0) {
    info = 4;
  }
  document.querySelector('h2').innerHTML = response[info].hardcoded;
  document.querySelector('#descrpcion0').innerHTML = response[info].name.text;
  document.querySelector('#locacion0').innerHTML = response[info].venue.name;
  btnInfo.setAttribute('href', response[info].url);
  console.log('adios');
}

// FUNCION DE ACTIVO
function activo() {
  const lis = document.querySelectorAll('li');
  for (const i of lis) {
    i.addEventListener('click', () => {
      const li = i;
      for (const a of lis) {
        a.className = 'info-fechas-lista';
      }
      li.className = 'info-fechas-lista bbline';
    });
  }
}

container2.addEventListener('click', activo);
container3.addEventListener('click', activo);
container4.addEventListener('click', activo);
container5.addEventListener('click', activo);
siguiente1.addEventListener('click', siguiente);
anterior1.addEventListener('click', anterior);

request.responseType = 'json';
request.open('GET', '/data.json');
request.send();
