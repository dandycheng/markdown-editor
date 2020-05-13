let converter = new showdown.Converter({ simplifiedAutoLink: true })

converter.getOption({ simplifiedAutoLink: true })
$('#editor').keyup(function () {
    $('#output').html(converter.makeHtml($(this).val()))
})


window.html2canvas = html2canvas
let pdf = new jsPDF()
let pdfOptions = {
    filename:'test.pdf',
    margin:10
}


$('#export').click(async function () {
    html2pdf($('#output').html(),pdfOptions)
})