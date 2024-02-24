document.addEventListener("DOMContentLoaded", function(event) { 
    fetch('../html/Carrer.html')
    .then(response => response.text())
    .then(data => {
        document.body.innerHTML = data + document.body.innerHTML;
    });
});
