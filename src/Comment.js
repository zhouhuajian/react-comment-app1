import React,{Component,PropTypes} from 'react';
class Comment extends Component{
    static propTypes = {
        comment:PropTypes.object.isRequired
    }
    constructor(){
        super();
        this.state = {timeString:''}
    }
    componentWillMount(){
        this._updataTimeString();
    }
    _updataTimeString(){
        const comment = this.props.comment;
        const duration = (+Date.now() - comment.createdTime) / 1000;
        this.setState({
            timeString:duration > 60 ? `${Math.round(duration / 60)} 分钟前` : `${Math.round(Math.max(duration, 1))} 秒前`
        })                              
    }
    render(){
        return(
            <div className='comment'>
                <div className='comment-user'>
                    <span className='comment-username'>{this.props.comment.username}</span>：
                </div>
                <p>{this.props.comment.content}</p>
                <span className='comment-createdtime'>
                    {this.state.timeString}
                </span>
            </div>
        )
    }
}

export default Comment;