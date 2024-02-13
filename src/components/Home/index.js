import './index.css'

import UserInfo from '../UserInfo'

import BlogList from '../BlogList'

const Home = () => (
  <div className="home-container">
    <div>
      <UserInfo />{' '}
    </div>

    <br />
    <div className="background">
      <BlogList />
    </div>
  </div>
)

export default Home
