outer_radius = 10;
outer_height = 20;

inner_radius = outer_radius * 7/8;
inner_height = outer_height * 7/8;
    


for (i = [0:90:360]) {

 rotate([0,0,i]) translate([25,0,0])
 
 union() {

    difference() {
        
       union() {
        cylinder(h = outer_height, r = outer_radius, r2 = outer_radius, $fn=100, center = true);
        translate([0, 0, outer_height/2]) sphere(r=outer_radius, $fn=100); 
       } 
       
      translate([0, 0, -2]) color("lightblue") union() {
        cylinder(h = inner_height, r = inner_radius, r2 = inner_radius, $fn=100, center = true);
        translate([0, 0, inner_height/2]) sphere(r=inner_radius, $fn=100); 
       } 

         translate([0, 0, -2]) cube(size = [5,20,18], center = true); 
         translate([0, 0, -2]) cube(size = [20,5,18], center = true); 
    }

    color("blue") translate([0, 0, outer_height + 2]) sphere(r=2, $fn=100);
    color("green") translate([0, 0, outer_height + 5]) sphere(r=1, $fn=100);
} 


}



big_outer_radius = 15;
big_outer_height = 30;

big_inner_radius = big_outer_radius * 7/8;
big_inner_height = big_outer_height * 7/8;

translate([0, 0, 5])  union() {

    difference() {
        
       union() {
        cylinder(h = big_outer_height, r = big_outer_radius, r2 = big_outer_radius, $fn=100, center = true);
        translate([0, 0, big_outer_height/2]) sphere(r=big_outer_radius, $fn=100); 
       } 
       
      translate([0, 0, -2]) color("lightblue") union() {
        cylinder(h = big_inner_height, r = big_inner_radius, r2 = big_inner_radius, $fn=100, center = true);
        translate([0, 0, big_inner_height/2]) sphere(r=big_inner_radius, $fn=100); 
       } 

       translate([0, 0, -7]) cube(size = [5,30,18], center = true); 
       translate([0, 0, -7]) cube(size = [30,5,18], center = true); 
    }

    color("blue") translate([0, 0, big_outer_height + 2]) sphere(r=2, $fn=100);
    color("green") translate([0, 0, big_outer_height + 5]) sphere(r=1, $fn=100);
}

