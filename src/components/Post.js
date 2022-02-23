import React from 'react';
import ReackMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import content from '../contents/lorem_content.json'

export default class Post extends React.Component {
    render() {
        return (
            <div className={this.props.styles.canvas}>
                <h>{content[1].title}</h>
                <p><ReackMarkdown children={content[1].content} remarkPlugins={[remarkGfm]}></ReackMarkdown></p>
</div>
        )
    }
}