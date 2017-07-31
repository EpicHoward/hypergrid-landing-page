$(document).ready(function() {
    console.log("ready!");




});

function copyToClipboard(element) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();

    $("#click").click(function() {
        alert("Copied to the clipboard");
    });

}
