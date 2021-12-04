import './index.css'

const LatestMatch = props => {
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
    <div className="latest">
      <div>
        <p>{competingTeam}</p>
        <p>{date}</p>
        <p>{venue}</p>
        <p>{result}</p>
      </div>
      <div>
        <img src={competingTeamLogo} alt={competingTeam} className="image" />
      </div>
      <div>
        <p>first Innings</p>
        <p>{firstInnings}</p>
        <p>second Innings</p>
        <p>{secondInnings}</p>
        <p>Man Of The MAtch</p>
        <p>{manOfTheMatch}</p>
        <p>Umpires</p>
        <p>{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
