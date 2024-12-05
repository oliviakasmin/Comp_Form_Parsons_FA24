castle_height = 100;
castle_width = castle_height + 80;

color("lightblue") cube([400,400,8], center = true);
 
color([0.5, 0.5, 0.0, 1.0]) translate([0, 0, 10]) cube([castle_width - 2, castle_width - 2, 10], center=true);

translate([0, 0, castle_height/2 + 10]) union() {
    color("grey") cylinder(castle_height + 20, 30, 30, center = true);
    color([0.92, 0.65, 0.6, 1.0]) translate([0,0,castle_height/2 + 10 + 40]) cylinder(80, 30, 0, center = true);
    
    translate([0,0,castle_height/2 + 96]) union() {
        color([0.5, 0.3, 0.1, 1.0]) cube([2,2,16], center=true);
        color("purple") translate([0, 6, 4]) cube([2,10,8], center=true);
    }
    
}


for (i = [0:90:360]) {
rotate([0, 0, i + 45]) translate([castle_width/2 + 40, 0, castle_height/2]) 
union(){
    color("grey") cylinder(castle_height, 20,20, center = true);
    color([0.92, 0.65, 0.6, 1.0]) translate([0,0,castle_height/2 + 20]) cylinder(40, 20, 0, center = true);
    
        translate([0,0,castle_height - 4]) union() {
        color([0.5, 0.3, 0.1, 1.0]) cube([2,2,16], center=true);
        color("purple") translate([0, 6, 4]) cube([2,10,8], center=true);
    }
    
    
    
 }


 
} 

color("grey") for (i = [0:90:360]) {
rotate([0, 0, i]) translate([castle_width/2, - castle_width/2, castle_height/2]) 
    union(){
        for(i=[0: castle_width/8: castle_width/2]) {
            translate([0, i * 2, 0]) cube([15, castle_width/8, castle_height], center=true);
        }
         for(i=[castle_width/8: castle_width/8: castle_width]) {
            translate([0, i, -8]) cube([15, castle_width/8, castle_height - 16], center=true);
        }
       } 
} 


color([0.5, 0.3, 0.1, 1.0]) translate([castle_width/2, 0, 35]) cube([16, 30, 40], center=true);

color("grey") translate([150, 0, 15]) cube([110, 30, 6], center=true);

translate([194, -20, castle_height/4 + 4]) union(){
    color("grey") cylinder(castle_height/2, 8,8, center = true);
    color([0.92, 0.65, 0.6, 1.0]) translate([0,0,castle_height/4 + 15/2]) cylinder(15, 8, 0, center = true);
}

translate([194, 20, castle_height/4 + 4]) union(){
    color("grey") cylinder(castle_height/2, 8,8, center = true);
    color([0.92, 0.65, 0.6, 1.0]) translate([0,0,castle_height/4 + 15/2]) cylinder(15, 8, 0, center = true);
}