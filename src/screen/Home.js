import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import HomeItem from '../component/homeItem';
import { getAll } from '../api';
import { DELTA_OFFSET_RELOAD } from '../config/config';
import NavContainer from '../component/navContainer';

export default class Home extends Component {
    state = {
        list: [],
        loadEnd: false,
        page: 0
    };

    componentDidMount() {
        this.getStory();

        // window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        // window.removeEventListener('scroll', this.handleScroll);
    }

    // handleScroll = () => {
    //     const { refFooter } = this;
    //     if (refFooter) {
    //         const offsetBottom = refFooter.getBoundingClientRect().bottom;
    //         const viewportHeight = window.innerHeight;
    //         console.log(offsetBottom - viewportHeight);
    //         if (offsetBottom - viewportHeight === DELTA_OFFSET_RELOAD) {
    //             console.log('load more data');
    //         }
    //     }

    // }

    getStory = async () => {
        const { page } = this.state;
        const list = await getAll({ page });
        this.setState({
            list: [...this.state.list, ...list],
            loadEnd: list.length === 0,
        }, () => {
            const { loadEnd, page } = this.state;
            if (!loadEnd) {
                this.setState({ page: page + 1 });
            }
        });
    }

    onClickFilter = () => {};

    render() {
        const { list, loadEnd } = this.state;
        const { history } = this.props;

        return (
            <NavContainer>
                <React.Fragment>
                    <div className="text-center">
                        <NavLink
                            role="button"
                            to="/create"
                            className="btn btn-primary margin-right-5px"
                        >
                            <i className="fa fa-book margin-right-5px"/>
                            Write new story
                        </NavLink>
                        <button
                            className="btn btn-primary"
                            onClick={this.onClickFilter}
                        >
                            <i className="fa fa-plus margin-right-5px"/>
                            Filter
                        </button>
                    </div>
                    {
                        list.map((item, index) => (
                            <HomeItem
                                key={index}
                                story={item}
                                history={history}
                            />
                        ))
                    }
                    <div ref={ref => this.refFooter = ref} className="list-footer" />
                    <div className="text-center margin-bottom-10px">
                        {
                            loadEnd ?
                                (
                                    <h5>No more to show...</h5>
                                )
                                :
                                (
                                    < button
                                        className="btn btn-primary"
                                        onClick={this.getStory}
                                    >
                                        Load more
                                </button>
                                )
                        }
                    </div>
                </React.Fragment>
            </NavContainer>
        );
    }
}