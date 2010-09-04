/* 
javascript:var%20s=document.createElement('script');s.setAttribute('src',%20'http://jquery.com/src/jquery-latest.js');document.getElementsByTagName('body')[0].appendChild(s);alert('Nu kan du filtrera!');void(s);
*/

console.log("App started");

Array.prototype.last = function() {return this[this.length-1];}; 

getCityFromCookie = function() {
 return document.cookie.split("city=").last();
 }; 

getByNr = function(nr) {
 console.log("nr: " + nr);
 if (document.location.toString().indexOf("filmkedjan") > -1) {
   return $.ajax({url: ("http://www.filmkedjan.com/Ajax/Butikslager.aspx?faktanr=" + nr.toString() + "&prodnr=no&stad=" + getCityFromCookie() + "&grupp=6&kedja=89&0.24850817870785385"), async: false}).responseText;}
 else {
   return $.ajax({url: ("http://www.hemmakvall.se/Ajax/Butikslager.aspx?faktanr=" + nr.toString() + "&prodnr=no&stad=" + getCityFromCookie() + "&grupp=2&kedja=4&0.24850817870785385"), async: false}).responseText;
   }
 };

hasMovie = function (e) { return $("*:contains('Finns inne')", $('b:contains("DVD (Hyr)")' ,  e).parent().parent().nextUntil("*:contains('LAGERSTATUS')")).prev().prev().contents().text() };


var links = $(".row > td > a");
getMovieId = function(elem) { return elem.attr("href").split("=").last()};

hideOneIfNotInStore = function() {
  var movieId = getMovieId($(this));
  var nr = getByNr(movieId);
  var store = hasMovie(nr);
  console.log("movieId:" + movieId + ", has stores: " + store);
  if (store === "") {
    $(this).parent().parent().detach();
  }
 };

hideAllIfNotInStore = function() {links.map(hideOneIfNotInStore);};

showLink = function() {
  if (document.cookie.indexOf("city") === -1) {
	$(".productContainerBig2").append('<h1 id="errorLabel" style="color: #ff0000">Fel! Du har inte valt någon stad.</h1>');
  }
  else {
    $(".productContainerBig2").append('<div id="removalLink" href="#" style="text-decoration: underline; cursor: pointer; margin-top: 24px;">Filtrera bort filmer som inte finns i ' + getCityFromCookie() + '</div>');
    $("#removalLink").click(hideAllIfNotInStore);
  }
};
showLink();
