var Calculator = {
    add:(...values)=>{
        var sum = 0
        for (const value of values) {
            sum = sum + value            
        }
        return sum
    },
    sub:(v1,v2)=>{
        return v1-v2
    },
    mul:(...values)=>{
        var prod = 1
        for (const value of values) {
            prod = prod * value            
        }
        return prod
    },
    div:(v1,v2)=>{
        return v1/v2
    }
}
module.exports = Calculator