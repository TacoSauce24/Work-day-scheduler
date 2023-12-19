// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var currentDay = new Date();
$("#currentDay").text(currentDay);


// const testHour = dayjs().hour(15).hour()
// console.log(testHour)


const currentHour = dayjs().hour()
console.log(currentHour)

if(currentHour < 9 || currentHour > 17) ;
switch (currentHour) {
  case 9:
    document.getElementById('hour-9').classList.add('present')
    document.getElementById('hour-10').classList.add('future')
    document.getElementById('hour-11').classList.add('future')
    document.getElementById('hour-12').classList.add('future')
    document.getElementById('hour-13').classList.add('future')
    document.getElementById('hour-14').classList.add('future')
    document.getElementById('hour-15').classList.add('future')
    document.getElementById('hour-16').classList.add('future')
    document.getElementById('hour-17').classList.add('future')
    break;
    case 10:
    document.getElementById('hour-9').classList.add('past')
    document.getElementById('hour-10').classList.add('present')
    document.getElementById('hour-11').classList.add('future')
    document.getElementById('hour-12').classList.add('future')
    document.getElementById('hour-13').classList.add('future')
    document.getElementById('hour-14').classList.add('future')
    document.getElementById('hour-15').classList.add('future')
    document.getElementById('hour-16').classList.add('future')
    document.getElementById('hour-17').classList.add('future')
    break;
    case 11:
    document.getElementById('hour-9').classList.add('past')
    document.getElementById('hour-10').classList.add('past')
    document.getElementById('hour-11').classList.add('present')
    document.getElementById('hour-12').classList.add('future')
    document.getElementById('hour-13').classList.add('future')
    document.getElementById('hour-14').classList.add('future')
    document.getElementById('hour-15').classList.add('future')
    document.getElementById('hour-16').classList.add('future')
    document.getElementById('hour-17').classList.add('future')
    break;
    case 12:
    document.getElementById('hour-9').classList.add('past')
    document.getElementById('hour-10').classList.add('past')
    document.getElementById('hour-11').classList.add('past')
    document.getElementById('hour-12').classList.add('present')
    document.getElementById('hour-13').classList.add('future')
    document.getElementById('hour-14').classList.add('future')
    document.getElementById('hour-15').classList.add('future')
    document.getElementById('hour-16').classList.add('future')
    document.getElementById('hour-17').classList.add('future')
    break;
    case 13:
    document.getElementById('hour-9').classList.add('past')
    document.getElementById('hour-10').classList.add('past')
    document.getElementById('hour-11').classList.add('past')
    document.getElementById('hour-12').classList.add('past')
    document.getElementById('hour-13').classList.add('present')
    document.getElementById('hour-14').classList.add('future')
    document.getElementById('hour-15').classList.add('future')
    document.getElementById('hour-16').classList.add('future')
    document.getElementById('hour-17').classList.add('future')
    break;
    case 14:
    document.getElementById('hour-9').classList.add('past')
    document.getElementById('hour-10').classList.add('past')
    document.getElementById('hour-11').classList.add('past')
    document.getElementById('hour-12').classList.add('past')
    document.getElementById('hour-13').classList.add('past')
    document.getElementById('hour-14').classList.add('present')
    document.getElementById('hour-15').classList.add('future')
    document.getElementById('hour-16').classList.add('future')
    document.getElementById('hour-17').classList.add('future')
    break;
    case 15:
    document.getElementById('hour-9').classList.add('past')
    document.getElementById('hour-10').classList.add('past')
    document.getElementById('hour-11').classList.add('past')
    document.getElementById('hour-12').classList.add('past')
    document.getElementById('hour-13').classList.add('past')
    document.getElementById('hour-14').classList.add('past')
    document.getElementById('hour-15').classList.add('present')
    document.getElementById('hour-16').classList.add('future')
    document.getElementById('hour-17').classList.add('future')
    break;
    case 16:
    document.getElementById('hour-9').classList.add('past')
    document.getElementById('hour-10').classList.add('past')
    document.getElementById('hour-11').classList.add('past')
    document.getElementById('hour-12').classList.add('past')
    document.getElementById('hour-13').classList.add('past')
    document.getElementById('hour-14').classList.add('past')
    document.getElementById('hour-15').classList.add('past')
    document.getElementById('hour-16').classList.add('present')
    document.getElementById('hour-17').classList.add('future')
    break;
    case 17:
    document.getElementById('hour-9').classList.add('past')
    document.getElementById('hour-10').classList.add('past')
    document.getElementById('hour-11').classList.add('past')
    document.getElementById('hour-12').classList.add('past')
    document.getElementById('hour-13').classList.add('past')
    document.getElementById('hour-14').classList.add('past')
    document.getElementById('hour-15').classList.add('past')
    document.getElementById('hour-16').classList.add('past')
    document.getElementById('hour-17').classList.add('present')
    break;
}



$('.saveBtn').on('click', function() {
  var text = $(this).siblings('.description').val()
  var time = $(this).parent().attr('id')

  console.log('text', text)
  console.log('time', time)

  localStorage.setItem(time, text)
});
  $('#hour-9 .description').val(localStorage.getItem('hour-9'));
  $('#hour-10 .description').val(localStorage.getItem('hour-10'));
  $('#hour-11 .description').val(localStorage.getItem('hour-11'));
  $('#hour-12 .description').val(localStorage.getItem('hour-12'));
  $('#hour-13 .description').val(localStorage.getItem('hour-13'));
  $('#hour-14 .description').val(localStorage.getItem('hour-14'));
  $('#hour-15 .description').val(localStorage.getItem('hour-15'));
  $('#hour-16 .description').val(localStorage.getItem('hour-16'));
  $('#hour-17 .description').val(localStorage.getItem('hour-17'));
  





  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.

