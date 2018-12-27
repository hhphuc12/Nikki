import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { formatTitle, formatPreviewContent } from '../utils/commonUtils';

const longText = 'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).';

export default class Home extends Component {
    render() {
        const { story } = this.props;

        return (
            <div className='card margin-top-7px text-center'>
                <div className='card-body'>
                    <h4 className='text-center'>
                        {formatTitle(story.createdAt)}
                    </h4>
                    <div className='card-line' />
                    <span>
                        {formatPreviewContent(story.content)}
                    </span>
                </div>
            </div>
        );
    }
}

Home.defaultProps = {
    story: {},
}