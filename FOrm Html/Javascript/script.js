document.getElementById('userForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission


        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        // Here you can handle the form data as needed

      const responseMessage = `Thank you, ${name}. Your message has been received!`;
    
    document.getElementById('responseMessage').innerText = responseMessage;

    // Optionally, you can clear the form fields
    this.reset();

});

