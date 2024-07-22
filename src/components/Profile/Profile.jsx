import style from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={style.container}>
      <div className={style.user}>
        <img
          className={style.profileImg}
          src={image}
          alt="User avatar"
          width={100}
          height={100}
        />
        <p className={style.name}>{name}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>
      <ul className={style.list}>
        <li className={style.liElem}>
          <span className={style.views}>Followers</span>
          <span className={style.stats}>{stats.followers}</span>
        </li>
        <li className={style.liElem}>
          <span className={style.views}>Views</span>
          <span className={style.stats}>{stats.views}</span>
        </li>
        <li className={style.liElem}>
          <span className={style.views}>Likes</span>
          <span className={style.stats}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
