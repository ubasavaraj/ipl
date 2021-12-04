import {Component} from 'react'
import './index.css'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

class TeamMatches extends Component {
  state = {
    status: 'initial',
    latestlist: [],
    recentlist: [],
    bannerUrl: '',
  }

  componentDidMount() {
    this.getData()
  }

  updateData = list => ({
    competingTeam: list.competing_team,
    competingTeamLogo: list.competing_team_logo,
    firstInnings: list.first_innings,
    date: list.date,
    id: list.id,
    result: list.result,
    venue: list.venue,
    umpires: list.umpires,
    manOfTheMatch: list.man_of_the_match,
    matchStatus: list.match_status,
    secondInnings: list.second_innings,
  })

  getData = async () => {
    this.setState({
      status: 'progress',
    })
    const {match} = this.props
    const {params} = match
    const {id} = params
    const url = `https://apis.ccbp.in/ipl/${id}`
    const options = {
      method: 'GET',
    }
    const response = await fetch(url, options)
    const fetchedData = await response.json()
    console.log(fetchedData)
    const updatedUrl = {
      teamBannerUrl: fetchedData.team_banner_url,
    }

    const updatedLatestData = this.updateData(fetchedData.latest_match_details)
    const updatedRecentData = fetchedData.recent_matches.map(each =>
      this.updateData(each),
    )
    this.setState({
      latestlist: updatedLatestData,
      recentlist: updatedRecentData,
      bannerUrl: updatedUrl.teamBannerUrl,
      status: 'success',
    })
    console.log(updatedUrl)
    console.log(updatedLatestData)
    console.log(updatedRecentData)
  }

  getList = list => (
    <ul className="list-container">
      {list.map(each => (
        <MatchCard key={each.id} details={each} />
      ))}
    </ul>
  )

  loadingStatus = list => {
    const {status} = this.state
    switch (status) {
      case 'success':
        return this.getList(list)
      case 'progress':
        return this.loader()
      default:
        return null
    }
  }

  loader = () => (
    <div testid="loader">
      <Loader type="Oval" color="#ffffff" height={50} width={50} />
    </div>
  )

  render() {
    const {latestlist, recentlist, bannerUrl} = this.state
    console.log(bannerUrl)
    return (
      <div>
        <div>
          <img src={bannerUrl} alt="team banner" />
        </div>
        <div>
          <h1>Latest Matches</h1>

          <LatestMatch key={latestlist.id} details={latestlist} />
        </div>
        <div>{this.loadingStatus(recentlist)}</div>
      </div>
    )
  }
}

export default TeamMatches
