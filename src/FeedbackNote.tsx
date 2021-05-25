import * as React from 'react';
import './Logo.module.css';

interface IFeedbackNote {
    comment: string;
}

class FeedbackNote extends React.Component<IFeedbackNote, {}> {
    public render() {
        return (
            <div className="feedbackNote">
                {this.props.comment}
            </div>

            // <div>
            //     {this.props.comment}
            // </div>
        )
    }
}

export default FeedbackNote;