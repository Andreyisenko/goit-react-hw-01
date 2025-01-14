import css from './Profile.module.css';
const Profile = ({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) => {
  return (
    <div className={css.wraperAvatar}>
      <div className={css.wraperAvatarNext}>
        <img className={css.imag} src={image} alt={name} />
        <p className={css.nameProfile}>{name}</p>
        <p className={css.parProfile}>{tag}</p>
        <p className={css.parProfile}> {location}</p>
      </div>

      <ul className={css.listProfile}>
        <li className={css.listItemProfile}>
          <span>Followers</span>

          <span className={css.listItemSpnProfile}>{followers}</span>
        </li>
        <li className={css.listItemProfile}>
          <span>Views</span>

          <span className={css.listItemSpnProfile}>{views}</span>
        </li>
        <li className={css.listItemProfile}>
          <span>Likes</span>

          <span className={css.listItemSpnProfile}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};
export default Profile;
