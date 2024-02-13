import {Component} from 'react'

import './index.css'
import Loader from 'react-loader-spinner'

class BlogItemDetails extends Component {
  state = {blogsData: {}, isTrue: true}

  componentDidMount() {
    this.gettingItemData()
  }

  gettingItemData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    console.log(id)
    const data = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const newData = await data.json()
    console.log(newData)
    const updatedData = {
      title: newData.title,
      imageUrl: newData.image_url,
      content: newData.content,
      avatarUrl: newData.avatar_url,
      author: newData.author,
    }
    console.log(updatedData)
    this.setState({blogsData: updatedData, isTrue: false})
  }

  renderBlogItemDetails = () => {
    const {blogsData} = this.state
    const {title, imageUrl, content, avatarUrl, author} = blogsData
    return (
      <div className="main">
        <h1>{title}</h1>
        <div className="rowing">
          <img src={avatarUrl} className="avatarsize" alt={title} />
          <p className="para">{author}</p>
        </div>
        <div>
          <img src={imageUrl} alt={title} className="size" />
        </div>
        <p className="para">{content}</p>
      </div>
    )
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
          this.renderBlogItemDetails()
        )}
      </div>
    )
  }
}

export default BlogItemDetails
