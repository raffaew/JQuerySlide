$(function() {
    $('#opt1').click(function() {
        $('#img1').show();
        $('#img2').hide();
        $('#img3').hide();
        $('#img4').hide();
    })

    $('#opt2').click(function() {
        $('#img1').hide();
        $('#img2').show();
        $('#img3').hide();
        $('#img4').hide();
    })
    
    $('#opt3').click(function() {
        $('#img1').hide();
        $('#img2').hide();
        $('#img3').show();
        $('#img4').hide();
    })
    
    $('#opt4').click(function() {
        $('#img1').hide();
        $('#img2').hide();
        $('#img3').hide();
        $('#img4').show();
    })
    
})