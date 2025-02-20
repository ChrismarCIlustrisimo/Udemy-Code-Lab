    $("button").click(function() {
        $("h1").css("color", "green");
    });


    $("input").keydown(function(event){
        $("h1").text(event.key)
    })