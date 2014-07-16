$(document).ready(function () {
     // variables to construct from
    var targetDescription = "improve my typing speed";
    var currentState      = "I type at 30wpm";
    var endDate           = "the end of December";
    var endState          = "to type at 70wpm";
    var helpPerson1       = "Ben Doherty";
    var helpPerson2       = "Amanda Tenn";
    var timeProportion1   = "one third";
    var timeProportion2   = "two thirds";
    var excelentResult    = "the ablity to type at 90wpm";
    var adequateresult    = "typing at 70wpm";
    var failResult        = "if I still type at 30wpm";

    var naturalContent = function () {
        var naturalText = "<p>I would like to "
            +"<span class='cloze' title='targetDescription'>"+ targetDescription +"</span>"
            +". Currently "
            +"<span class='cloze' title='currentState'>"+ currentState +"</span>"
            +". By "
            +"<span class='cloze' title='endDate'>"+ endDate +"</span>"
            +" I'd like "
            +"<span class='cloze' title='endState'>"+ endState +"</span>"
            +".</p>"
            +"<p><span class='cloze' title='helpPerson1'>"+ helpPerson1 +"</span>"
            +" and "
            +"<span class='cloze' title='helpPerson2'>"+ helpPerson2 +"</span>"
            +" are important in helping me achieve this goal and I'd like to check in with them "
            +"<span class='cloze' title='timeProportion1'>"+ timeProportion1 +"</span>"
            +" and at"
            +"<span class='cloze' title='timeProportion2'>"+ timeProportion2 +"</span>"
            +" of the way through the period.</p><p>An excellent result would be "
            +"<span class='cloze' title='excelentResult'>"+ excelentResult +"</span>"
            +", an adequate result would be "
            +"<span class='cloze' title='adequateresult'>"+ adequateresult +"</span>"
            +" and I would consider it a failure if "
            +"<span class='cloze' title='failResult'>"+ failResult +"</span>"
            +".</p>";

        $('#natural').html(naturalText);
        $('#modalCheckBody').html(naturalText);
    };

    var updateTxt = function () {
        naturalContent();
        // console.log([targetDescription, currentState, endDate, endState, helpPerson1, helpPerson2, timeProportion1, timeProportion2, excelentResult, adequateresult, failResult]);
    };

var submitForm = function (emailString) {
    var param = { "requestBody": emailString };
	console.log('in the email function', emailString);
    $.post("/mum/email.php",
			param,
			function(data){
				console.log('in the response');
				console.log(data.body);
			},
			"json");
};

    //--------------------here we go--------------------
    $('#sendToMum').click(function(){
		console.log('submit button pressed');
	});

    $("#targetDescription").keyup(function(){
        targetDescription = $(this).val();
    });
    $("#currentState").keyup(function(){
        currentState = $(this).val();
    });
    $("#endDate").change(function(){
        endDate = $(this).val();
        // console.log("change");
    });
    $("#endDate").keyup(function(){
        endDate = new Date($(this).val()).toDateString();
    });
    $("#endState").keyup(function(){
        endState = $(this).val();
    });
    $("#helpPerson1").keyup(function(){
        helpPerson1 = $(this).val();
    });
    $("#helpPerson2").keyup(function(){
        helpPerson2 = $(this).val();
    });
    $(":radio.timeProportion1").change(function(){
        timeProportion1 = $(this).val();
    })
    $(":radio.timeProportion2").change(function(){
        timeProportion2 = $(this).val();
    });
    $("#excelentResult").keyup(function(){
        excelentResult = $(this).val();
    });
    $("#adequateresult").keyup(function(){
        adequateresult = $(this).val();
    });
    $("#failResult").keyup(function(){
        failResult = $(this).val();
    });
    $(':radio').change(updateTxt);
    $('input').keyup(updateTxt);
    $('#special').keyup(function () {
        var s = $(this).val();
        updateTxt();
    });

    $(function () {
        $("#datepicker").datepicker({
            dateFormat: "DD, d MM, yy",
            onClose: function (selectedDate) {
                date = selectedDate;
                updateTxt();
            }
        });
    });

});