// Validate ZipCode
export function isValidZip(zip) {
    return /^\d{5}(-\d{4})?$/.test(zip)
}

// Display Alert Message
export function showAlert(message, className) {
    // Create div
    const div = document.createElement('div');
    // Add Classes
    div.className = `alert alert-${className}`;
    // Add Text
    div.appendChild(document.createTextNode(message));
    //  Get Container
    const container = document.querySelector('.container');
    // Get Form
    const form = document.querySelector('#pet-form');
    // Insert Alert
    container.insertBefore(div, form);
    // Remove After 3 Seconds
    setTimeout(() => document.querySelector('.alert').remove(), 3000);
}