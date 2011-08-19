turtle = (function() {

    var x = 0,
        y = 0,
        dir = 0,
        lines = [],
        history = [],
        currentPath,
        redraw = false,
        count = 0, 
        drawtime = 0;

    function mv(n) {
        x += Math.cos(dir/180*Math.PI) * n;
        y += Math.sin(dir/180*Math.PI) * n;
    }

    function redraw() {
        ++count;
        if(count > lines / 3) {
            draw();
            count = 0;
        }
    }
    function requestDraw() {
        if(redraw) return;
        redraw = true;
        setTimeout(draw, 0);
    }

    function forward(n) {
        n = n || 10;
        lines.push({x:x,y:y});
        mv(n);
        lines.push({x:x,y:y});
        requestDraw();
        return this;
    }

    function jump(n) {
        mv(n);
        return this;
    }
    function draw() {
        var canvas, ctx, minx = 0, maxx = 0, miny = 0, maxy = 0, i, j, scale;

        for(i=0;i<lines.length;++i) {
            minx = Math.min(minx, lines[i].x);
            maxx = Math.max(maxx, lines[i].x);
            miny = Math.min(miny, lines[i].y);
            maxy = Math.max(maxy, lines[i].y);
        }

        canvas = document.getElementById('canvas');
        ctx = canvas.getContext("2d");
        ctx.fillStyle = 'rgb(255,255,255)';
        ctx.fillRect(0,0, canvas.width, canvas.height);

        scale = Math.max((maxx-minx)/canvas.width, (maxy-miny)/canvas.height);
        scale = scale && 1/scale;
        scale *= .98
        minx *= scale;
        miny *= scale;
        minx -= canvas.width *.01
        miny -= canvas.height * .01

        
        function line(x0, y0, x1, y1) {
            x0 = x0 * scale - minx;
            x1 = x1 * scale - minx;
            y0 = y0 * scale - miny;
            y1 = y1 * scale - miny;
            ctx.fillStyle = 'rgb(0,0,0)';
            ctx.moveTo(x0,y0);
            ctx.lineTo(x1,y1);
        }

        ctx.beginPath();
        ctx.lineWidth = canvas.width / 1000;
        ctx.lineCap = 'round';
        for(i=0;i<lines.length;i+=2) {
            line(lines[i].x,lines[i].y, lines[i+1].x, lines[i+1].y);
        }
        ctx.stroke();
        redraw = false;
    }
    function normdir() {
        dir %= 360;
        if(dir < 0) dir += 360;
    }
    function left(n) {
        n = n || 90;
        dir -= n;
        normdir();
        return this;
    }
    function right(n) {
        n = n || 90;
        dir += n;
        normdir();
        return this;
    }
    function rememberPosition() {
        history.push({x:x,y:y});
        return this;
    }
    function restorePosition() {
        var t = history.pop;
        if(t) { x = t.x; y = t.y; }
        return this;
    }
    return {
        forward: forward,
        jump: jump,
        left: left,
        right: right,
        rememberPosition: rememberPosition,
        restorePosition: restorePosition
    }
})();
