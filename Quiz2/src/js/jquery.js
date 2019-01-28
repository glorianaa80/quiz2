


$(document).ready(() => {

  const request = new XMLHttpRequest();
  request.addEventListener('load', (event) => {
    const response = event.target.response.events
    console.log(response)
    $('h2').text(response[0].hardcoded)
    $('#descrpcion0').text(response[0].name.text)
    $('#locacion0').text(response[0].venue.name)
    $('#btn-info').attr('href', response[0].url)
    $('#imagen').attr('src', 'img/bg-event-1.jpeg')

    let indiceImg = 1;
    let info = 0;

    // EVENTO 1 
    $('#fecha').text(response[0].hardcoded)
    $('#descripcion').text(response[0].name.text)
    $('#locacion').text(response[0].venue.name)
    $('#btn1').attr('href', response[0].url)
    // Evento 2 
    $('#fecha2').text(response[1].hardcoded)
    $('#descripcion2').text(response[1].name.text)
    $('#locacion2').text(response[1].venue.name)
    $('#btn2').attr('href', response[1].url)
    // EVENTO 3
    $('#fecha3').text(response[2].hardcoded)
    $('#descripcion3').text(response[2].name.text)
    $('#locacion3').text(response[2].venue.name)
    $('#btn3').attr('href', response[2].url)
    // EVENTO 4
    $('#fecha4').text(response[3].hardcoded)
    $('#descripcion4').text(response[3].name.text)
    $('#locacion4').text(response[3].venue.name)
    $('#btn4').attr('href', response[3].url)
    // EVENTO 5
    $('#fecha5').text(response[4].hardcoded)
    $('#descripcion5').text(response[4].name.text)
    $('#locacion5').text(response[4].venue.name)
    $('#btn5').attr('href', response[4].url)

    // ANTERIOR
    $('#anterior').click(function anterior() {
      indiceImg--;
      if (indiceImg < 1) {
        indiceImg = 5;
      }
      $('#imagen').attr('src', 'img/bg-event-' + indiceImg + '.jpeg')

      // Cambio de información
      info--
      if (info < 0) {
        info = 4;
      }
      $('h2').text(response[info].hardcoded)
      $('#descrpcion0').text(response[info].name.text)
      $('#locacion0').text(response[info].venue.name);
      $('#btn-info').attr('href', response[info].url);
    })
    //   SIGUIENTE
    $('#siguiente').click(function siguiente() {
      indiceImg++;
      if (indiceImg > 5) {
        indiceImg = 1;
      }
      $('#imagen').attr('src', 'img/bg-event-' + indiceImg + '.jpeg')

      // Cambio de información
      info++;
      if (info > 4) {
        info = 0;
      }
      $('h2').text(response[info].hardcoded)
      $('#descrpcion0').text(response[info].name.text)
      $('#locacion0').text(response[info].venue.name);
      $('#btn-info').attr('href', response[info].url);
    })
    $('li').click(function activo() {
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
    })
  })
  request.responseType = 'json';
  request.open('GET', '/data.json');
  request.send();


})