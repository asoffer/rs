function Tableaux(){
    this.t = new List();

    this.size = 0;
}

Tableaux.prototype = {
    toString: function(){
        if(this.size == 0)
            return "[]";

        str = "";

        var ptr = this.t.head.next;
        while(ptr != this.t.head){
            var ptr2 = ptr.data.head.next;
            while(ptr2 != ptr.data.head){
                str += ptr2.data + " ";

                ptr2 = ptr2.next;
            }

            str += "<br>\n";

            ptr = ptr.next;
        }

        return str;
    },

    // no checking done at all. only works if all numbers are unique
    insert: function(n, row){

        if(row === undefined)
            var row = this.t.head.next;

        if(row == this.t.head){
            this.t.pushBack(new List());
            row = this.t.head.prev;
        }

        var ptr = row.data.head.next;
        while(ptr != row.data.head){
            if(ptr.data > n){
                var k = ptr.data;
                ptr.data = n;
                this.insert(k, row.next);
                return;
            }

            ptr = ptr.next;
        }

        row.data.pushBack(n);

        ++this.size;
    },

    //assume that the shapes are close enough to make it work
    place: function(n, t){
        var ptr = t.t.head.next;
        var ptr2 = this.t.head.next;

        while(ptr2 != this.t.head){
            if(ptr.data.size != ptr2.data.size){
                ptr2.data.pushBack(n);
                ++this.size;
                return;
            }

            ptr = ptr.next;
            ptr2 = ptr2.next;
        }

        this.t.pushBack(new List());

        this.t.last().pushBack(n);
        ++this.size;
    },
};

Tableaux.robinsonSchensted = function(perm){
    var p = new Tableaux();
    var q = new Tableaux();

    var i = 1;

    var ptr = perm.head.next;

    while(ptr != perm.head){
        p.insert(ptr.data);
        q.place(i, p);

        ptr = ptr.next;
        ++i;
    }

    return {first: p, second: q};
}

