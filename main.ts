//% color="#538a74"
namespace projection {
    let focal_len: number;
    let vertices = [];

    //% block
    export function setFocalLength(focal_length: number) {
        focal_len = focal_length;
    }

    //% block
    export function screenCoordinateX(x: number, z: number): number {
        let screen_x = ((x+80) / z) * focal_len;
        return screen_x;
    }

    //% block
    export function screenCoordinateY(y: number, z: number): number {
        let screen_y = ((y+60) / z) * focal_len;
        return screen_y;
    }
    
    //% block="draw $c 3D line on $surface at $x1 $y1 $z1 $x2 $y2 $z2"
    //% surface.shadow="speedPicker"
    export function line_3d(surface: Image, x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, c: number) {
        let sx1 = screenCoordinateX(x1, z1);
        let sy1 = screenCoordinateY(y1, z1);
        let sx2 = screenCoordinateX(x2, z2);
        let sy2 = screenCoordinateY(y2, z2);
        surface.drawLine(sx1, sy1, sx2, sy2, c);
    }

    //% block="draw $c plane on $surface at $x $y $z with $width $height"
    //% surface.shadow="speedPicker"
    export function plane(surface: Image, x: number, y: number, z: number, width: number, height: number, c: number) {
        line_3d(surface, x, y, z, x + width, y, z, c);
        line_3d(surface, x + width, y, z, x + width, y + height, z, c);
        line_3d(surface, x + width, y + height, z, x, y + height, z, c);
        line_3d(surface, x, y + height, z, x, y, z, c);
    }

    //% block="PI"
    export function pi(): number {
        return 3.14159265;
    }

    //% block="degrees to radians: $deg"
    export function deg2rad(deg: number): number {
        return deg * (pi()/180);
    }

    //% block="radians to degrees: $rad"
    export function rad2deg(rad: number): number {
        return rad * (180/pi());
    }

    //% block="rotate points by "$angle" on the x-axis
    export function rotateX(angle: number): 
}
