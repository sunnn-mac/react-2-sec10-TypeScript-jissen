import { VFC } from "react";
import { TodoType } from "./types/todo";

// propsに型定義
// 共通の型の中から、このコンポーネントで必要なものを指定
export const Todo: VFC<Omit<TodoType, "id">> = (props) =>
  // propsの型定義　。上記は関数型定義でprops　の型定義。関数型定義にすべき。
  // props: Omit<TodoType, "id"> //指定のみ不要
  // props: Pick<TodoType, "userId" | "title" | "completed"> //必要なものを指定
  // props: TodoType // 型のメンバ全部が必要な場合
  {
    // ない場合の初期値設定
    const { title, userId, completed = true } = props;
    const completeMark = completed ? "[完]" : "[未]";
    return <p>{`${completeMark}${title}(ユーザー： ${userId}`}</p>;
  };
