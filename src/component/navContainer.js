import React, { Component } from 'react';

export default class NavContainer extends Component {
    render() {
        return (
            <div className='app-container'>
                <div className="nikki-slogan">
                    <h3 className='text-center text-white'>Viết câu gì đó hay hay ở đây</h3>
                </div>
                <div className='nikki-body'>
                    {this.props.children}
                </div>
            </div>
        );
    }
}