document.addEventListener("DOMContentLoaded", function(event) { 
    fetch('../html/index.html')
    .then(response => response.text())
    .then(data => {
        document.body.innerHTML = data + document.body.innerHTML;
    });
});
