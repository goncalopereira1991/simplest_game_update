function startTimer(duration, display) {
    var seconds = duration;
    var interval = setInterval(function () {
        seconds=seconds-1;
        display.html(seconds);

        if (seconds <= 0) {
            var result=Number($('#result').html());
            $('#timer_label').css("display", "none");
            $('#timer').css("display", "none");
            $('#btn_start').css("display", "inline-block");
            $('.tile').css("display", "inline-block");
            alert("Conseguiu fazer "+result+" pontos!");
            clearInterval(interval);
        }
    }, 1000);
};

$('#btn_start').click(function(){
    var tile1_status = $('#tile1').css("display");
    var tile2_status = $('#tile2').css("display");
    var tile3_status = $('#tile3').css("display");
    var tile4_status = $('#tile4').css("display");

    tile_array=["#tile1","#tile2","#tile3","#tile4"];

    $('.tile').css("display", "none");
    var random = Math.floor((Math.random() * 4) + 0);
    $('#result').html("0");
    $('#btn_start').css("display", "none");
    $(tile_array[random]).css("display", "inline-block");
    $("#timer_label").css("display", "inline-block");
    $("#timer").css("display", "inline-block");
    var seconds_to_play = 15, display = $('#timer');
    $('#timer').html(seconds_to_play);
    startTimer(seconds_to_play, display);
});

$('#tile1').click(function(){
    var tile1_status = $('#tile1').css("display");
    tile_array=["#tile2","#tile3","#tile4"];
    var current_points=Number($('#result').html());

    if(tile1_status!="none")
    {
        var random = Math.floor((Math.random() * 3) + 0);
        $('#result').html(current_points+1);
        $('#tile1').css("display", "none");
        $(tile_array[random]).css("display", "inline-block");
    }
});

$('#tile2').click(function(){
    var tile1_status = $('#tile2').css("display");
    tile_array=["#tile1","#tile3","#tile4"];
    var current_points=Number($('#result').html());

    if(tile1_status!="none")
    {
        var random = Math.floor((Math.random() * 3) + 0);
        $('#result').html(current_points+1);
        $('#tile2').css("display", "none");
        $(tile_array[random]).css("display", "inline-block");
    }
});

$('#tile3').click(function(){
    var tile1_status = $('#tile3').css("display");
    tile_array=["#tile1","#tile2","#tile4"];
    var current_points=Number($('#result').html());

    if(tile1_status!="none")
    {
        var random = Math.floor((Math.random() * 3) + 0);
        $('#result').html(current_points+1);
        $('#tile3').css("display", "none");
        $(tile_array[random]).css("display", "inline-block");
    }
});

$('#tile4').click(function(){
    var tile1_status = $('#tile4').css("display");
    tile_array=["#tile1","#tile2","#tile3"];
    var current_points=Number($('#result').html());

    if(tile1_status!="none")
    {
        var random = Math.floor((Math.random() * 3) + 0);
        $('#result').html(current_points+1);
        $('#tile4').css("display", "none");
        $(tile_array[random]).css("display", "inline-block");
    }
});