var currentDay = $('#currentDay');
var currentHour = moment().format('H');
var hourOfBlock = $('.row').data('hour');
var parsed = JSON.parse(currentHour);
var today = moment().format('MMMM Do YYYY');

currentDay.text('Today is: ' + today);

/////////////// ADDING BACKGROUND FUNCTIONALITY///////////////////////

function logHour(hour){
    $('.row').each(function(i){
        if ($(this).data('hour') < parsed){
            $(this).children('.col-10').addClass('past');
            
        } else if ($(this).data('hour') === parsed){
            $(this).children('.col-10').addClass('present');
            
        } else if ($(this).data('hour') > parsed){
            $(this).children('.col-10').addClass('future');
            
        }
    });
}

logHour(hourOfBlock);

/////////////// ADDING LOCAL STOAGE FUNCTIONALITY////////////////////////

function saveEvent(timeBlock, value){
    localStorage.setItem(timeBlock, value);
}

$('button').on('click',function(){
    var returnedText = $(this).parent().parent().children('.col-10').val();
    var nameOfEvent = $(this).parent().parent().find('span').text();
    saveEvent(nameOfEvent, returnedText);

})

// I found it to be much easier to simply create an array variable
// to refer to when calling for the key

var key = [
    '9 AM',
    '10 AM',
    '11 AM',
    '12 PM',
    '1 PM',
    '2 PM',
    '3 PM',
    '4 PM',
    '5 PM'
]

$('textarea').each(function(i){
    $(this).val(localStorage.getItem(key[i]));
})

// Above is the function that set the textarea value to the value
// stored in local storage
