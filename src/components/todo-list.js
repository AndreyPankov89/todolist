import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';
import {bindActionCreators} from 'redux';

const TodoList = ({items, doneSwitch, toggle}) => {
    

    const makeList = (items) => {
        if (!items){
            return null;
        }
        return items.map((item) => {
            const complited = item.done ? 'complited' : "";


            const itemClick = () =>{
                toggle(item.id)
            }

            return (
                <li
                key={item.id}
                className={complited}
                onClick={itemClick}
                >{item.value}</li>
            )
        })
    }
    
    let list = items;
    if (doneSwitch) {
        debugger;
        list = items.filter((item) => {
            return !item.done
        })
    }

    const outputList = makeList(list) 

    return(
        <ul className="todo-list">
            {outputList}
        </ul>
    )
}

const mapStateToProps = (state) => {
    const {items, doneSwitch} = state;
    return {
        items,
        doneSwitch
    }
}

const mapActionsToProps = (dispatch) => {
    const {toggle} = bindActionCreators(actions,dispatch);
    return{
        toggle
    }
}

export default connect(mapStateToProps,mapActionsToProps)(TodoList);