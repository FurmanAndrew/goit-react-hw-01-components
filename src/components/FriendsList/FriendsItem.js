import PropTypes from 'prop-types';
import css from './FriendsList.module.css';

 const  FriendsItem = ({ avatar, name, isOnline}) => {
    return (<li className={css.item}>
        <span className={`${css.status} ${isOnline ? css.isOnline : css.isOfline}`}></span>
  <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
        <p className="name">{ name}</p>
</li>)
}

FriendsItem.propTypes = {
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool,
}

export default FriendsItem
