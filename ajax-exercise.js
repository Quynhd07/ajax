"use strict";


// PART 1: SHOW A FORTUNE


// function showFortune(evt) {

//     // TODO: get the fortune and show it in the #fortune-text div
//     $.get('/fortune', (res) => {
//         $('#fortune-text').html(res);
//       });

// }

$('#get-fortune-button').on('click', () => {
  $.get('/fortune', (res) => {
        $('#fortune-text').html(res);
      });
});




// PART 2: SHOW WEATHER

function showWeather(evt) {
    evt.preventDefault();

    let url = "/weather.json";
    let formData = {"zipcode": $("#zipcode-field").val()};

    $.get(url, formData, (res) => {
      console.log(res)
      // why is res dict not printing even though we jsonified it 
      // how do we print out both properties
      $('#weather-info').html(res.forecast);
    });

    


    // TODO: request weather with that URL and show the forecast in #weather-info
}

$("#weather-form").on('submit', showWeather);




// PART 3: ORDER MELONS

function orderMelons(evt) {
    evt.preventDefault();

    let url = "/order-melons.json";

    let formData = {"melon_type": $("#melon-type-field").val(), "qty": $("#qty-field").val()};

    $.post(url, formData, (res) => {
      if (res.code === 'OK') {
        $('#order-status').html(res.msg)
      } else {
        $('#order-status').addClass('.order-error')
        $('.order-error').html(res.msg)
      }
    })

    // TODO: show the result message after your form
    // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
}

$("#order-form").on('submit', orderMelons);


