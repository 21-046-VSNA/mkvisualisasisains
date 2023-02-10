function setup() {
    //put setup code here
    createCanvas(400,400);
    background(120,24,120);

    x1 = 150;
    x2 = 100;
    x3 = 200;

    y1 = 150;
    y2 = 100;
    y3 = 200;

    lebar = 100;
    tinggi = 100;

    s = 42;
    m = 7;
    f = s-m;
    k = 0;

}

function draw() {
    //put drawing code here
    line(x1,y1,x2,y2)
    line(x3+50,y3+50,x3+100,y3+100)
    
    fill(0)
    rect(x1,y1,lebar,tinggi)
    
    
    fill(0,0,200)
    ellipse(x3,y3,tinggi,lebar)
    
    fill(200,150,200)
    arc(x1-100,y1,lebar,tinggi,0,2*PI*m/f)

    stokeweight(2);
    stroke(200)
    for (var j=10; j<=29; j++){
        xs = j
        ys = 10+ 29 * Math.sin(PI/10)
        Point(xs,ys)
    }
}