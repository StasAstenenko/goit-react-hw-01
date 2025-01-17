import FriendListItem from "../FriendListItem/FriendListItem";
import style from "./FriendList.module.css";

const FriendList = ({ friends }) => {
  return (
    <>
      <ul className={style.friendList}>
        {friends.map((friend) => {
          return (
            <li className={style.friendListItem} key={friend.id}>
              <FriendListItem
                name={friend.name}
                avatar={friend.avatar}
                isOnline={friend.isOnline}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default FriendList;
