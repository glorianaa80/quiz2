$(document).ready((evento) =>{ 
    let indiceImg = 1;
    let info = 0;

    $('h2').text('Jan 26th')
    $('#descripcion0').text('ROCK to ICE clinic - Ourary Ice Climbing Festival')
    $('#locacion0').text('- Ouray Ice Park')
    $('#imagen').attr('src','img/bg-event-1.jpeg')


    // EVENTO 1 
    $('#fecha').text('Jan 26th')
    $('#descripcion').text('ROCK to ICE clinic - Ourary Ice Climbing Festival')
    $('#locacion').text('- Ouray Ice Park')
    // Evento 2 
    $('#fecha2').text('Jan 30th - Feb 1st')
    $('#descripcion2').text('Outdoor Retailer Snow Show')
    $('#locacion2').text('- The Colorado Convention Center')
    // EVENTO 3
    $('#fecha3').text('Feb 1st')
    $('#descripcion3').text('Berthoud Backcountry Bonanza')
    $('#locacion3').text('- Berthoud Pass')
    // EVENTO 4
    $('#fecha4').text('Feb 3rd')
    $('#descripcion4').text('FatBiking @ Devil´s Thumb Ranch')
    $('#locacion4').text('- Devil´s Thumb Ranch Resort & Spa')
    // EVENTO 5
    $('#fecha5').text('Feb 4th - Feb 5th')
    $('#descripcion5').text('SIA/WWSRA On-Snow Demo')
    $('#locacion5').text('- Cooper Mountain')

    // ANTERIOR
    $('#anterior').click(function anterior() {
        indiceImg--;
        if (indiceImg < 1) {
          indiceImg = 5;
        }
        $('#imagen').attr('src', 'img/bg-event-'+indiceImg+'.jpeg')

        // Cambio de información
        info--;
        if (info < 0) {
          info = 4;
        }
        $('h2').text(response[info].hardcoded)
        $('#descrpcion0').text(response[info].name.text)
        $('#locacion0').text(response[info].venue.name);
        $('btnInfo').attr('href', response[info].url);
      })
    //   SIGUIENTE
    $('#siguiente').click(function siguiente() {
        indiceImg++;
        if (indiceImg > 5) {
          indiceImg = 1;
        }
        $('#imagen').attr('src', 'img/bg-event-'+indiceImg+'.jpeg')
      
        // Cambio de información
        info++;
        if (info > 4) {
          info = 0;
        }
        document.querySelector('h2').innerHTML = response[info].hardcoded;
        document.querySelector('#descrpcion0').innerHTML = response[info].name.text;
        document.querySelector('#locacion0').innerHTML = response[info].venue.name;
        btnInfo.setAttribute('href', response[info].url);
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




$('h1').css('color', 'coral')