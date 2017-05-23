$(document).ready(function(){
  
  //click on press button
  $('#wikisearch').click(function(e){
  e.preventDefault();//block new window load to get to api
    var term = $('#term').val();//what user enters in field
console.log(term);
    var wikiApi = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + term + "&limit=5&format=json&callback=?";
   //api request format with limit for 5 results and json
    
    $.ajax({
      type: "GET",
      url: wikiApi,
      async: false,
      dataType: "json",
      success: function(data){
      //the actual call with ajax
        $('#wikilinks').html('');
        //clears screen ahead of prepend 
        for(var i=0; i < data[1].length; i++){
        //loops through data array
        $('#wikilinks').prepend("<div class='card animated zoomInDown'><div class='card-block'><h3 class='card-title' ><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Wikipedia_svg_logo.svg/500px-Wikipedia_svg_logo.svg.png' alt='wiki icon' height='80px' width='80px'/> " + data[1][i] + "</h3><p class='card-text'> " + data[2][i] + " </p> <a href=" + data[3][i] + " class='card-link' target='_blank'> " + data[1][i] + " </a> </div> </div>");
        }
        //adds data in card form
        $('#term').val('');
        //clears search field
      },
      error: function(error){
        alert('error, something bad happened');
      }
    });
  
    $('#term').keypress(function(e){
      if(e.which==13){
        $('#wikisearch').click();
      }
   //sets enter key to work as well
      
      });
  
  });
  
  
  
});