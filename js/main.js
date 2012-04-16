$(document).ready(function(){
/*
    tab = new Tableaux();
    ta2 = new Tableaux();

    tab.insert(4);
    ta2.place(1, tab);

    tab.insert(2);
    ta2.place(2, tab);

    tab.insert(3);
    ta2.place(3, tab);

    tab.insert(6);
    ta2.place(4, tab);

    tab.insert(5);
    ta2.place(5, tab);

    tab.insert(1);
    ta2.place(6, tab);

    tab.insert(7);
    ta2.place(7, tab);

    $("#content").html(""+tab);
    $("#content").append("<br><br>"+ta2);
*/
    var l = new List();
    l.pushBack(4);
    l.pushBack(2);
    l.pushBack(3);
    l.pushBack(6);
    l.pushBack(5);
    l.pushBack(1);
    l.pushBack(7);

    var x = Tableaux.robinsonSchensted(l);
    console.log(x);
    $("#content").html("" + x.first);
    $("#content").append("<br><br>" + x.second);
});
