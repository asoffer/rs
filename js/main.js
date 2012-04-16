var GLOBAL_v = 0.9;
var GLOBAL_d = "Apr 16, 2012";

$(document).ready(function(){
    $("#version").html("<span id = \"vers\">Version " + GLOBAL_v + "</span><br>Last updated "+GLOBAL_d);
    //$("#vers").click(function(){
    //sendMessage("Changes","<h4>What's new in Version " + GLOBAL_v + "?</h4><ul><li>Groups sizes $540, 630, 810, 990, 1890$ and more solved.</li></ul><h4>What's new in Version 1.2?</h4><ul><li>Display issues with long lists fixed.</li><li>Potentially long lines only displayed at users choice.</li><li>Added capability to input arithmetic expressions.</li></ul>");
    //});

    $("#in").keyup(function(e){
        if(e.keyCode == 13)
        $("#go").click();
    });


    $("#go")
    .button()
    .click(doRS);
});

function doRS(){
    var str = $("#in").val();

    var a = str.split(",");
    var l = new List();

    for(var i = 0; i < a.length; ++i){
        l.pushBack(parseInt(a[i]));
    }

    x = Tableaux.robinsonSchensted(l);
    $("#yt_left").html("" + x.first);
    $("#yt_right").html("" + x.second);

}

function sendMessage(title, message){
    $("#message").html(message);
    setDialog(title);
    $("#message").dialog("open");
}

function setDialog(title){
    $("#message").dialog({
        width: 400,
    resizable: false,
    autoOpen: false,
    modal: true,
    open: function(){
        $('.ui-widget-overlay').hide().fadeIn();
    },
    hide: "fade",
    title: title
    });
}
