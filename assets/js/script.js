    // current day on page load
    var update = function() {
        document.getElementById("currentDay")
        .innerHTML = moment().format('dddd, MMMM Do YYYY, h:mm:ss a');
    }
    // Refreshes page every 1 second to display time in Real Time
    setInterval(update, 1000);
      
    // Saves input text when clicking on save button
      $("button").on("click", function(){
          $('input, select, textarea').each(function() {
           var value = $(this).val(),
               name = $(this).attr('name');
           localStorage[name] = value;
           console.log(value);   
      })});

$( document ).ready(function() {
        console.log( "ready!" );
        $(localStorage).each(function() {
        localStorage.getitem(value)
        // return(value)
    });
}) 