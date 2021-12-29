import axios from "axios";
import { useState } from "react";
import "./styles.css";
import { Todo } from "./Todo";
import { TodoType } from "./types/todo";
import { Text } from "./Text";

export default function App() {
  // todosを[](空配列)で初期化
  // todosの型を<Array<TodoType>>　で定義：TodoTypeの配列を示す
  const [todos, setTodos] = useState<Array<TodoType>>([]);

  const onClickFetchData = () => {
    // テストデータサイトから、ダミーデータ取得
    // 取得データの型を<Array<TodoType>>　で定義：TodoTypeの配列を示す
    axios
      .get<Array<TodoType>>("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        // res.data.map((todo)=> todo.title)
        setTodos(res.data);
        // setTodos("aa");
      });
  };

  return (
    <div className="App">
      <Text color="red" fontSize="30px" />
      <button onClick={onClickFetchData}>データ取得</button>
      {todos.map((todo) => (
        // mapの中なので、keyが必要
        <Todo
          key={todo.id}
          title={todo.title}
          userId={todo.userId}
          completed={todo.completed}
        />
      ))}
    </div>
  );
}
