import PropTypes from 'prop-types';
import css from './FriendsList.module.css';


export const Friends = ({friends}) => {
    // const { avatar, name, isOnline, id} = friends;
    return(<section className={css.friendList}><ul>{friends.map(({ avatar, name, isOnline, id}) => (<li className={css.item} key={id}>
        <span className={`${css.status} ${isOnline ? css.isOnline : css.isOfline}`}></span>
  <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
        <p className="name">{ name}</p>
</li>))}</ul></section>)
}


Friends.propTypes = {
    props: PropTypes.arrayOf(
        PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool,
        id: PropTypes.number.isRequired,
    }),
  )
}
// Компонент повинен приймати кілька пропів:

// avatar - посилання на аватар
// name - ім'я друга
// isOnline - буль, що сигналізує про стан друга: в мережі або ні.
// Залежно від пропа isOnline, повинен змінюватися колір фону span.status. Це можна зробити за допомогою різних CSS-класів або Styled Components.