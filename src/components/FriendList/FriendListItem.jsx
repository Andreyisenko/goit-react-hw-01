
import css from './FriendList.module.css'
const FriendListItem = ({avatar, name, isOnline}) => {
    
    
    return (
<div className={css.wraperFriendListItem}>
  <img src={avatar} alt={name} width="48" />
  <p  className={css.nameFriendListItem}>{name}</p>
  <p className= {!isOnline ? css["variant"] : css["alert"]}> {isOnline ? "Online " : "Offline"}  </p> 
</div>
    )
}
export default FriendListItem