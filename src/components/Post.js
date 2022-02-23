import React from 'react';
import content from '../contents/lorem_content.json'

export default class Post extends React.Component {
    render() {
        return (
            <div className={this.props.styles.canvas}>
                <h>{content.title}</h>
                <p>{content.content}</p>
</div>
        )
    }
}