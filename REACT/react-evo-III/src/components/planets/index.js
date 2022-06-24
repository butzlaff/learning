import React, { Fragment } from "react";
import Planet from "./planet";


class Planets extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            planets: [{
                name: "Mercúrio",
                description: "Para o deus da mitologia romana, consulte Mercúrio (mitologia); para demais casos, veja Mercúrio. Mercúrio é o menor e mais interno planeta do Sistema Solar, orbitando o Sol a cada 87,969 dias terrestres.",
                img_url: "./img/mercurio_color.jpg",
                link: "https://pt.wikipedia.org/wiki/Merc%C3%BArio_(planeta)",
                link_name: "Veja mais na seção de Mercúrio na Wikipedia clicando aqui",
                title_with_underline: true,
                gray: true
            },
            {
                name: "Vênus",
                description: "Vénus (português europeu) ou Vênus (português brasileiro) (AO 1990: Vénus ou Vênus)[1] é o segundo planeta do Sistema Solar em ordem de distância a partir do Sol, orbitando-o a cada 224,7 dias. Recebeu seu nome em homenagem à deusa romana do amor e da beleza Vénus, equivalente a Afrodite.",
                img_url: "./img/venus_color.jpg",
                link: "https://pt.wikipedia.org/wiki/V%C3%A9nus_(planeta)",
                link_name: "Veja mais na seção de Vênus na Wikipedia clicando aqui",
                title_with_underline: true,
                gray: true,
            }
            ,
            {
                name: "Terra",
                description: "Plutão, formalmente designado 134340 Plutão (símbolos: ⯓ e ♇) é um planeta anão do Sistema Solar e o nono maior e décimo mais massivo objeto observado diretamente orbitando o Sol. Originalmente classificado como um planeta, Plutão é atualmente o maior membro conhecido do cinturão de Kuiper,[11] uma região de corpos além da órbita de Netuno.",
                img_url: "./img/earth_color.jpg",
                link: "https://pt.wikipedia.org/wiki/Terra",
                link_name: "Veja mais na seção de Terra na Wikipedia clicando aqui",
                title_with_underline: true,
                gray: false,
            },
            {
                name: "Marte",
                description: 'Marte é o quarto planeta a partir do Sol, o segundo menor do Sistema Solar. Batizado em homenagem ao deus romano da guerra, muitas vezes é descrito como o "Planeta Vermelho", porque o óxido de ferro predominante em sua superfície lhe dá uma aparência avermelhada.',
                img_url: "./img/mars_color.jpg",
                link: "https://pt.wikipedia.org/wiki/Plut%C3%A3o",
                link_name: "Veja mais na seção de Marte na Wikipedia clicando aqui",
                title_with_underline: true,
                gray: true,
            }          ,
            {
                name: "Júpiter",
                description: "Júpiter é o maior planeta do Sistema Solar, tanto em diâmetro quanto em massa, e é o quinto mais próximo do Sol.[11] Possui menos de um milésimo da massa solar, contudo tem 2,5 vezes a massa de todos os outros planetas em conjunto.",
                img_url: "./img/jupiter_color.jpg",
                link: "https://pt.wikipedia.org/wiki/J%C3%BApiter_(planeta)",
                link_name: "Veja mais na seção de Júpiter na Wikipedia clicando aqui",
                title_with_underline: true,
                gray: true,
            },
            {
                name: "Saturno",
                description: "Saturno é o sexto planeta a partir do Sol e o segundo maior do Sistema Solar atrás de Júpiter. Pertencente ao grupo dos gigantes gasosos, possui cerca de 95 massas terrestres e orbita a uma distância média de 9,5 unidades astronômicas.",
                img_url: "./img/saturn_color.jpg",
                link: "https://pt.wikipedia.org/wiki/Saturno_(planeta)",
                link_name: "Veja mais na seção de Saturno na Wikipedia clicando aqui",
                title_with_underline: true,
                gray: true,
            },
            {
                name: "Urano",
                description: "Urano[11] (Úrano em Portugal[12]) é o sétimo planeta a partir do Sol, o terceiro maior e o quarto mais massivo dos oito planetas do Sistema Solar. Foi nomeado em homenagem ao deus grego do céu, Urano.",
                img_url: "./img/uranus_color.jpg",
                link: "https://pt.wikipedia.org/wiki/Urano_(planeta)",
                link_name: "Veja mais na seção de Urano na Wikipedia clicando aqui",
                title_with_underline: true,
                gray: true,
            },
            {
                name: "Netuno",
                description: "Netuno (pt-BR) ou Neptuno (pt) (AO 1990: Netuno ou Neptuno)[2][3] é o oitavo planeta do Sistema Solar, o último a partir do Sol desde a reclassificação de Plutão para a categoria de planeta anão, em 2006. Pertencente ao grupo dos gigantes gasosos, possui um tamanho ligeiramente menor que o de Urano, mas maior massa, equivalente a 17 massas terrestres. Netuno orbita o Sol a uma distância média de 30,1 unidades astronômicas.",
                img_url: "./img/neptune_color.jpg",
                link: "https://pt.wikipedia.org/wiki/Netuno_(planeta)",
                link_name: "Veja mais na seção de Netuno na Wikipedia clicando aqui",
                title_with_underline: true,
                gray: true,
            },
            {
                name: "Plutão",
                description: "Plutão, formalmente designado 134340 Plutão (símbolos: ⯓ e ♇) é um planeta anão do Sistema Solar e o nono maior e décimo mais massivo objeto observado diretamente orbitando o Sol. Originalmente classificado como um planeta, Plutão é atualmente o maior membro conhecido do cinturão de Kuiper,[11] uma região de corpos além da órbita de Netuno.",
                img_url: "./img/plutao_color.jpg",
                link: "https://pt.wikipedia.org/wiki/Plut%C3%A3o",
                link_name: "Veja mais na seção de Plutão na Wikipedia clicando aqui",
                title_with_underline: true,
                gray: true,
            }
            ]
        }
    }

    removeLast = () => {
        let new_planets = [...this.state.planets]
        new_planets.pop()
        this.setState(state => ({
            planets: new_planets
        })
        )
    }

    duplicateLastPlanet = () => {
        let last_planet = this.state.planets[this.state.planets.length - 1]
        this.setState(state => ({
            planets: [...this.state.planets, last_planet]
        }))
    }

    setColor = () => {
        let color = this.state.planets[this.state.planets.length]
        for (var i=0; i < color; i++){
        if(this.state.planets.gray[i] == true){
            this.state.planets.gray[i] = false
        }else{
            this.state.planets.gray[i] = true
        }
        console.log(this.state.planets.gray)
    }
    this.setState(state => ({
        planets: [...this.state.planets]
    }))

    }

    render() {
        return (
            <Fragment>
                <h3>Planets list</h3>
                <button onClick={this.removeLast}>Remove Last</button>
                <button onClick={this.duplicateLastPlanet}>Duplicate Last</button>      
                <button onClick={this.setColor}>Set Color</button>
                <hr />
                {this.state.planets.map((planet) =>
                    <Planet
                        name={planet.name}
                        description={planet.description}
                        img_url={planet.img_url}
                        link={planet.link}
                        link_name={planet.link_name}
                        title_with_underline={planet.title_with_underline}
                        gray={planet.gray}
                    />
                )}
            </Fragment>
        )
    }
}
export default Planets;