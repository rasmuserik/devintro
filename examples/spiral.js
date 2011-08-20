function spiral(v, length) {
    if(length > 0) {
        turtle.forward(length);
        turtle.left(v);
        spiral(v, length - 1);
    }
}
