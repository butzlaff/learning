import React, { Fragment } from "react";
import Planet from "./planet";
import Description_Link from "../shared/description_with_links/";

const ShowMessage = () => {
    alert('Meu primeiro event')
}


const Planets = (props) => {
    return (
        <Fragment>
        <h3>Planets list</h3>
        <button onClick={ShowMessage}>Click me!</button>
        <hr/>
        <Planet name="Mercúrio"
            description="Para o deus da mitologia romana, consulte Mercúrio (mitologia); para demais casos, veja Mercúrio. Mercúrio é o menor e mais interno planeta do Sistema Solar, orbitando o Sol a cada 87,969 dias terrestres."
            img_url="https://upload.wikimedia.org/wikipedia/commons/d/d9/Mercury_in_color_-_Prockter07-edit1.jpg"
            link="https://pt.wikipedia.org/wiki/Merc%C3%BArio_(planeta)"
            link_name="Veja mais na seção de Plutão na Wikipedia clicando aqui"
        />
        <Planet name="Plutão"
            description="Plutão, formalmente designado 134340 Plutão (símbolos: ⯓ e ♇) é um planeta anão do Sistema Solar e o nono maior e décimo mais massivo objeto observado diretamente orbitando o Sol. Originalmente classificado como um planeta, Plutão é atualmente o maior membro conhecido do cinturão de Kuiper,[11] uma região de corpos além da órbita de Netuno."
            img_url="https://upload.wikimedia.org/wikipedia/commons/e/ef/Pluto_in_True_Color_-_High-Res.jpg"
            link="https://pt.wikipedia.org/wiki/Plut%C3%A3o"
            link_name="Veja mais na seção de Plutão na Wikipedia clicando aqui"
        />
        </Fragment>
    )}
 
    export default Planets;