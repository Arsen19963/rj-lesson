import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <h2 className="header">
               <span  className="header-text">
                TODO LIST
               </span>
               <div className="header-subtitle">
                   <span>
                       Do it now.
                   </span>
               </div>
            </h2>
        )
    }
}
