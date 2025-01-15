$(document).ready(function() {
    $('#generateBtn').click(function() {
        const inputText = $('#inputText').val();
        $('#qrcode').empty(); // Clear previous QR code

        if (inputText) {
            // Generate QR code
            $('#qrcode').qrcode({
                text: inputText,
                width: 200,
                height: 200
            });
        } else {
            alert('Please enter a URL or text to generate a QR code.');
        }
    });
});