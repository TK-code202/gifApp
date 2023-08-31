import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';
// import {url, urlTrend, urlRandom} from './js/gif.js';
import Logo from './assets/img/logo.png';

$(".navbar-brand img").attr("src", Logo);

$(document).ready(function() {
    $('#input-group-button-right').click(function() {
      const name = $('input#gifName').val();
      $('#gifName').val("");
  
      let request = new XMLHttpRequest();
      const url = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&q=${name}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`;
  
      request.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
          const response = JSON.parse(this.responseText);
          getElements(response);
        } else {
          $(".error").text('No search results found. Make sure your spellings are correct or try a more general keyword.');
        }
      };
  
      request.open("GET", url, true);
      request.send();


      function getElements(response) {
        // let content = response.data[0].embed_url;
        $('.gif1').html(`<img src="${response.data[0].images.fixed_height.url}">`);
        $('.gif2').html(`<img src="${response.data[1].images.fixed_height.url}">`);
        $('.gif3').html(`<img src="${response.data[2].images.fixed_height.url}">`);
        $('.gif4').html(`<img src="${response.data[3].images.fixed_height.url}">`);
        $('.gif5').html(`<img src="${response.data[4].images.fixed_height.url}">`);
        $('.gif6').html(`<img src="${response.data[5].images.fixed_height.url}">`);
        $('.gif7').html(`<img src="${response.data[6].images.fixed_height.url}">`);
        $('.gif8').html(`<img src="${response.data[7].images.fixed_height.url}">`);
        $('.gif9').html(`<img src="${response.data[8].images.fixed_height.url}">`);
        $('.gif10').html(`<img src="${response.data[9].images.fixed_height.url}">`);
        $('.gif11').html(`<img src="${response.data[10].images.fixed_height.url}">`);
        $('.gif12').html(`<img src="${response.data[11].images.fixed_height.url}">`);
        // $("img.gif1").attr("src", content);
        $(".error").text('');
      }
    });

    $('#trending').click(function() {

      let request = new XMLHttpRequest();
      const urlTrend = `https://api.giphy.com/v1/gifs/trending?api_key=${process.env.API_KEY}&limit=25&offset=0&rating=g&bundle=messaging_non_clips`;
  
      request.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
          const response = JSON.parse(this.responseText);
          getElements(response);
        }
      };
  
      request.open("GET", urlTrend, true);
      request.send();


      function getElements(response) {
        $('.gif1').html(`<img src="${response.data[0].images.fixed_height.url}">`);
        $('.gif2').html(`<img src="${response.data[1].images.fixed_height.url}">`);
        $('.gif3').html(`<img src="${response.data[2].images.fixed_height.url}">`);
        $('.gif4').html(`<img src="${response.data[3].images.fixed_height.url}">`);
        $('.gif5').html(`<img src="${response.data[4].images.fixed_height.url}">`);
        $('.gif6').html(`<img src="${response.data[5].images.fixed_height.url}">`);
        $('.gif7').html(`<img src="${response.data[6].images.fixed_height.url}">`);
        $('.gif8').html(`<img src="${response.data[7].images.fixed_height.url}">`);
        $('.gif9').html(`<img src="${response.data[8].images.fixed_height.url}">`);
        $('.gif10').html(`<img src="${response.data[9].images.fixed_height.url}">`);
        $('.gif11').html(`<img src="${response.data[10].images.fixed_height.url}">`);
        $('.gif12').html(`<img src="${response.data[11].images.fixed_height.url}">`);
        $(".error").text('');

      }
    });

    $('#random').click(function() {

      let request = new XMLHttpRequest();
      const urlRandom = `https://api.giphy.com/v1/gifs/random?api_key=${process.env.API_KEY}&tag=&rating=g`;
  
      request.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
          const response = JSON.parse(this.responseText);
          getElements(response);
        }
      };
  
      request.open("GET", urlRandom, true);
      request.send();


      function getElements(response) {
        $('.gif1').html(`<img src="${response.data.images.fixed_height.url}">`);
        $('.gif2').html(``);
        $('.gif3').html(``);
        $('.gif4').html(``);
        $('.gif5').html(``);
        $('.gif6').html(``);
        $('.gif7').html(``);
        $('.gif8').html(``);
        $('.gif9').html(``);
        $('.gif10').html(``);
        $('.gif11').html(``);
        $('.gif12').html(``);
        $(".error").text('');

      }
    });
});  