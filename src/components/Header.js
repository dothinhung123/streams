import React from 'react';
import GoogleAuth from './GoogleAuth'
import {Link} from 'react-router-dom'

const Header =()=>{
    return (
        <div className="ui secondary pointing menu">
            <div className="left menu">
                <Link to="/" className="item">Streamy</Link>
                <div className="right menu">
                    <Link to="/" className="item">All Stream</Link>
                    <GoogleAuth></GoogleAuth>
                </div>
            </div>
        </div>
    )
}
export default Header