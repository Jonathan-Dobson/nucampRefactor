import React from 'react';
import { Col } from 'reactstrap';

const Comments = ({comments, ...rest}) => {
    
    const FormattedComments = () => comments.map((comment, index) => 
        <p key={index}>
            {comment.text}
            <br /> --{comment.author}, 
            {
                new Intl.DateTimeFormat('en-US', { 
                    year: 'numeric', 
                    month: 'short', 
                    day: '2-digit' 
                    })
                .format(new Date(Date.parse(comment.date)))
            }
        </p>
    )

    return comments ? (
        <Col {...rest}>
            <h4>Comments</h4>
            <FormattedComments />
        </Col>
    )
    : <div />
}

export default Comments;