// import { FC } from "react";
import { VFC } from "react";

// ここにはchildrenがなくても、暗黙的にFCのpropsに入る
type Props = {
  color: string;
  fontSize: string;
};

// 関数コンポーネントの型指定
// ★注意： FCのpropsは暗黙的にchildrenが入る。
// ただしそれは良くないので、react18からは暗黙的に含まなくなる予定
export const Text: VFC<Props> = (props) => {
  const { color, fontSize } = props;
  return <p style={{ color, fontSize }}>テキストです</p>;
  // 同じ名前の場合は省略できるので、上記の書き方になる
  // return <p style={{ color:color, fontsize:fontsize }}>テキストです</p>;
};
