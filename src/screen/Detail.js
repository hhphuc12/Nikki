import React, { Component } from 'react';
import NavContainer from '../component/navContainer';

export default class Detail extends Component {
    render() {
        const { content, title } = this.props.location.state;

        return (
            <NavContainer>
                <div className='card margin-top-7px text-center'>
                    <div className='card-body'>
                        <h4 className='text-center'>
                            {title}
                        </h4>
                        <div className='card-line' />
                        <span>
                            {content}
                        </span>
                    </div>
                </div>
            </NavContainer>
        );
    }
}