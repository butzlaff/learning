class SpacesipWeapon{
    constructor(identifier){
        this.identifier = identifier
        this.shotsLeft = 5
    }
    shot(){
            if (this.shotsLeft > 0){
            console.log('Bang!')
            this.shotsLeft -= 1 
            }else{
            throw new Error("Arma " + this.identifier +" sem munição!" )
        }
    }  
    reload(){
        this.shotsLeft = 5
    } 
}

let fenixWeapon = new SpacesipWeapon(1)


try {
    fenixWeapon.shot()
    fenixWeapon.shot()
    fenixWeapon.shot()
    fenixWeapon.shot()
    fenixWeapon.shot()
    fenixWeapon.shot()
} catch (e){
    console.log(e.message)
    fenixWeapon.reload()
}finally{
    console.log('Armas deu bons tiros')
}


console.log(fenixWeapon)


/*
let fenixWeapon = new SpacesipWeapon(10)

fenixWeapon.shot(3)

console.log(fenixWeapon)


class SpacesipWeapon{
    constructor(identifier){
        this.identifier = identifier
        this.shotsLeft = 5
    }
    shot(quantityShots){
        
        for (let i=0; i < quantityShots; i++ ){
        console.log('Bang!')
        this.shotsLeft -= 1 
    }
    }
}


let fenixWeapon = new SpacesipWeapon(10)

fenixWeapon.shot(3)

console.log(fenixWeapon)*/