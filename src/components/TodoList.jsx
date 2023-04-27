import {useState, useEffect} from "react";

function TodoList() {
  const [todos, setTodos] = useState([]); // todo list를 담는 state
  const [inputValue, setInputValue] = useState(""); // 입력한 todo를 담는 state
  const [count, setCount] = useState(0); // 완료한 todo의 개수를 담는 state

  useEffect(() => {
    const data = [
      {id: 1, text: "산책 가기", completed: false},
      {id: 2, text: "멋사 과제", completed: true},
      {id: 3, text: "야구 보기", completed: false},
    ];

    setTodos(data);
  }, []);

  useEffect(() => {
    let n = 0;
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].completed) n++;
    }
    setCount(n);
  }, [todos]);

  useEffect(() => {
    if (count === todos.length && count > 0) alert("오늘 할 일을 모두 완료하셨네요!");
  }, [count]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault(); // 추가 버튼 누를 시 자동으로 새로고침 되는 것을 방지
    const newTodo = {id: Date.now(), text: inputValue, completed: false};
    setTodos([...todos, newTodo]);
    setInputValue("");
  };

  const handleTodo = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {...todo, completed: !todo.completed};
      }
      return todo;
    });

    setTodos(updatedTodos);
  };

  // 어른 사자 과제 답
  // useEffect(() => {
  //   let n = todos.filter((a) => a.completed).length;
  //   setCount(n);
  // }, [todos]);

  // const handleDelete = (id) => {
  //   const notDeletedTodos = todos.filter((a) => a.id !== id);
  //   setTodos(notDeletedTodos);
  // };

  return (
    <div className="todolist">
      <h1>Todo List</h1>
      <p>현재 {count}개 완료</p>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span onClick={() => handleTodo(todo.id)} style={{textDecoration: todo.completed ? "line-through" : "none"}}>
              {todo.text}
            </span>
            {/* 어른 사자 과제 답 */}
            {/* <button onClick={() => handleDelete(todo.id)}>삭제</button> */}
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
