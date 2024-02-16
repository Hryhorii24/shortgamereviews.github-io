// Get the template select dropdown
const templateSelect = document.getElementById('template-select');

// Listen for the 'change' event on the dropdown
templateSelect.addEventListener('change', () => {
    // Hide all templates
    const templates = document.querySelectorAll('.template');
    templates.forEach(template => template.style.display = 'none');

    // Show the selected template
    const targetId = templateSelect.value;
    const targetTemplate = document.querySelector(targetId);
    targetTemplate.style.display = 'block';
});

// Function to auto resize a textarea based on its content
function autoResize(textarea) {
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';
}

// Function to set the value of a radio button based on its parent node's text content
function setRadioValue(radio) {
    radio.value = radio.parentNode.textContent.trim();
}

// Function to copy text to the clipboard, including selected radio button values
function copyToClipboard() {
    var options = '';
    var textToCopy = document.getElementById('copyText').value.trim(); // Get the value of the element with the id 'copyText'
    if (textToCopy !== '') { // Check if the text to copy is not empty
        options += textToCopy + '\n'; // Append the text to the options string
    }
    var radios = document.querySelectorAll('input[type="radio"]:checked'); // Get all checked radio buttons
    var checkedCategories = new Set(); // Create a Set to store checked categories
    radios.forEach(function(radio) { // Iterate over each checked radio button
        var category = radio.parentNode.parentNode.querySelector('h3').textContent.trim(); // Get the text content of the nearest h3 element as the category
        if (checkedCategories.has(category)) { // Check if this category is already added
            radio.checked = false; // If so, uncheck the radio button
            return; // Exit the function
        }
        checkedCategories.add(category); // Add the category to the Set
        options += '\n' + category + '\n'; // Append the category to the options string
        options += ' ✔ ' + radio.value + '\n'; // Append the checked radio button value to the options string
    });
    navigator.clipboard.writeText(options).then(function() { // Write the options string to the clipboard
        // alert("Copied to clipboard:\n" + options); // Display an alert if copying was successful
    }, function() {
        alert("Failed to copy to clipboard. Please copy the following text manually:\n" + options); // Display an alert if copying failed
    });
}
