import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { formatTitle, formatPreviewContent } from '../utils/commonUtils';

export default class Home extends Component {
    onShowDetail = e => {
        e.preventDefault();
        const { _id, createdAt, content } = this.props.story;
        this.props.history.push({
            pathname: `/detail/${_id}`,
            state: {
                title: formatTitle(createdAt),
                content,
            }
        })
    }

    render() {
        const { story } = this.props;

        return (
            <div className='card margin-top-7px text-center'>
                <div className='card-body'>
                    <a
                        href="#"
                        className="story-title-link"
                        onClick={this.onShowDetail}
                    >
                        <h4 className='text-center'>
                            {formatTitle(story.createdAt)}
                        </h4>
                    </a>
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