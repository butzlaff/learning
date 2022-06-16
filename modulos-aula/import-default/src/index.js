import Spaceship from "./spaceship";
import armamentKind from "./armaments";
import { laserDefenses, steelDefenses } from "./defenses";


const spaceship = new Spaceship('USS Enterprise', 'James Tiberius Kirk',
armamentKind.laser, laserDefenses)

console.log(spaceship)