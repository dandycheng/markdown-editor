let converter = new showdown.Converter({simplifiedAutoLink:true})
converter.getOption({ simplifiedAutoLink: true })
$('#editor').keyup(function () {
    $('#output').html(converter.makeHtml($(this).val()))
})