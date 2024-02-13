import './index.css'

import {Link} from 'react-router-dom'

const BlogItem = props => {
  const {each} = props
  const {id, imageUrl, topic, title, avatarUrl, author} = each

  return (
    <Link to={`/blogs/${id}`}>
      {' '}
      <div>
        <div className="main_1">
          <div className="sub_1">
            <img src={imageUrl} alt={title} className="sizing_1" />
          </div>
          <div className="sub_2">
            <h1>{topic}</h1>
            <h1>{title}</h1>
            <div className="sub_3">
              <img src={avatarUrl} alt={title} className="sizing_2" />
              <p>{author}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default BlogItem
