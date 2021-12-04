import './index.css'

const MatchCard = props => {
  const {details} = props
  const {
    competingTeam,
    competingTeamLogo,
    firstInnings,
    manOfTheMatch,
    date,
    matchStatus,
    result,
    secondInnings,
    umpires,
    venue,
  } = details

  return (
    <li>
      <img src={competingTeamLogo} alt={competingTeam} className="image" />
      <p>{competingTeam}</p>
      <p>{result}</p>
      <p>{matchStatus}</p>
    </li>
  )
}
export default MatchCard
