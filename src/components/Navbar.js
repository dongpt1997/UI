import React from 'react'

const Navbar = () => {
    const style = {
        background: 'rgb(240,240,240)',
        color: 'black'
    }
    return (
        <div className="navbar" style={style}>
            <h1>My react hook</h1>
            <ul>
                <h4>Home</h4>
                <h4>About</h4>
            </ul>
        </div>
    )
}

export default Navbar
