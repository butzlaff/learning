let step02 = () => {
    console.log("Step 02")
}

console.log("Step 01")
step02()
console.log("Step 03")

console.log("Step 04")

setTimeout(()=> {
    console.log("Step 05")
}, 1000)
console.log("Step 06")