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
        surface.drawLine(x1, y1, x2, y2, c);
    }

    //% block="draw $c 3D line on $surface from $x1 $y1 $z1 to $x2 $y2 $z2"
    //% surface.shadow="speedPicker"
    export function alt_line_3d(surface: Image, x1: number, y1: number, z2: number, x2: number, y2: number, z2: number, c: number) {
        let sx1 = x1 / z1 * focal_len;
        let sy1 = y1 / z1 * focal_len;
        let sx2 = x2 / z2 * focal_len;
        let sy2 = y2 / z2 * focal_len;
        surface.drawLine(sx1, sy1, sx2, sy2, c);
    }

    //% block="draw $c plane on $surface from $p1 to $p2"
    //% surface.shadow="speedPicker"
    export function plane(surface: Image, p1: number, p2: number, c: number) {
        line_3d(surface,)
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
        }
    }
}
