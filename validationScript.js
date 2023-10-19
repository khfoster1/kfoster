document.addEventListener("DOMContentLoaded", function() {
  // Retrieve the input field element
  const inputField = document.getElementById("inputField");

  // Add an event listener to the form for submit
  document.getElementById("myForm").addEventListener("submit", function(event) {
    // Retrieve the input field value
    const inputValue = inputField.value;

    // Regular expression pattern for alphanumeric input
    const alphanumericPattern = /^[a-zA-Z0-9]+$/;

    // Check if the input value matches the pattern
    if (!alphanumericPattern.test(inputValue)) {
      // Invalid input: display error message
      alert("Please enter only alphanumeric characters.");
      // Prevent the form from submitting
      event.preventDefault();
    } else {
      // Valid input: display confirmation (you can customize this message)
      alert("Form submitted successfully.");
      // In a real environment, you'd submit the form here
    }
  });
});
