var Circle = {
    area:(rad)=>{
        return Math.PI * Math.pow(rad,2);
    },
    perimeter:(rad)=>{
        return 2 * Math.PI * rad;
    }
}
module.exports = Circle;