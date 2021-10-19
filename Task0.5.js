function areaOfTriangle(x, y, z){
    var s = 0.5*(x+y+z);
    var sides = s*((s - x)*(s - y)*(s - z));
    area = Math.sqrt(sides);
    return area;
}

areaOfTriangle(3,4,5);