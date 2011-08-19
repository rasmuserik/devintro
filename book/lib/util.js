function random(n) {
    if(n === undefined) {
        return Math.random();
    } else {
        return 0|Math.random()*n;
    }
}
