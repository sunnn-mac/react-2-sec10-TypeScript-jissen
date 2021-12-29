import { VFC } from "react";
import { User } from "./types/user";

type Props = {
  user: User;
};

//  join 配列を　/ で連結する joinはjavascriptの関数
// ? : オプショナルチェイニング オブジェクトの要素がない時点で、
//     undefinedを返して、例外にならないようにする
export const UserProfile: VFC<Props> = (props) => {
  const { user } = props;
  return (
    <dl>
      <dt>名前</dt>
      <dd>{user.name}</dd>
      <dt>趣味</dt>
      <dd>{user.hobbies?.join("　/　")}</dd>
    </dl>
  );
};
