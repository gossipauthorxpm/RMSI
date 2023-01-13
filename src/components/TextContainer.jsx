import React from "react";

class TextContainer extends React.Component{

    render() {
        return <p className={'page-content-text'}>{this.props.text}</p>
    }
}
export default TextContainer;