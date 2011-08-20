function spiro(dv, n) {
    var v = 0;
    while(n > 0) {
        turtle.right(v);
        turtle.forward();
        v = v + dv;
        n = n - 1;
}   }
