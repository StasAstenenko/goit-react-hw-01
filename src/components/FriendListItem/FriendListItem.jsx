import style from "./FriendListItem.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={style.friend}>
      <img className={style.avatar} src={avatar} alt="Avatar" width="48" />
      <p className={style.name}>{name}</p>
      <p
        className={`${style.status} ${isOnline ? style.online : style.offline}`}
      >
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
};

export default FriendListItem;
