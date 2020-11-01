function isTouching(argument1, argument2) {
    bulletRightEdge = argument1.x + argument1.width;
    wallLeftEdge = argument2.x;
    if (bulletRightEdge >= wallLeftEdge) {
        return true;
    } else {
        return false;
    }
}