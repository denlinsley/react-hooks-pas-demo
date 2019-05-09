import React, { useReducer } from "react";

function todosReducer(state, action) {
  console.log({ state, action });
  switch (action.type) {
    case "ADD_TODO":
      return {
        todos: [
          ...state.todos,
          {
            id: Date.now(),
            isEditing: true,
            text: "",
            completed: false
          }
        ]
      };
    case "EDIT_TODO":
      return {
        todos: state.todos.map(todo =>
          todo.id === action.id ? { ...todo, ...action.update } : todo
        )
      };
    case "DELETE_TODO":
      return {
        todos: state.todos.filter(todo => todo.id !== action.id)
      };
    default:
      throw new Error();
  }
}

export default function Todos() {
  const initialState = {
    // todos: [{ id: 1, text: "Finish hooks presentation", completed: false }]
    todos: []
  };
  const [state, dispatch] = useReducer(todosReducer, initialState);

  return (
    <div>
      {!state.todos.length ? (
        <div>Nothing Todo!</div>
      ) : (
        <div>
          {state.todos.map(todo => (
            <div key={todo.id} className="todo">
              <input
                type="checkbox"
                value={todo.completed}
                onChange={() =>
                  dispatch({
                    type: "EDIT_TODO",
                    id: todo.id,
                    update: { completed: !todo.completed }
                  })
                }
              />
              {todo.isEditing ? (
                <input
                  type="text"
                  value={todo.text}
                  onChange={event =>
                    dispatch({
                      type: "EDIT_TODO",
                      id: todo.id,
                      update: { text: event.target.value }
                    })
                  }
                />
              ) : (
                <div>{todo.text}</div>
              )}
              <button
                onClick={() =>
                  dispatch({
                    type: "EDIT_TODO",
                    id: todo.id,
                    update: { isEditing: !todo.isEditing }
                  })
                }
              >
                {todo.isEditing ? "Save" : "Edit"}
              </button>
              <button
                onClick={() => dispatch({ type: "DELETE_TODO", id: todo.id })}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
      <button onClick={() => dispatch({ type: "ADD_TODO" })}>Add Todo</button>
    </div>
  );
}
