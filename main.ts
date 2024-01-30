//% color="000000"
namespace projection {
    let focal_len: number;
    let vertices: Array<any> = [];
    let screen_points: Array<any> = [];

    let camera: Object = {
        x: 0,
        y: 0,
        z: 0,
    };

    //% block="set focal length to $focal_length"
    export function setFocalLength(focal_length: number) {
        focal_len = focal_length;
    }

    //% block="add vertex at $x $y $z"
    export function addVertex(x: number, y: number, z: number) {
        vertices.push({
            x: x,
            y: y,
            z: z,
        });
    }

    //% block="draw $c 3D line on $surface from $p1 to $p2"
    //% surface.shadow="speedPicker"
    export function line_3d(surface: Image, p1: number, p2: number, c: number) {
        let x1 = screen_points[p1].x;
        let y1 = screen_points[p1].y;
        let x2 = screen_points[p2].x;
        let y2 = screen_points[p2].y;
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
        return deg * (pi() / 180);
    }

    //% block="radians to degrees: $rad"
    export function rad2deg(rad: number): number {
        return rad * (180 / pi());
    }

    //% block="perspective projection $x $y $z"
    export function perspective(x: number, y: number, z: number): Object {
        let screen_x = x / z * focal_len;
        let screen_y = y / z * focal_len;
        return {
            x: screen_x,
            y: screen_y,
        };
    }

    //% block="project vertices on screen"
    export function project_vertices() {
        for (let v=0; v<vertices.length; v++) {
            let vertex = vertices[v];
            let screen_coords = perspective(vertex.x, vertex.y, vertex.z);
            screen_points.push(screen_coords);
            console.log(screen_points);
        }
    }
}
