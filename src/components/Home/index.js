import './index.css'
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'

class Home extends Component {
  state = {
    status: 'initial',
    list: [],
  }

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    this.setState({
      status: 'progress',
    })
    const url = 'https://apis.ccbp.in/ipl'
    const options = {
      method: 'GET',
    }
    const response = await fetch(url, options)
    const fetchedData = await response.json()
    const updatedData = fetchedData.teams.map(each => ({
      id: each.id,
      name: each.name,
      teamImageUrl: each.team_image_url,
    }))

    this.setState({
      list: updatedData,
      status: 'success',
    })
  }

  getList = list => (
    <ul className="list-container">
      {list.map(each => (
        <TeamCard key={each.id} details={each} />
      ))}
    </ul>
  )

  loadingStatus = () => {
    const {status, list} = this.state
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
    return (
      <div className="con">
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="image"
          />
          <h1>IPL Dashboard</h1>
        </div>
        <div>{this.loadingStatus()}</div>
      </div>
    )
  }
}

export default Home
