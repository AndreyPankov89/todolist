import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';
import {bindActionCreators} from 'redux';


class AddForm  extends Component{

    state = {
        text: ""
    }

    onChange = (e) => {
        this.setState({text: e.target.value})    
    }


    render(){
        const {add, doneSwitch} = this.props; 
        const newItem = {value:this.state.text, id: Math.floor(Math.random()*1000),done:false};

        const onClick = ()=>{
            add(newItem)
        }
        return(
            
            <div className="add-form">
                <input 
                    className='add-task' 
                    type="text"
                    onChange={this.onChange} 
                    placeholder='Enter a new todo item'/>
                <div className="add-form-btns">
                    <button 
                        className="btn btn_orange" 
                        onClick={doneSwitch}>
                        Hide Complited
                    </button>
                    <button 
                        className="btn"
                        onClick={onClick}
                        >Add new</button>
                </div>
            </div>
        )
    }
}
const mapActionsToProps = (dispatch) => {
    const {add, doneSwitch} = bindActionCreators(actions,dispatch);
    return{
        add,
        doneSwitch
    }
}

const mapStateToProps = (state) => {
    return {}
}

export default connect(mapStateToProps,mapActionsToProps)(AddForm);
//export default AddForm