document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Getting form values
    var formData = new FormData(document.getElementById('myForm'));
    var foodChoices = [];
    formData.getAll('food').forEach(function(choice) {
        foodChoices.push(choice);
    });

    // Creating table row
    var newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${formData.get('fname')}</td>
        <td>${formData.get('lname')}</td>
        <td>${formData.get('address')}</td>
        <td>${formData.get('pincode')}</td>
        <td>${formData.get('gender')}</td>
        <td>${foodChoices.join(', ')}</td>
        <td>${formData.get('state')}</td>
        <td>${formData.get('country')}</td>
    `;

    // Appending row to table
    document.querySelector('#dataTable tbody').appendChild(newRow);

    // Clearing form fields
    document.getElementById('myForm').reset();
});




