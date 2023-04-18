import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const Statistics = (props) => {
    const { title, stats } = props;
    // const { id, label, percentage} = stats;
    return(<section className={css.statistics}>
  <h2 className={css.title}>{title ? 'Upload stats' : null } </h2>
  <ul className={css.statList}>
    {stats.map(stat => 
    (<li className={css.item} style={{backgroundColor: getRandomHexColor()}} key={stat.id}>
      <span className="label">{stat.label}</span>
      <span className="percentage">{stat.percentage}%</span>
    </li>))}
  </ul>
</section>)
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

Statistics.propTypes = {
    title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
          id:PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired
        })
        
    )
}