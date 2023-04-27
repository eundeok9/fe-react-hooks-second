import {useState, useEffect} from "react";

function TodoList() {
  const [todos, setTodos] = useState([]); // todo list를 담음
  const [inputValue, setInputValue] = useState(""); // 입력한 todo를 담음

  useEffect(() => {
    const data = [
      {id: 1, text: "산책 가기", completed: false},
      {id: 2, text: "멋사 과제 하기", completed: true},
      {id: 3, text: "야구 보기", completed: false},
    ];
    setTodos(data);
  }, []);

  // 입력한 값 저장하는거
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // 추가 버튼 누르면 todos에 새로 입력한 todo가 반영됨.
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newTodo = {id: Date.now(), text: inputValue, completed: false};
    setTodos([...todos, newTodo]);
    setInputValue("");
  };

  // 완료한 todo 를 클릭하면 completed를 true로 변경
  const handleTodo = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {...todo, completed: !todo.completed};
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <div className="todolist">
      <h1>Todo List</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span onClick={() => handleTodo(todo.id)} style={{textDecoration: todo.completed ? "line-through" : "none"}}>
              {todo.text}
            </span>
          </li>
        ))}
      </ul>
      <form onSubmit={handleFormSubmit}>
        <input type="text" value={inputValue} onChange={handleInputChange} />
        <button type="submit">추가</button>
      </form>
    </div>
  );
}

export default TodoList;
