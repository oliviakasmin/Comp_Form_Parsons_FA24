

translate([0, 0, 20])color("darkgrey") union() {
  translate([0, 0, 10]) resize(newsize=[60,60,30]) sphere(r=20);
   resize(newsize=[120,60,20]) sphere(r=20);  
}

color([0.8, 1.0, 0.3, 0.7]) translate([0, 0, 15]) rotate([0, 180, 0]) cylinder(75, 5, 25);


color("black") translate([0, 0, -64]) 
union () {
    sphere(r=2);
    
    translate([0, 0, -6])linear_extrude(height = 10, center = true, convexity = 50, twist = 0)
    circle(r = 0.5);
    
    translate([-2, 0, -6]) rotate([0, 110, 0])
    linear_extrude(height = 4, center = true, convexity = 50, twist = 0)
    circle(r = 0.5);
    
    translate([2, 0, -6]) rotate([0, 70, 0])
    linear_extrude(height = 4, center = true, convexity = 50, twist = 0)
    circle(r = 0.5);
    
    translate([1, 0, -13]) rotate([0, 160, 0])
    linear_extrude(height = 6, center = true, convexity = 50, twist = 0)
    circle(r = 0.5);
    
    translate([-1, 0, -13]) rotate([0, 20, 0])
    linear_extrude(height = 6, center = true, convexity = 50, twist = 0)
    circle(r = 0.5);
}


color("black") translate([14, 0, -78]) rotate([0, -20, 0])
union () {
    sphere(r=2);
    
    translate([0, 0, -6])linear_extrude(height = 10, center = true, convexity = 50, twist = 0)
    circle(r = 0.5);
    
    translate([-2, 0, -6]) rotate([0, 110, 0])
    linear_extrude(height = 4, center = true, convexity = 50, twist = 0)
    circle(r = 0.5);
    
    translate([2, 0, -6]) rotate([0, 70, 0])
    linear_extrude(height = 4, center = true, convexity = 50, twist = 0)
    circle(r = 0.5);
    
    translate([1, 0, -13]) rotate([0, 160, 0])
    linear_extrude(height = 6, center = true, convexity = 50, twist = 0)
    circle(r = 0.5);
    
    translate([-1, 0, -13]) rotate([0, 20, 0])
    linear_extrude(height = 6, center = true, convexity = 50, twist = 0)
    circle(r = 0.5);
}

color("black") translate([-12, 0, -86]) rotate([0, 30, 0])
union () {
    sphere(r=2);
    
    translate([0, 0, -6])linear_extrude(height = 10, center = true, convexity = 50, twist = 0)
    circle(r = 0.5);
    
    translate([-2, 0, -6]) rotate([0, 110, 0])
    linear_extrude(height = 4, center = true, convexity = 50, twist = 0)
    circle(r = 0.5);
    
    translate([2, 0, -6]) rotate([0, 70, 0])
    linear_extrude(height = 4, center = true, convexity = 50, twist = 0)
    circle(r = 0.5);
    
    translate([1, 0, -13]) rotate([0, 160, 0])
    linear_extrude(height = 6, center = true, convexity = 50, twist = 0)
    circle(r = 0.5);
    
    translate([-1, 0, -13]) rotate([0, 20, 0])
    linear_extrude(height = 6, center = true, convexity = 50, twist = 0)
    circle(r = 0.5);
}




translate([40,0,35]){
    union() {
       color("green") hull(){
       cylinder(6,0,4);
       translate([0,0,6])sphere(4);
       translate([0,0,2]) sphere(2);   
       }
       
      color("green") translate([-2, 0, -2]) rotate([0, 60, 0])
    linear_extrude(height = 4, center = true, convexity = 50, twist = 0)
    circle(r = 1);
             color("green") translate([2, 0, -2]) rotate([0, 60, 0])
    linear_extrude(height = 4, center = true, convexity = 50, twist = 0)
    circle(r = 1);
       
       color("green") translate([0,0,-9.5])cylinder(10,3,1);
       color("black") translate([-1.5,3,6]) sphere(2);
       color("black") translate([1.5,3,6]) sphere(2);
    }    
}
