let converter = new showdown.Converter({ simplifiedAutoLink: true })

converter.getOption({ simplifiedAutoLink: true })
$('#editor').keyup(function () {
    $('#output').html(converter.makeHtml($(this).val()))
})


let pdf = new jsPDF()

$('#export').click(async function () {
    html2pdf($('#output').html(), {
        filename: $('#filename').val() || 'markdown',
        margin: 10
    })
})