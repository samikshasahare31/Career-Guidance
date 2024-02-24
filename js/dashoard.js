document.addEventListener("DOMContentLoaded", function(event) { 
    fetch('../html/DashBoard.html')
    .then(response => response.text())
    .then(data => {
    console.log("🚀 ~ document.addEventListener ~ data:", data)

        document.body.innerHTML = data + document.body.innerHTML;
    });
});
