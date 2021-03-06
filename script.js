const user_list = [
    "UserA",
    "UserB",
    "UserC",
    "UserD"
];



var db = [
    {
        id: 1,
        title: "Book1",
        author: "author1",
        lender: "UserC",
        borrower: "UserB",
        action: ""
  },
    {
        id: 2,
        title: "Book2",
        author: "author2",
        lender: "UserC",
        borrower: "",
        action: ""
  },
    {
        id: 3,
        title: "Book3",
        author: "author3",
        lender: "UserD",
        borrower: "UserC",
        action: ""
  },
    {
        id: 4,
        title: "Book4",
        author: "author4",
        lender: "UserA",
        borrower: "",
        action: ""
  },
    {
        id: 5,
        title: "Book5",
        author: "author5",
        lender: "UserA",
        borrower: "",
        action: ""
    },
    {
        id: 6,
        title: "Book6",
        author: "author6",
        lender: "UserB",
        borrower: "UserA",
        action: ""
  }

];

var table = document.getElementById("info-table");
for (var i = 0; i < db.length; i++) {
    var row = table.insertRow();
    var id = row.insertCell(0);
    var title = row.insertCell(1);
    var author = row.insertCell(2);
    var lender = row.insertCell(3);
    var borrower = row.insertCell(4);
    var action = row.insertCell(5);
    id.innerHTML = db[i].id;
    title.innerHTML = db[i].title;
    author.innerHTML = db[i].author;
    lender.innerHTML = db[i].lender;
    borrower.innerHTML = db[i].borrower;
    action.innerHTML = db[i].action;
}


function log_in(user) {
    var i=0;
    for (i= 1; i < db.length; i++) {
        let row=table.rows[i];
        if (db[i].lender !== user && db[i].borrower === "") {
            
            row.cells[5].innerHTML='<button onClick="borrowBook()">Borrow</button>';
        } else if (db[i].borrower === user) {
            row.cells[5].innerHTML='<button onClick="returnBook()">Return</button>';
        }
        

    }
    
    var new_row=table.insertRow();
    var id = new_row.insertCell(0);
    var title = new_row.insertCell(1);
    var author = new_row.insertCell(2);
    var lender = new_row.insertCell(3);
    var borrower = new_row.insertCell(4);
    var action = new_row.insertCell(5);
    id.innerHTML = i+1;
    title.innerHTML = '<input type="text" placeholder="Enter title">';
    author.innerHTML = '<input type="text" placeholder="Enter author">';
    lender.innerHTML = user;
    borrower.innerHTML = "";
    action.innerHTML = '<button onClick="addBook()">Add</button>'; 
}

function logged_in_user() {
    for (var i = 1; i < db.length; i++) {
        let row=table.rows[i];
    row.cells[5].innerHTML="";
}
    var a = document.getElementById("sub").value;
    console.log(a)
    for (var i = 0; i < user_list.length; i++) {
        if (user_list[i] === a) {
            log_in(a);
        }
    }

}
