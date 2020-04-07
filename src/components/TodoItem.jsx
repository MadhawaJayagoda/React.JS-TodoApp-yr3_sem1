import React, {Component} from 'react';
import './TodoItem.css';

/*
*
*
* ----------------------------------------  Student Details --------------------------------------

Application Frameworks : Mid Exam Assignment

 > Student Registration Number :  IT17184304
 > Student Name                :  Jayagoda N.M.

 (  SLIIT 3rd Year 1st semester Software Engineering Weekday Batch - Y3S1.20.1  )
 *
 *
 *
* */

class TodoItem extends Component {
    render() {
        const { isComplete } = this.props;
       // console.log( "Initial isCompleted : " + isComplete);
        return (
            <div className="card view">
                <div className="listItems card-body" key={this.props.ID}>
                    <div className="desc">
                        <span onClick={() => this.props.handleComplete(this.props.ID, this.props.orderedArrayItems)} > {isComplete ? <del> { this.props.text } </del> : this.props.text } </span>
                        <span className="mx-2 text-success">
                            <i className="fas fa-pen" onClick={() => this.props.onEdit(this.props.ID)}/>
                        </span>
                        <span className="mx-2 text-danger">
                            <i className="fas fa-trash"  onClick={() => this.props.onDelete(this.props.ID)} />
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}

export default TodoItem;