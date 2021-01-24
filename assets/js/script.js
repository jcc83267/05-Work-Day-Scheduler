let dateTodayEl = document.querySelector("#currentDay");
let date = moment().format("dddd, MMMM Do");
dateTodayEl.textContent = date;

//function to color textbox based on past present future time
let timeIndicator = function () {
    //grabs current hour
    let currentHour = moment().hour();
    $(".time-block").each(function () {
        //grabs block time ex(id = hour8; so it grabs 8) used to compare time
        let blockTime = parseInt($(this).attr("id").split("hour")[1]);

        //add/removes class based on current time and change text box
        if (blockTime < currentHour) {              //time has passed(color it grey)
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past");
        } else if (blockTime === currentHour) {     //present hour (color it red)
            $(this).removeClass("future");
            $(this).addClass("present");
            $(this).removeClass("past");
        } else {                                    //time has not passed (color it green)
            $(this).addClass("future");
            $(this).removeClass("present");
            $(this).removeClass("past");
        }
    })
}

// saveBtn click listener 
$(".saveBtn").on("click", function () {
    // Get nearby values of the description using JQuery
    let text = $(this).siblings(".description").val();
    let time = $(this).parent().attr("id");
    // Save text in local storage
    localStorage.setItem(time, text);
})

// Get items from local storage
let loadItems = function() {
    for(let i = 8; i <= 22; i++) {
        $("#hour" + i + " .description").val(localStorage.getItem("hour" + i));
    }
}

timeIndicator();
loadItems();