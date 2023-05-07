import PropTypes from 'prop-types';
import FriendsItem from "./FriendsItem";
import css from './FriendsList.module.css';


export const Friends = ({friends}) => {
    return(<section className={css.friendList}><ul>{friends.map(friend => (<FriendsItem avatar={friend.avatar} name={friend.name} isOnline={friend.isOnline} key={friend.id}></FriendsItem>))}</ul></section>)
    }


Friends.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        key: PropTypes.number,
    }))
}