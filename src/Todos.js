import React, { useEffect, useReducer } from "react";

function todosReducer(state, action) {
  switch (action.type) {
    case "ADD_TODO":
      const id = Date.now();
      return {
        selectedId: id,
        todos: [
          ...state.todos,
          {
            id,
            selectedId: id,
            isEditing: true,
            text: "",
            completed: false
          }
        ]
      };
    case "EDIT_TODO":
      return {
        selectedId: action.id,
        todos: state.todos.map(todo =>
          todo.id === action.id ? { ...todo, ...action.update } : todo
        )
      };
    case "DELETE_TODO":
      return {
        selectedId: null,
        todos: state.todos.filter(todo => todo.id !== action.id)
      };
    default:
      throw new Error();
  }
}

function Todos() {
  const initialState = {
    selectedId: null,
    todos: []
  };
  const [state, dispatch] = useReducer(todosReducer, initialState);

  useEffect(() => {
    if (state.selectedId) {
      alert(`Selected id is ${state.selectedId}`);
    }
  }, [state.selectedId]);

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
              {!todo.isEditing ? (
                <div>{todo.text}</div>
              ) : (
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

export default Todos;
