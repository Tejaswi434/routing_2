// Write your JS code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import BlogItem from '../BlogItem'

class BlogList extends Component {
  state = {blogsData: [], isTrue: true}

  componentDidMount() {
    this.getBlogList()
  }

  getBlogList = async () => {
    const data = await fetch('https://apis.ccbp.in/blogs')
    const responseOne = await data.json()

    const newData = responseOne.map(response => ({
      author: response.author,
      avatarUrl: response.avatar_url,
      imageUrl: response.image_url,
      title: response.title,
      topic: response.topic,
      id: response.id,
    }))

    this.setState({blogsData: newData, isTrue: false})
  }

  render() {
    const {blogsData, isTrue} = this.state
    return (
      <div>
        {isTrue ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          blogsData.map(each => <BlogItem each={each} key={each.id} />)
        )}
      </div>
    )
  }
}

export default BlogList
