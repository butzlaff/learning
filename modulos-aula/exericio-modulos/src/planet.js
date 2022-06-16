class Planet{
    constructor(name, unity_astonomic){
        this.name = name
        this.unity_astonomic = this.calc_ua(unity_astonomic)
    }
    calc_ua(unity_astonomic){
        const ua = (unity_astonomic * 149587870).toFixed(2)
        return ua
    }
}


module.exports = Planet