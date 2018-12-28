import React, { Component } from 'react';
import NavContainer from '../component/navContainer';
import CKEditor from "react-ckeditor-component";

export default class Create extends Component {
    state = {
        content: '',
        error: null,
    }

    render() {
        const { content, error } = this.state;
        return (
            <NavContainer>
                <div className="form-group">
                    <div className="input-group">
                        <CKEditor
                            activeClass="p10"
                            content={content}
                            events={{
                                "change": e => this.setState({ content: e.editor.getData() })
                            }}
                        />
                        {error && <p className="text-danger">{`* ${error}`}</p>}
                    </div>
                </div>
                <div className="text-center">
                    <button className="btn btn-success">Save</button>
                </div>
            </NavContainer>
        );
    }
}