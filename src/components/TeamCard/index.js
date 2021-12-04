import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {details} = props
  const {id, name, teamImageUrl} = details

  return (
    <Link to={`/team-matches/${id}`}>
      <li>
        <div>
          <img src={teamImageUrl} alt={name} className="image" />
          <p>{name}</p>
        </div>
      </li>
    </Link>
  )
}

export default TeamCard
