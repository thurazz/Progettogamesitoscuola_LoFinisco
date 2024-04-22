//script del login da inserire in index
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission
    const formData = new FormData(this); // Get form data
    const xhr = new XMLHttpRequest(); // Create XMLHttpRequest object
    xhr.open("POST", "login.php", true); // Specify the POST method and the PHP script to handle the form data
    xhr.onload = function() 
    {
        if (xhr.status === 200) 
        {
            // Success: redirect or display success message
            console.log('Login successful');
            window.location.href = "dashboard.php"; // Redirect to dashboard page
        } 
        else 
        {
            // Error: handle accordingly
            console.error('Error:', xhr.statusText);
        }
    };
    xhr.send(formData); // Send the form data
});