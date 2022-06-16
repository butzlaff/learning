module.exports = {
    get calc_ua(){ return  149587870},
    convertUaToKm(ua) {
        return ua * this.calc_ua
    }
}