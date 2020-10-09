import React from 'react'
import { Component } from 'react'

import './landing.css'
import Arrow from '../images/arrow.svg'
import Church from '../images/church.jpg'
import Logo from '../images/logo.png'

export default class Landing extends Component {

    constructor() {
        super()
        this.state = {
            className: 'hidden'
        }
    }

    handleScroll () {
        if (document.documentElement.scrollTop > 1) {
            this.setState({
                className: 'show'
            }) 
        } else {
            this.setState({
                className: 'hidden'
            })
        }
    }

    componentDidMount() {
        window.onscroll = () => this.handleScroll()
    }

    renderCards() {
        return (
            <div className="cards">
                <h1>Domingo, 20 de outubro</h1>
                <h2>Das 18:00h até 19:30h</h2>
                <h3>Av. Santa Cruz, 33, Rio de Janeiro - RJ</h3>
                <p>“ 
                    Lorem ipsum dolor sit amet, consectetur adipiscing 
                    elit, sed do eiusmod tempor incididunt ut labore et 
                    dolore magna aliqua. “
                </p>
            </div>
        )
    }

    render () {
        return (
            <>
                <header className={this.state.className}>
                    <div className="headerContent">
                        <img src={Logo} alt=""/>
                        <ul>
                            <li><a href="#home">INÍCIO</a></li>
                            <li><a href="#about">SOBRE A IGREJA</a></li>
                            <li><a href="#cultos">CULTOS</a></li>
                        </ul>
                    </div>
                </header>
                <div className="initial parallax initialImage" id="home">
                    <h2>NÓS SEGUIMOS A</h2>
                    <h1>Jesus</h1>
                    <a href="#about"><img src={Arrow} alt="seta-para-baixo"/></a>
                </div>
                <div className="aboutUs aboutimg" id="about">
                    <div className="aboutContent">
                        <div className="text">
                            <h1>A IREJA</h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt ut labore et dolore magna 
                                aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                                ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt ut labore et dolore magna 
                                aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                                ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt ut labore et dolore magna 
                                aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                                ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                            <button>VER FOTOS</button>
                        </div>
                        <img src={Church} alt=""/>
                    </div>
                </div>
                <div className="cultos cultosimg" id="cultos">
                    <div className="cultosHeader">
                        <h1>CULTOS</h1>
                        <p>Fique por dentro de nossa programação semanal</p>
                    </div>
                    <div className="cultosBody">
                        {this.renderCards()}
                        {this.renderCards()}
                        {this.renderCards()}
                        {this.renderCards()}
                    </div>
                </div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1837.9658849020113!2d-43.417760860998754!3d-22.878978733900023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9961fc5004f665%3A0xb65d93ca3e055dc4!2sAssembl%C3%A9ia%20de%20Deus%20do%20Campinho%20-%20Congrega%C3%A7%C3%A3o%20em%20Mallet!5e0!3m2!1spt-BR!2sbr!4v1602268640955!5m2!1spt-BR!2sbr" title="map" frameborder="0" allowFullScreen=""></iframe>
                <footer></footer>
            </>
        )
    }
}
   