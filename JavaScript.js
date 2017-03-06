function showImg() {
    var x = document.createElement("IMG");
    x.setAttribute("id", "myImage");
    x.setAttribute("src", "http://lorempixel.com/400/250/");
    x.setAttribute("width", "500");
    x.setAttribute("alt", "The Pulpita Rock");
    document.body.appendChild(x);
}

function removeImg() {
	var d = document.getElementById("myImage").remove();;
}