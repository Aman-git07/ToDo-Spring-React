package com.todo.SpringTodo.Controller;

import com.todo.SpringTodo.Model.ToDoItem;
import com.todo.SpringTodo.Repo.ToDoRepo;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/todo")
@CrossOrigin(origins = "http://localhost:5173")
public class TodoController {

    @Autowired
    private ToDoRepo toDoRepo;

    @GetMapping
    public List<ToDoItem> findAll(){
        return toDoRepo.findAll();
    }

    @PostMapping
    public ToDoItem save(@Valid @RequestBody ToDoItem toDoItem){
    return toDoRepo.save(toDoItem);
    }

    @PutMapping
    public ToDoItem update(@Valid @NotNull @RequestBody ToDoItem toDoItem){
    return toDoRepo.save(toDoItem);
    }

    @DeleteMapping(value = "/{id}")
    public void delete(@PathVariable Long id){
        toDoRepo.deleteById(id);
    }
}
