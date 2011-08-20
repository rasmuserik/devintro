$(function() {
    // Change the dpi of the canvas
    //
    // 72 is default for html
    // 300/600 makes more sense when printing but eat much more memory.
    dpi = 72;
    $('#canvas').attr('width', window.innerWidth * dpi / 72)
                .attr('height', window.innerHeight * dpi / 72)
                .css('width', window.innerWidth)
                .css('height', window.innerHeight);

    // Load the script based on hash-part of url
    if(window.location.hash) {
        $('body').append('<script src="'+ window.location.hash.slice(1)+'.js"></script>');
    }
});

