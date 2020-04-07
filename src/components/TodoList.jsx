import React, {Component} from 'react';
import TodoItem from "./TodoItem";
import './TodoList.css';
import FlipMove from 'react-flip-move';

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

class TodoList extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        //let completedItems, filterCompleted = [];
        let { items } = this.props;

        // let tryAccessElem = items.map((item) => {
        //     console.log(item.completedItem);
        // });

        // let listItems = items.map( (item) => {
        //     return (
        //             <TodoItem text={item.text}
        //                       key={item.key}
        //                       ID={item.key}
        //                       isComplete={item.completedItem}
        //                       onDelete={this.props.onDelete}
        //                       onEdit={this.props.onEdit}
        //                       handleComplete={this.props.handleComplete} />
        //     );
        // });
        // // console.log("initial ListofItems : ", listItems);
        //
        // const revArray = listItems.reverse();
        // console.log("Reversed Array  : ", revArray);



        const completedItems = items.filter((item) => {
            return ( item.completedItem == true );
        });
        const newCompletedItems = completedItems.reverse();
        //console.log("Items Completed Array  : ", completedItems);

        const filterCompleted = items.filter((item) => {
            return ( item.completedItem == false );

        });
        const newFilterCompleted = filterCompleted.reverse();
        //console.log("Items not Completed Array  : ", filterCompleted);

        const resultArrItems  = [ ...newFilterCompleted, ...newCompletedItems];
        //console.log("Final Array    : ", resultArrItems);

        let reorderedListItems = resultArrItems.map( (item) => {
            return (
                <TodoItem text={item.text}
                          key={item.key}
                          ID={item.key}
                          isComplete={item.completedItem}
                          onDelete={this.props.onDelete}
                          onEdit={this.props.onEdit}
                          handleComplete={this.props.handleComplete} />
            );
        });

        return (
            <div className="card card-body mt-5">
                <ul className="list-group my-3">
                    <h3 className="text-capitalize text-center"> todo list </h3>
                    <div>
                        <FlipMove duration={400} easing="ease-in-out">
                            {reorderedListItems}
                        </FlipMove>
                    </div>
                </ul>
            </div>
        );
    }
}

export default TodoList;