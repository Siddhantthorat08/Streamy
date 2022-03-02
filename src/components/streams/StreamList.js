import { extend } from "lodash";
import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchStreams } from "../../actions";

class StreamList extends React.Component{
    
    componentDidMount() {
        this.props.fetchStreams();
    }

    renderAdmin = (stream) => {
        if(stream.userId === this.props.currentUserId) {
            return (
                <div className = "right floated content">
                    <Link to = {`/stream/edit/${stream.id}`} className="ui button primary">Edit</Link>
                    <Link to = {`/stream/delete/${stream.id}`} className="ui button negative">Delete</Link>
                </div>
            );
        }
    }

    renderCreate = () => {
        if(this.props.isSignedIn === true) {
            return(
                <div style={{textAlign: 'right'}} >
                    <Link to ="/stream/new" className="ui button primary">Create Stream</Link>
                </div>
            )
        }
        else {
            return null;
        }
    }

    renderList = () => {
        return (
            this.props.streams.map((stream) => {
                return(
                    <div className="item" key = {stream.id}>
                        {this.renderAdmin(stream)}
                        <i className = "large middle aligned icon camera" />
                        <div className="content">
                            <Link to={`stream/${stream.id}`}>
                                {stream.title}
                            </Link>
                            <div className="description">
                                {stream.description}
                            </div>
                        </div>
                    </div>
                )
            })
        );
    }

    render() {
        console.log(this.props.streams);
        return(
            <div>
                <h2>STREAMS</h2>
                <div className="ui celled list">
                    {this.renderList()}
                </div>
                {this.renderCreate()}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    //Object.values is a builtin function in javascript that take an Object(state.streams) and pullout the values and store it in the array. 
    return {
        streams: Object.values(state.streams),
        currentUserId: state.auth.userId,
        isSignedIn: state.auth.isSignedIn
    };
}

export default connect(mapStateToProps, { fetchStreams })(StreamList);