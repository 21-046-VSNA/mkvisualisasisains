function setup(){
    ///put setup code here
createCanvas(600,200)
background(248,248,255)
x1 = x2 = 60;
x3 = 0;
y1 = 80;
y2 = 200;
y3 = 0;
rectweight = 50; 
rectheight = 80;



}


function draw(){
    ///put drawing code here

    line(x1,y1,x2,y2)
    line(2*x1,y1,2*x2,y2)
    line(3*x1,y1,3*x2,y2)
    line(4*x1,y1,4*x2,y2)
    line(5*x1,y1,5*x2,y2)
    line(6*x1,y1,6*x2,y2)
    line(7*x1,y1,7*x2,y2)
    line(8*x1,y1,8*x2,y2)
    line(9*x1,y1,9*x2,y2)
    fill(0,0,0);
    strokeCap(ROUND);
    rect(x3,y3,rectweight,rectheight)
    rect(55+x3,y3,rectweight,rectheight)
    rect(2*55+x3,y3,rectweight,rectheight)
    rect(3*55+x3,y3,rectweight,rectheight)
    rect(4*55+x3,y3,rectweight,rectheight)
    rect(5*55+x3,y3,rectweight,rectheight)
    rect(6*55+x3,y3,rectweight,rectheight)
    rect(7*55+x3,y3,rectweight,rectheight)
    rect(8*55+x3,y3,rectweight,rectheight)
    rect(9*55+x3,y3,rectweight,rectheight)
    rect(10*55+x3,y3,rectweight,rectheight)
    fill(0,0,0);
    strokeweight(2);
    ellipse(x2-10,y2-50,rectwieght/5,rectheight/5)


}