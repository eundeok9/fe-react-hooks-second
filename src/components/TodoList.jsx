import {useState, useEffect} from "react";

function TodoList() {
  const [todos, setTodos] = useState([]); // todo list를 담는 state
  const [inputValue, setInputValue] = useState(""); // 입력한 todo를 담는 state
  const [count, setCount] = useState(0); // 완료한 todo의 개수를 담는 state

  useEffect(() => {
    const data = [
      // 이곳에 프로그램이 처음 렌더링 될 때 표시될 todo list를 {id, text, completed}를 키로 갖는 객체 형식으로 작성해주세요
      /*********************정답 코드*********************/
      {id: 1, text: "산책 가기", completed: false},
      {id: 2, text: "멋사 과제 하기", completed: true},
      {id: 3, text: "야구 보기", completed: false},
      /**************************************************/
    ];
    //이곳에 todos를 변경시키는 코드를 작성해주세요.
    setTodos(data);
  }, []);

  useEffect(() => {
    let n = todos.filter((a) => a.completed).length;
    setCount(n);
  }, [todos]);

  useEffect(() => {
    if (count >= 5) alert("오늘 5개나 완료하셨네요!");
  }, [count]);

  const handleInputChange = (e) => {
    // 이곳에 입력한 todo 내용을 저장하도록 하는 코드를 작성해주세요.
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
    // 이곳에 변경된 completed가 todos에 반영되도록 하는 코드를 작성해주세요
    setTodos(updatedTodos);
  };

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
