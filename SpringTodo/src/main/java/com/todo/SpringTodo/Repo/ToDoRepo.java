package com.todo.SpringTodo.Repo;

import com.todo.SpringTodo.Model.ToDoItem;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ToDoRepo extends JpaRepository<ToDoItem, Long>{

}

