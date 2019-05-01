import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class Header extends Component{
    renderContent() {
        switch(this.props.auth){
            case null:
                return;

            case false:   //no user logged in
                return (
                    <li>
                        <a href="/auth/google">
                             Login With Google
                    </a>
                </li>
                );

            default:  // the user is loged in
                return (
                     <li>
                         <a href="/api/logout">
                             Logout
                         </a>
                     </li>
            );
        }
}
    render() {
        return (
            <nav>
                <div className="nav-wrapper">
                    <Link
                        to={this.props.auth ? '/surveys' : '/'}  // ? == ternary operator (1st arg if true : 2nd arg if false)
                        className="left brand-logo"
                    >
                        Emaily
                    </Link>
                    <ul className="right">
                         {this.renderContent()}
                    </ul>
                </div>
            </nav>
        );
    }
}

function mapStateToProps ({ auth }) {
    return { auth };
}

export default connect(mapStateToProps) (Header);