import React, {Component} from "react";
import './TodoInput.css';

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


class  TodoInput extends Component{
    render() {
        const { editItem } = this.props;
        return (
            <div className="card card-body my-3">
                <form onSubmit={this.props.onSubmission}>
                    <div><h4> Add Item</h4></div>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control text-capitalize" placeholder="Add a Todo item" value={this.props.value} onChange={this.props.onChange} />
                        <div className="input-group-prepend">
                            <button id="input-button" className={ editItem ? "btn btn-warning mx-auto-3 ml-3" : "btn btn-success mx-auto-3 ml-3"} type="submit"> { editItem ? "Edit Item" : "Add Item" } </button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default TodoInput;