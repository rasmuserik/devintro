// # Turtle graphics
//
//
turtle = (function() {

    // current position
    var x = 0,
        y = 0,

    // direction in degrees
        dir = 0,
    
    // the lines neede to be redrawn,
    // each line is two xy-coordinates in ther array
        lines = [],

    // for pushing/popping the turtle location
        history = [],

    // whether the canvas needs redrawing
        redraw = false;

    // move the turtle position based on the direction
    function mv(n) {
        if(n === undefined) n = 10;
        x += Math.cos(dir/180*Math.PI) * n;
        y += Math.sin(dir/180*Math.PI) * n;
    }

    function reset() {
        x=0;y=0;dir=0;lines=[]; history=[];requestDraw();
    }

    // schedule a redraw
    function requestDraw() {
        if(redraw) return;
        redraw = true;
        setTimeout(draw, 0);
    }

    // draw a line in the direction of the turtle
    function forward(n) {
        lines.push({x:x,y:y});
        mv(n);
        lines.push({x:x,y:y});
        requestDraw();
        return this;
    }

    // skip forward in the direction of the turtle
    function jump(n) {
        mv(n);
        return this;
    }

    // actual drawing routine, which also scale the turtle path to fit 
    // to the canvas
    function draw() {
        var canvas, ctx, xscale, yscale, minx = 0, maxx = 0, miny = 0, maxy = 0, i, j, scale;

        // find min/max values of the turtle path
        for(i=0;i<lines.length;++i) {
            minx = Math.min(minx, lines[i].x);
            maxx = Math.max(maxx, lines[i].x);
            miny = Math.min(miny, lines[i].y);
            maxy = Math.max(maxy, lines[i].y);
        }

        // initialise canvas
        canvas = document.getElementById('canvas');
        ctx = canvas.getContext("2d");
        ctx.fillStyle = 'rgb(255,255,255)';
        ctx.fillRect(0,0, canvas.width, canvas.height);
        ctx.lineWidth = dpi / 60;
        ctx.lineCap = 'round';

        // find the scaling needed to fit the image on the canvas
        scale = Math.max((maxx-minx)/canvas.width, (maxy-miny)/canvas.height);
        scale = scale && 1/scale;
        // margin
        scale *= .98
        minx *= scale;
        miny *= scale;
        maxy *= scale;
        maxx *= scale;

        minx -= canvas.width/2 - (maxx-minx)/2;
        miny -= canvas.height/2 - (maxy-miny)/2;

        
        // function for scaling and then drawing a turtle path segment
        function line(x0, y0, x1, y1) {
            x0 = x0 * scale - minx;
            x1 = x1 * scale - minx;
            y0 = y0 * scale - miny;
            y1 = y1 * scale - miny;
            ctx.fillStyle = 'rgb(0,0,0)';
            ctx.moveTo(x0,y0);
            ctx.lineTo(x1,y1);
        }

        // do the actual drawing
        ctx.beginPath();
        for(i=0;i<lines.length;i+=2) {
            line(lines[i].x,lines[i].y, lines[i+1].x, lines[i+1].y);
        }
        ctx.stroke();

        // finished redrawing
        redraw = false;
    }

    // ensure that the direction is between 0 and 360 degrees
    function normdir() {
        dir %= 360;
        if(dir < 0) dir += 360;
    }

    function left(n) {
        if(n === undefined) n = 90;
        dir -= n;
        normdir();
        return this;
    }

    function right(n) {
        if(n === undefined) n = 90;
        dir += n;
        normdir();
        return this;
    }

    function rememberPosition() {
        history.push({x:x,y:y,dir:dir});
        return this;
    }

    function restorePosition() {
        var t = history.pop();
        if(t) { x = t.x; y = t.y; dir = t.dir }
        return this;
    }

    return {
        reset: reset,
        forward: forward,
        jump: jump,
        left: left,
        right: right,
        rememberPosition: rememberPosition,
        restorePosition: restorePosition
    }
})();
