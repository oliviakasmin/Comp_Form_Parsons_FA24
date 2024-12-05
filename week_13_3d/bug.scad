union () {

color("lightblue") hull() {
sphere(25, $fn=50); 
translate([0, 0, 20]) sphere(20, $fn=50); 
translate([0, 0, -20]) sphere(20, $fn=50); 
}

translate([0, 0, -50]) sphere(17, $fn=50);

color("black") translate([2, 12, -52]) sphere(9, $fn=15);
color("black") translate([2, -12, -52]) sphere(9, $fn=15);


rotate([7,0,0]) translate([0, 0, -60]) linear_extrude(height = 30, center = true, convexity = 50, twist = 0)
circle(r = 1);

rotate([-7,0,0]) translate([0, 0, -60]) linear_extrude(height = 30, center = true, convexity = 50, twist = 0)
circle(r = 1);


color("lightgreen") rotate([120,0,0]) translate([0, 0, 30]) linear_extrude(height = 30, center = true, convexity = 50, twist = 0)
circle(r = 1);

color("lightgreen") rotate([-120,0,0]) translate([0, 0, 30]) linear_extrude(height = 30, center = true, convexity = 50, twist = 0)
circle(r = 1);

color("lightgreen") rotate([90,0,0]) translate([0, 0, 30]) linear_extrude(height = 30, center = true, convexity = 50, twist = 0)
circle(r = 1);
color("lightgreen") rotate([-90,0,0]) translate([0, 0, 30]) linear_extrude(height = 30, center = true, convexity = 50, twist = 0)
circle(r = 1);

color("lightgreen") rotate([30,0,0]) translate([0, 0, 30]) linear_extrude(height = 40, center = true, convexity = 50, twist = 0)
circle(r = 1);
color("lightgreen") rotate([-30,0,0]) translate([0, 0, 30]) linear_extrude(height = 40, center = true, convexity = 50, twist = 0)
circle(r = 1);

color([0.5,0.5,0,0.5]) rotate([40,0,0])  translate([-10, -40, -10]) resize(newsize=[5,60,30]) sphere(r=10);
color([0.5,0.5,0,0.5]) rotate([-40,0,0])  translate([-10, 40, -10]) resize(newsize=[5,60,30]) sphere(r=10);
}








rotate([9,10,0]) translate([30, 50, -150]) union () {

color("lightblue") hull() {
sphere(25, $fn=50); 
translate([0, 0, 20]) sphere(20, $fn=50); 
translate([0, 0, -20]) sphere(20, $fn=50); 
}

translate([0, 0, -50]) sphere(17, $fn=50);

color("black") translate([2, 12, -52]) sphere(9, $fn=15);
color("black") translate([2, -12, -52]) sphere(9, $fn=15);


rotate([7,0,0]) translate([0, 0, -60]) linear_extrude(height = 30, center = true, convexity = 50, twist = 0)
circle(r = 1);

rotate([-7,0,0]) translate([0, 0, -60]) linear_extrude(height = 30, center = true, convexity = 50, twist = 0)
circle(r = 1);


color("lightgreen") rotate([120,0,0]) translate([0, 0, 30]) linear_extrude(height = 30, center = true, convexity = 50, twist = 0)
circle(r = 1);

color("lightgreen") rotate([-120,0,0]) translate([0, 0, 30]) linear_extrude(height = 30, center = true, convexity = 50, twist = 0)
circle(r = 1);

color("lightgreen") rotate([90,0,0]) translate([0, 0, 30]) linear_extrude(height = 30, center = true, convexity = 50, twist = 0)
circle(r = 1);
color("lightgreen") rotate([-90,0,0]) translate([0, 0, 30]) linear_extrude(height = 30, center = true, convexity = 50, twist = 0)
circle(r = 1);

color("lightgreen") rotate([30,0,0]) translate([0, 0, 30]) linear_extrude(height = 40, center = true, convexity = 50, twist = 0)
circle(r = 1);
color("lightgreen") rotate([-30,0,0]) translate([0, 0, 30]) linear_extrude(height = 40, center = true, convexity = 50, twist = 0)
circle(r = 1);

color([0.5,0.5,0,0.5]) rotate([20,-10,0])  translate([-10, -40, -10]) resize(newsize=[5,60,30]) sphere(r=10);
color([0.5,0.5,0,0.5]) rotate([-20,-10,0])  translate([-10, 40, -10]) resize(newsize=[5,60,30]) sphere(r=10);
}







rotate([-7,0,0]) translate([60, -70, -100]) union () {

color("lightblue") hull() {
sphere(25, $fn=50); 
translate([0, 0, 20]) sphere(20, $fn=50); 
translate([0, 0, -20]) sphere(20, $fn=50); 
}

translate([0, 0, -50]) sphere(17, $fn=50);

color("black") translate([2, 12, -52]) sphere(9, $fn=15);
color("black") translate([2, -12, -52]) sphere(9, $fn=15);


rotate([7,0,0]) translate([0, 0, -60]) linear_extrude(height = 30, center = true, convexity = 50, twist = 0)
circle(r = 1);

rotate([-7,0,0]) translate([0, 0, -60]) linear_extrude(height = 30, center = true, convexity = 50, twist = 0)
circle(r = 1);


color("lightgreen") rotate([120,0,0]) translate([0, 0, 30]) linear_extrude(height = 30, center = true, convexity = 50, twist = 0)
circle(r = 1);

color("lightgreen") rotate([-120,0,0]) translate([0, 0, 30]) linear_extrude(height = 30, center = true, convexity = 50, twist = 0)
circle(r = 1);

color("lightgreen") rotate([90,0,0]) translate([0, 0, 30]) linear_extrude(height = 30, center = true, convexity = 50, twist = 0)
circle(r = 1);
color("lightgreen") rotate([-90,0,0]) translate([0, 0, 30]) linear_extrude(height = 30, center = true, convexity = 50, twist = 0)
circle(r = 1);

color("lightgreen") rotate([30,0,0]) translate([0, 0, 30]) linear_extrude(height = 40, center = true, convexity = 50, twist = 0)
circle(r = 1);
color("lightgreen") rotate([-30,0,0]) translate([0, 0, 30]) linear_extrude(height = 40, center = true, convexity = 50, twist = 0)
circle(r = 1);

color([0.5,0.5,0,0.5]) rotate([10,-10,0])  translate([-10, -40, -10]) resize(newsize=[5,60,30]) sphere(r=10);
color([0.5,0.5,0,0.5]) rotate([-10,-10,0])  translate([-10, 40, -10]) resize(newsize=[5,60,30]) sphere(r=10);
}