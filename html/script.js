$(document).ready(function() {
    console.log("ready!");

    $('.copy-btn').click(function() {
        var btnId = $(this).attr('id')
        alert('coped to the clipboard')
    })

});

function copyToClipboard(element) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();







}
