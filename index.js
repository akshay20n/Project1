$(document).ready(function() {
    $('#generate-joke').click(function() {
        $.ajax({
            url: 'https://icanhazdadjoke.com/',
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            },
            success: function(data) {
                $('.joke').text(data.joke);
            },
            error: function() {
                $('.joke').text('Oops! Something went wrong. Try again later.');
            }
        });
    });
});
