function koch(n) {
    if(n < 1) {
        turtle.forward()
    } else {
        koch(n-1);
        turtle.left(60);
        koch(n-1);
        turtle.right(120);
        koch(n-1);
        turtle.left(60);
        koch(n-1);
   }
}
koch(6);
