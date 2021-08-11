import React, {useState} from 'react';

import { StyleSheet, Text, View } from 'react-native';
//import {Text}from 'react-native';

// components
import Header from "./Header";
import Listitems from "./Listitems";
import InputModal from './InputModal';

const Home = () => {

    //initial todos
    const initialTodos = [{
        title: "Use a racket",
        date: "Fri, 20 Jan 2021 idk the time",
        key: "1",
    }, {
        title: "Get Balls",
        date: "Fri, 20 Jan 2021 idk the time",
        key: "2",
    }, {
        title: "Go to tennis",
        date: "Fri, 20 Jan 2021 idk the time",
        key: "3",
    }]

    const [todos, setTodos] = useState(initialTodos);

    // clear all todos
    const handleClearTodos = () => {
        setTodos([]);
    }

    //Modal visiblity & input value
    const [modalVisible, setModalVisible] = useState(false);
    const [todoInputValue, setTodoInputValue] = useState();

    //function to add a new todo
    const handleAddTodo = (todo) => {
        const newTodos = [...todos, todo];
        setTodos(newTodos);
        setModalVisible(false);
    }

    //Editing

    const [todoToBeEdited, setTodoToBeEdited] = useState(null);

    const handleTriggerEdit = (item) => {
        setTodoToBeEdited(item);
        setModalVisible(true);
        setTodoInputValue(item.title);
    }

    const handleEditTodo = (editedTodo) => {
        const newTodos = [...todos];
        const todoIndex = todos.findIndex((todo) => todo.key === editedTodo.key);
        newTodos.splice(todoIndex, 1, editedTodo);
        setTodos(newTodos);
        setTodoToBeEdited(null);
        setModalVisible(false);
    }

    return (
        <>
            <Header handleClearTodos={handleClearTodos}/>
            <Listitems 
                todos = {todos}
                setTodos = {setTodos}
                handleTriggerEdit={handleTriggerEdit}
            />
            <InputModal
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
                todoInputValue={todoInputValue}
                setTodoInputValue={setTodoInputValue}
                handleAddTodo={handleAddTodo}
                todoToBeEdited={todoToBeEdited}
                setTodoToBeEdited={setTodoToBeEdited}
                handleEditTodo={handleEditTodo}
                todos={todos}
            />
        </>
    );
}

export default Home;