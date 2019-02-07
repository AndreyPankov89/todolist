export const reducer = (state = {doneSwitch: false, items:[]}, action) => {
    switch (action.type){
        case 'ADD':{
            const newItems = [action.value, ...state.items]
            return {items: newItems};
        }
        case 'TOGGLE':{
            const {id} = action;
            const {items} = state;
            const index = items.findIndex(item => item.id === id);
            const done = !items[index].done;
            const newArr = [...items.slice(0,index), {...items[index], done: done}, ...items.slice(index+1)];
            return {items:newArr};
        }
        case 'DONESWITCH':{
            const {doneSwitch}=state;
            return {doneSwitch: !doneSwitch}
        }
        default:{
            return state;
        }
    }
}