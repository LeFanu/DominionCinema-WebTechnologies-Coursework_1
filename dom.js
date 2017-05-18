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
      $('<a/>').append($('<span/>').text("Booking 2 Option")).attr('href','booking2.html').appendTo(titleBar);

	 //adding title bar on top of the page
      var heading = $('<h1/>').attr('id','heading').text("Dominion Cinema Replica");
      $('#titleBar').after(heading);

      //adding new div to contain only information about the movie
      $('#theatre').prepend(
          $('<div/>').attr('id','movieDetails')
                     .addClass('mainPanel'));
      $('#theatre div').appendTo($('#movieDetails'));

      //adding further movie's details and description
      $('#movieDetails').append(
          $('<div />').text("Run Time: ")
                      .append(
                          $('<span/>').attr('id','runtime')
                      )
          );
      $('#movieDetails').append(
          $('<div />').text("Date: ")
                      .append(
                          $('<span/>').attr('id','date')
                      )
      );
      $('#movieDetails').append(
          $('<div/>').attr('id','rating')
                     .text("Rating: "));



      //adding movie's image to the page with fade in
      $('#movieDetails').before($('<div />')
                        .attr('id','img'));
      $('#img').append($('<img />')
               .attr('src', d.image)
               .fadeIn(2000, function () {
          //adding movie details after image is displayed
                $('#screen').text(d.screen);
                $('#movie').text(d.title);
                $('#runtime').text(d.runtime);
                $('#date').text(d.date.substr(0, 10) + ", Time: " + d.date.substring(11,16));
                $('<img/>').attr('src', 'Pegi.png')
                           .css({width: "50px", height: "50px", float: "right"})
                           .appendTo('#rating');
      }));

      //adding a class to all span elements to look the same
      $('#movieDetails div').children('span')
                          .each(function () {
          $(this).addClass("spanText");
      });

      //declaring variables for loop that displays the seats
      var unavailableSeat;
      var tableColumns;

      //adding main table with the seats
      var tableMain = $('#theatreTab');


      //this function operates in the loop below checking what seats are available and adding appropriate classes
      function isSeatTaken(unavailableSeat ) {
          var className = "";
          if (unavailableSeat == "X") {
              className = "taken";
          }
          if (unavailableSeat == "O") {
              className = "free";
          }
          if (unavailableSeat == "M") {
              className = "booked";
          }
          return className;
      }

      // The row loop - each step in this loop deals with one row of the table
      for(var i=0;i<d.rowLabels.length;i++){
      // Create a table row
      var tableRow = $('<tr/>')
        .append($('<th/>',{text:d.rowLabels[i]}))
        .appendTo(tableMain);

      // This sample program deals with the first two seats
      // It would be much better to use an inner loop

      // Deal with the first seat in the row
        //tmap are the seats designation codes
      // umap indicates if the seat is used
      // X indicates taken by someone else
      // O indicates available
      // M indicates my seat
      // space indicates no seat

          //counter for the seats in each row
        var seatNumber = 1;
        for (var j = 0; j < d.umap[i].length; j++) {

            //checking if current seat is available
            unavailableSeat = d.umap[i].charAt(j);
            // tmap indicates the type of seat
            // L or R for left or right sofa, A for armchair, space for none
            var typeOfSeat = d.tmap[i].charAt(j);

            tableColumns = $('<td/>');

            //checking if current cell contain a seat and if so we add the seat number
            //type of seat is added to the Id for easier price calculations
            if (typeOfSeat != " ") {
                tableColumns.text(seatNumber)
                            .attr('id',typeOfSeat + d.rowLabels[i] +seatNumber );
                seatNumber++;
            }

            //determine the type of the seat and assign a proper class
            if (typeOfSeat === 'L') {
                tableColumns.addClass('left-sofa').addClass(isSeatTaken(unavailableSeat));
            }
            if (typeOfSeat === 'R') {
                tableColumns.addClass('right-sofa').addClass(isSeatTaken(unavailableSeat));
            }
            if (typeOfSeat === 'A') {
                tableColumns.addClass('armchair').addClass(isSeatTaken(unavailableSeat));
            }

            //adding current row to the table
            tableRow.append(tableColumns);
        }

        //display of row designation at the right hand side of the table
        tableRow.append($('<th/>',{text:d.rowLabels[i]}));
    }

    //moving theatre tab below the theatre div
      $('#theatreTab').appendTo('body');

      //adding new panel for displaying additional details about the booking
      $('#theatre').append($('<div/>').attr('id','middlePanel'));

        //seats availability description
      addSeats("armchair_free.png", "Free Seat" );
      addSeats("armchair_booked.png", "Your Seat" );
      addSeats("armchair_taken.png", "Taken Seat" );

      //function that will help reduce the code lines
      function addSeats(source, description) {
          $('#middlePanel').append(
              $('<figure/>')
                  .append(
                      $('<img/>').attr('src',source))
                  .append(
                      $('<figcaption/>').text(description)
                  )
          );
      }

      $('figure').each(function () {
          $(this).addClass("seatsExample");
      });

      //adding details about the booking
      var totalPrice = $('<span/>').html("&pound0")
          .css({color: "#FF4500", fontStyle: "italic", fontSize: "120%"});

      var numberOfSeats = $('<span/>').text("0");
      var bookingDetails = $('<div/>').appendTo('#middlePanel');
      $('<p/>').text("Sofa price: " + (parseFloat(d.pricing.L)*2).toFixed(2) +
              ", Armchair price: " + parseFloat(d.pricing.A).toFixed(2))
               .addClass("priceDetails")
               .appendTo(bookingDetails);
      $('<p/>').attr('id','totalPrice')
               .text("Total price: ")
               .addClass("priceDetails")
               .appendTo(bookingDetails);
      $('<p/>').attr('id','selectedSeats')
               //.html("You selected " +  numberOfSeats.text() + " seats: ")
               .addClass("priceDetails")
               .appendTo(bookingDetails);
      $('<p/>').text("Full table service is in operation between 7:00 and 20:00.")
               .addClass("priceDetails")
               .appendTo(bookingDetails);


      //moving seats table into a div and adding additional content to it
      $('<div/>').attr('id','mainTable')
                 .appendTo('body');
      $('#theatreTab').prependTo($('#mainTable'));

      //content below the seats table
      $('<div/>').attr('id','screenDetails').appendTo('body');
      $('#screenDetails').append(
          $('<p/>').attr('id','frontRow')
                   .text("FRONT ROW"));
      $('#screenDetails').append(
          $('<p/>').attr('id','screenRow')
                   .text("Screen"));
      $('#screenDetails').append(
          $('<a/>').attr('href','payment.html').append(
              $('<input/>', {type: "button",name: "next", value: "Next"})
                  .attr('id','continueButton')
                  .addClass("myButton inactive")
          ));
      $('#screenDetails').append(
          $('<input/>', {type: "button",name: "cancel", value: "Cancel"})
              .addClass("myButton active"));


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
          if (chosenSeats.length === seatsToBook && chosenSeats.hasClass('armchair')) {
              $('#continueButton').addClass("active")
                  .removeClass("inactive").trigger('cssClassChanged');

          } else {
              $('#continueButton').addClass("inactive")
                  .removeClass("active").trigger('cssClassChanged');
          }

      }

      //function to update the display of the selected seats
      showSelectedSeats();
      function showSelectedSeats() {
          //getting all of booked seats
          chosenSeats = $('td.booked');
          numberOfSeats.text(chosenSeats.length);
          $('#selectedSeats').text("You selected " +  numberOfSeats.text() + " of " + seatsToBook  + " seats: ");

          //removing currently displayed selected seats
          $('#selectedSeats span').remove();
          var currentlyBookedSeats = chosenSeats.map(function(){
              return $(this).attr('id').substring(1,5);
          });
          //iterate through selected seats and appending them to the page
          for (var i = 0; i < currentlyBookedSeats.length; i++) {
              $('#selectedSeats').append(
                  $('<span/>', {text:currentlyBookedSeats[i] + " "})
                      .css({color: "#FF4500", fontStyle: "italic", fontSize: "120%"}));
          }
      }

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

      $('td').click(function(){
          var thisSeatID = parseInt($(this).attr('id').substring(3,5));
          var isArmchair = $(this).hasClass("armchair");
          console.log("seat ID " + thisSeatID);
          //allowing booking
          if ($(this).hasClass("free") && chosenSeats.length < seatsToBook) {
              //if armchair is not selected we want to check if customer wants to book the armchair now
               if (isArmchair){
                   $(this).addClass("booked")
                       .removeClass("free");
               } //if selected seat is not an armchair and there are none selected we want to print the message to the user
               else if (!chosenSeats.hasClass('armchair') && chosenSeats.length > 0){
                  middlePannelSeatMessage("You have to select " + d.armchairRequire + " armchairs.");
                  return 0;
               } //otherwise we proceed as normal
               else {
                   if (isArmchair) {
                       $(this).addClass("booked")
                           .removeClass("free");
                   }
                   //if it is a sofa we want to select whole sofa instead of a half
                   else {
                       if (thisSeatID % 2 != 0 && thisSeatID) {
                           $(this).addClass("booked")
                               .removeClass("free")
                               .next()
                               .addClass("booked")
                               .removeClass("free");
                       }
                       else {
                           $(this).addClass("booked")
                               .removeClass("free")
                               .prev()
                               .addClass("booked")
                               .removeClass("free");
                       }
                   }
               }
          //breaking function if taken as we do not want to trigger any further functions
          } else if (($(this).hasClass("taken"))) {
              //using return simply as a break
              return 0;
          } //checking if customer is trying to order more than allowed
          else if ($(this).hasClass("free") && chosenSeats.length === seatsToBook) {
                       middlePannelSeatMessage("You have already selected your chosen number of seats.");
                            return 0;
          } else {
              if ($(this).hasClass('booked')) {
                  if (isArmchair) {
                      $(this).addClass("free")
                          .removeClass("booked");
                  } else {
                      if (thisSeatID%2 != 0 && thisSeatID) {
                          $(this).addClass("free")
                              .removeClass("booked")
                              .next()
                              .addClass("free")
                              .removeClass("booked");
                      } else {
                          $(this).addClass("free")
                              .removeClass("booked")
                              .prev()
                              .addClass("free")
                              .removeClass("booked");
                      }
                  }
              }
          }

          showSelectedSeats();
          //function call to check if user may proceed with the booking
          readyToContinue();
          displayPrices(d);
         /* console.log("chosen seats " + chosenSeats.length);
          console.log("to book seats " + seatsToBook);*/
      });

      //when we hover over the free seats we can see what seats are available to book
      $('td').hover(function () {
          if ($(this).hasClass("free")) {
              $(this).addClass("booked");
          }

      }, function () {
          if ($(this).hasClass("free")) {
              $(this).removeClass("booked");
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



