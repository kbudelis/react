function myFunction(e) {
    x = e.clientX;
    y = e.clientY;
    coor = "Coordinates: (" + x + "," + y + ")";
    document.getElementById("test").innerHTML = coor
}

function clearCoor() {
    document.getElementById("test").innerHTML = "";
}
