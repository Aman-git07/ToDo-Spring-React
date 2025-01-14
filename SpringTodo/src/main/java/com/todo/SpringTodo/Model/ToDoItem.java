package com.todo.SpringTodo.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.validation.constraints.NotBlank;


@Entity
public class ToDoItem {

    private Long id;
    @NotBlank(message = "Title cannot be blank")
    private String title;
    private boolean done;

    @Id
    @GeneratedValue
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public boolean isDone() {
        return done;
    }

    public void setDone(boolean done) {
        this.done = done;
    }

    public ToDoItem() {
    }

    public ToDoItem(Long id, String title, boolean done) {
        this.id = id;
        this.title = title;
        this.done = done;
    }
}
