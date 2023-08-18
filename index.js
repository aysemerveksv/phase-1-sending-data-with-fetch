// Add your code here
function submitData(userName, userEmail) {
  const formData = {
    name: userName,
    email: userEmail
  };

  const configurationObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify(formData)
  };

  return fetch("http://localhost:3000/users", configurationObject)
    .then(response => response.json())
    .then(data => {
      // Append the new id to the DOM
      const idElement = document.createElement("p");
      idElement.textContent = data.id;
      document.body.appendChild(idElement);
    })
    .catch(error => {
      // Display error message on the DOM
      const errorElement = document.createElement("p");
      errorElement.textContent = error.message;
      document.body.appendChild(errorElement);
    });
}

// Call the submitData function
submitData("John Doe", "john@example.com");