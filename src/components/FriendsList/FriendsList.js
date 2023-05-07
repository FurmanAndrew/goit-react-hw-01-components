import PropTypes from 'prop-types';
import FriendsItem from "./FriendsItem";
import css from './FriendsList.module.css';


export const Friends = ({friends}) => {
    // const { avatar, name, isOnline, id} = friends;
    return(<section className={css.friendList}><ul>{friends.map(friend => (<FriendsItem avatar={friend.avatar} name={friend.name} isOnline={friend.isOnline} key={friend.id}></FriendsItem>))}</ul></section>)
    }


Friends.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        key: PropTypes.number,
    }))
}
// Компонент повинен приймати кілька пропів:
// avatar - посилання на аватар
// name - ім'я друга
// isOnline - буль, що сигналізує про стан друга: в мережі або ні.
// Залежно від пропа isOnline, повинен змінюватися колір фону span.status. Це можна зробити за допомогою різних CSS-класів або Styled Components.