$(function() {
    var canvas = document.getElementById('canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    console.log(window.location.hash);
    if(window.location.hash) {
        $('body').append('<script src="'+ window.location.hash.slice(1)+'.js"></script>');
    }
});

