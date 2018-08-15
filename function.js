function MySearchSchools() {

    var input, filter, table, tr, td, i;
    input = document.getElementById("MySearch");
    filter = input.value.toUpperCase();
    table = document.getElementById("MyTable");
    tr = table.getElementsByTagName('tr');

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        // 0 selects which table column to be searched, here column school_name, if you select 1 , then rate column.
        if (td)
        {
            if (td.innerHTML.toUpperCase().indexOf(filter) > -1) { // Show the related ones
                tr[i].style.display = "";
            } else { // Hide the non-related ones
                tr[i].style.display = "none";
            }
        }
        
    }

}

function ValidateInputs() {

    x = document.getElementById("Name").value; // you need value to get the input as otherwise it will return HTML DOM Object

    if (x == "" || x == null) {

        

    }

    y = document.getElementById("Age").value;

    if (y == "" || isNaN(y)) {
        alert("Age must be filled");
        return false;
    }
    else if (y < 10 || y > 45) {
        alert("Age must between 10 and 45");
        return false;
    }
}