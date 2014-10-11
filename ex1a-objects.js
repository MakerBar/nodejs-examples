#! /usr/bin/env nodejs

var book_list = [
    "Wuthering Heights",
    "A Tale of Two Cities",
    "Great Expectations",
    "Les Misérables"
]
console.log(book_list);
console.log();

var victor_hugo = {
    name: "Victor Hugo",
    born: "18020226",
    died: "18850522"
}

var authors = {
    hugo: {
	name: "Victor Hugo",
	born: new Date("1802-02-26"),
	died: new Date("1885-05-22"),
	books: [
	    "Les Misérables",
	    "The Hunchback of Notre-Dame"
	]
    },
    dickens: {
	name: "Charles Dickens",
	born: new Date("1812-02-07"),
	died: new Date("1870-06-09"),
	books: [
	    "A Tale of Two Cities",
	    "Greate Expectations"
	]
    }
};
Object.keys(authors).forEach(function(author) {
    console.log(author);
    console.log(authors[author].books[0]);
    console.log();
});

var Phone = function() {
    this.number = parseInt(Math.random()*10000000),
    this.carrier = "Verizon"
};
Phone.prototype = {
    call: function(number) {
	console.log("Dialing " + number);
	console.log("call failed :(");
    },
    switchCarrier: function(new_carrier) {
	this.carrier = new_carrier;
    }
};

var my_phone = new Phone();
console.log("my number: " + my_phone.number);
my_phone.call("855-MakerBar");
