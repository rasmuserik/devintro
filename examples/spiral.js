function spiral(v, length) {
    if(length > 0) {
        turtle.forward(length);
        turtle.right(v);
        spiral(v, length - 1);
    }
}
