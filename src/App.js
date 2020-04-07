import React, { Component } from 'react';
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

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

class App extends Component {

    constructor(props) {
        super(props);
        this.state={
            items : [],
            currentItem : {
                text: '',
                key: '',
                completedItem : false
            },
            editItem : false
        }
        this.addItem = this.addItem.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleComplete = this.handleComplete.bind(this);
    }

    addItem = (e) => {
        e.preventDefault();
        const newItem = this.state.currentItem;
        //console.log(newItem);
        if(newItem !== ""){
            const newItems = [...this.state.items, newItem];
            this.setState({
                items: newItems,
                currentItem : {
                    text: '',
                    key: '',
                    completedItem: false
                }
            })
        }
        this.state.editItem = false;
        //console.log("EditItem attribute set to false...");
    }

    handleInput = (e) => {
        this.setState({
            currentItem: {
                text: e.target.value,
                key : Date.now(),
                completedItem: false
            }
        })
    }

    deleteItem(key){
        const filteredItems = this.state.items.filter((item) => {
            return item.key !== key;
        });
        this.setState({
            items: filteredItems
        });
    }

    handleEdit( key){
        //console.log("Item is selected for editing " + key);

        const selectedItem = this.state.items.find((item) => {
            if(item.key === key){
                this.state.currentItem.text = item.text;
            }
            return item.key === key;
            }
        );
        //console.log("selected Item : " + JSON.stringify(selectedItem));

        const filteredItems = this.state.items.filter((item) => {
            return item.key !== key;
        });

        this.setState({
            items: filteredItems,
            editItem : true
        });


    }

    handleComplete(key) {
        //console.log("Task Completed !" + key);
        const itemCompleted = this.state.items.find((item) => {
                return item.key === key;
            }
        );
        itemCompleted.completedItem = true;

        const filteredItems = this.state.items.filter((item) => {
            return item.key !== key;
        });

        this.setState({
            items: [...filteredItems, itemCompleted]
        })
        //console.log(JSON.stringify(itemCompleted));
       // console.log(JSON.stringify(this.state.items));


    }

    render() {
        return (

            <div className="container">
                <div className="row">
                    <div className="col-10 mx-auto col-md-8 mt-4">
                        <br />
                        <h2 className="text-capitalize text-center"> To-Do List App </h2> <br />
                        <TodoInput value={this.state.currentItem.text} onChange={this.handleInput} onSubmission={this.addItem} editItem={this.state.editItem}/>
                        <TodoList items={this.state.items}  onDelete={this.deleteItem} onEdit={this.handleEdit} isComplete={this.state.currentItem.completedItem} handleComplete={this.handleComplete}/>
                    </div>
                </div>
            </div>

        );
    }
}

export default App;
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