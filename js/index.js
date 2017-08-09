// LJ65rWLwNBmsh2H8Mz5SsnRBPdvcp1x2aevjsnYMAnsO9YSz9J
function getQuote(type) {
$.ajax({
    url: 'https://andruxnet-random-famous-quotes.p.mashape.com/',
    type: 'GET',
    data: {
      "cat": type,
      
    },
    dataType: 'json',
    success: function(data) {
      $('.quote h4').text(data.quote);
      $('.author').text(data.author);
      $('.twitter-share-button').attr('href','https://twitter.com/intent/tweet?text="'+data.quote+'" - '+data.author).text('Tweet this quote');
    },
    error: function(err) { alert(err); },
    beforeSend: function(xhr) {
    xhr.setRequestHeader("X-Mashape-Authorization", "LJ65rWLwNBmsh2H8Mz5SsnRBPdvcp1x2aevjsnYMAnsO9YSz9J");
    }
});
}

$('button:')