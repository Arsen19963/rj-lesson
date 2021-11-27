import React, { Component } from 'react'

const getAstro = () => {
    return fetch("https://www.7timer.info/bin/astro.php?lon=40.7663747&lat=43.8435973&ac=0&output=json&tzshift=4", {
        method: "GET"
    })
    .then(response => response.json())
}

export default class Astro extends Component {
    state = {
        info: null,
    }
    componentDidMount() {
        getAstro()
        .then(res => this.setState({info: res}))
    }
    
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

