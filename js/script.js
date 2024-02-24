document.addEventListener('DOMContentLoaded', function () {
  // Get the signup button and signup form
  const signupBtn = document.getElementById('signupBtn');
  const signupForm = document.getElementById('signupForm');

  // Add click event listener to the signup button
  signupBtn.addEventListener('click', () => {
    // Show the signup form
    signupForm.classList.remove('hidden');
  });

  // Get the back to login button
  const backToLoginBtn = document.getElementById('backToLoginBtn');

  // Add click event listener to the back to login button
  backToLoginBtn.addEventListener('click', () => {
    // Hide the signup form
    signupForm.classList.add('hidden');
  });
});

document.addEventListener("DOMContentLoaded", function() {
        // Check if the navigation bar should be hidden
        var hideNavbar = sessionStorage.getItem("hideNavbar");

        // If the navigation bar should be hidden, hide it
        if (hideNavbar === "true") {
            document.getElementById("navbar").style.display = "none";
        }

        // Get all the anchor tags inside the navigation bar
        var navLinks = document.querySelectorAll("#navbar a");

        // Add click event listeners to all the anchor tags
        navLinks.forEach(function(link) {
            link.addEventListener("click", function(event) {
                // Prevent the default action of the link
                event.preventDefault();
                // Hide the navigation bar
                document.getElementById("navbar").style.display = "none";
                // Store the information that the navigation bar should be hidden
                sessionStorage.setItem("hideNavbar", "true");
                // Redirect to the clicked link's href
                window.location.href = link.getAttribute("href");
            });
        });
    });
