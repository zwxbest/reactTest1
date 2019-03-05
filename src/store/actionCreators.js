import {CHANGE_INPUT_VALUE,ADD_TODO_ITEM,DELETE_TODO_ITEM,INIT_LIST_ACTION,GET_INIT_LIST} from './actionTypes'

export const getInputChangeAction = (value)=>({
    type:CHANGE_INPUT_VALUE,
    value
});

export const getAddToDoItemAction = ()=>({
        type:ADD_TODO_ITEM
    }
);

export  const getDeleteToDoItemAction = (index) =>({
    type: DELETE_TODO_ITEM,
    index
});

export  const initListAction=(data)=>({
        type: INIT_LIST_ACTION,
        data
    }
);

export const getInitList=()=>({
    type: GET_INIT_LIST
});
