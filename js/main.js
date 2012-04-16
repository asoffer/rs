$(document).ready(function(){
    var l = new List();
    l.pushBack(3);
    l.pushBack(4);
    l.pushBack(1);
    l.pushBack(2);

    var x = Tableaux.robinsonSchensted(l);

    $("#content").html("" + x.first);
    $("#content").append("<br><br>" + x.second);
});

function doRS(){
    var str = $("#perm").val();

    var a = str.split(",");
    var l = new List();

    for(var i = 0; i < a.length; ++i){
        l.pushBack(parseInt(a[i]));
    }

    x = Tableaux.robinsonSchensted(l);
    $("#content").html("" + x.first);
    $("#content").append("<br><br>" + x.second);

}
