import React, { Component } from 'react';
import HomeItem from '../component/homeItem';
import { getAll } from '../api';
import { DELTA_OFFSET_RELOAD } from '../config/config';

export default class Home extends Component {
    state = {
        list: [],
    };

    async componentDidMount() {
        const list = await getAll();
        this.setState({ list });

        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        const { refFooter } = this;
        if (refFooter) {
            const offsetBottom = refFooter.getBoundingClientRect().bottom;
            const viewportHeight = window.innerHeight;
            console.log(offsetBottom - viewportHeight);
            if (offsetBottom - viewportHeight === DELTA_OFFSET_RELOAD) {
                console.log('load more data');
            }
        }
        
    }

    render() {
        const { list } = this.state;

        return (
            <div className='app-container'>
                <div className="nikki-slogan">
                    <h3 className='text-center text-white'>Viết câu gì đó hay hay ở đây</h3>
                </div>
                <div className='nikki-body'>
                    {
                        list.map((item, index) => (
                            <HomeItem
                                key={index}
                                story={item}
                            />
                        ))
                    }
                    <div ref={ref => this.refFooter = ref} className="list-footer"/>
                </div>
            </div>
        );
    }
}