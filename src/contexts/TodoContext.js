import { createContext,useContext } from "react";

export const TodoContext = createContext({
    todos:[{
        id:1,
        todo: "Todo msg",
        checked: false
    }],
    addTodo : (Todo)=>{},
    updateTodo: (Todo,id)=>{},
    deleteTodo: (id)=>{},
    toggleChecked : (id)=>{}
});

export const TodoProvider = TodoContext.Provider

export const useTodo = ()=>{
    return useContext(TodoContext);
}