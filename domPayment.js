$(function(){
  $.ajax({url:'a42580.json',success:function(d){



      //adding title bar on top of the page
      var titleBar = $('<div/>').attr('id','titleBar');
      $('body').prepend(titleBar);

      //adding details to titleBar
      titleBar.append('<div/>').text("Select Your Seats");
      $('<span/>').text("Tickets").appendTo(titleBar);
      $('<span/>').text("Seats").appendTo(titleBar);
      $('<span/>').text("Payment").appendTo(titleBar);



      //adding new div to contain only information about the movie
      $('#theatre').addClass('mainPanel').css('width','50%');

      $('#theatre').before($('<div />')
          .attr('id','imgPayment'));
      $('#imgPayment').append($('<img />')
          .attr('src', 'paymentOptions.jpg')
          .fadeIn(2000));
      $('<p/>').text("Card Number: ").addClass("paymmentText")
                                     .appendTo( $('#theatre'));
      $('<input/>', {type: "text",name: "cardNumber", value: ""}).addClass("payment")
                                                                 .appendTo( $('#theatre'));

      $('<p/>').text("Cardholder Name: ").addClass("paymmentText")
          .appendTo( $('#theatre'));
      $('<input/>', {type: "text",name: "cardholderName", value: ""}).addClass("payment")
          .appendTo( $('#theatre'));

      $('<p/>').text("Expiry Date: ").addClass("paymmentText")
          .appendTo( $('#theatre'));
      $('<input/>', {type: "text",name: "expiryDate", value: ""}).addClass("payment")
          .appendTo( $('#theatre'));

      $('<p/>').text("CVC Code: ").addClass("paymmentText")
          .appendTo( $('#theatre'));
      $('<input/>', {type: "text",name: "cvcCode", value: ""}).addClass("payment")
          .appendTo( $('#theatre'));

      //adding a class to all span elements to look the same
      $('#theatre').children('span')
                          .each(function () {
          $(this).addClass("spanText");
      });


     /* //adding main table with the seats
      var tableMain = $('#theatreTab');





    //moving theatre tab below the theatre div
      $('#theatreTab').appendTo('body');*/

      //adding new panel for displaying additional details about the booking
     // $('#theatre').append($('<div/>').attr('id','middlePanel'));



      //moving seats table into a div and adding additional content to it
     /* $('<div/>').attr('id','mainTable')
                 .appendTo('body');
      $('#theatreTab').prependTo($('#mainTable'));*/

      //content below the seats table
      $('<div/>').attr('id','screenDetails').appendTo('body');
      $('#screenDetails').append(
          $('<p/>').attr('id','frontRow')
                   .text("Pay with PayPal"));
      $('#screenDetails').append(
          $('<p/>').attr('id','screenRow')
                   .text("Payment"));
      $('#screenDetails').append(
          $('<input/>', {type: "button",name: "pay", value: "Pay Now"})
              .attr('id','paymentButton')
              .addClass("myButton active"));
      $('#screenDetails').append(
          $('<input/>', {type: "button",name: "cancel", value: "Cancel"})
              .addClass("myButton active")).click(function () {
          window.history.back();
      });


      //BEHAVIOUR SECTION
      // All of the seats are in place
      // Now define the action to be taken when the user clicks on
      // a seat

      //variables for the seats to book
      var chosenSeats = $('td.booked');





      //function to check if user may proceed with the booking
      var seatsToBook = d.sofaRequired*2 + d.armchairRequire;

      readyToContinue();
      function readyToContinue() {


      }

      //function to update the display of the selected seats



      //function that will calculate and display prices
      displayPrices(d);
      function displayPrices(d) {
          chosenSeats = $('td.booked');
          var total = 0;

          $('#totalPrice span').remove();
          //lloking for the prices for our current seats
          for (var i = 0; i < chosenSeats.length; i++) {
              var seatType = $(chosenSeats[i]).attr('id').substring(0,1);
                  //determine the type of the seat and assigning price to it
                  if (seatType === 'L') {
                      //console.log("if ");
                      total += parseInt(d.pricing.L);
                  }
                  if (seatType === 'R') {
                      total += parseInt(d.pricing.R);
                  }
                  if (seatType === 'A') {
                      total += parseInt(d.pricing.A);
                  }
          }
          $('#totalPrice').append(
              $('<span/>').html("&pound" + total + ".00")
                  .css({color: "#FF4500", fontStyle: "italic", fontSize: "120%"}));
      }

      $('#continueButton').off().on("cssClassChanged", function () {
          if (chosenSeats.length != seatsToBook) {
              //callback function for displaying information about wrong selection
              middlePannelSeatMessage("You have to select " + d.sofaRequired + " sofas and " + d.armchairRequire + " armchairs");
          }
      });



      function middlePannelSeatMessage(message) {
          $('#middlePanel').append(
              $('<div/>').text(message)
                  .css({color: "red", fontStyle: "italic"}).fadeIn(500, function () {
                      $(this).fadeOut(2500, function () {
                          $(this).remove(this);
                      });
                  }
              ));

      }
 }})
});




