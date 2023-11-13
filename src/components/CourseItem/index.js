import {Link} from 'react-router-dom'

import './index.css'

const CourseItem = props => {
  const {courseItemDetails} = props
  const {id, name, logoUrl} = courseItemDetails

  return (
    <Link className="anchor-link" to={`/courses/${id}`}>
      <li className="list-item">
        <img src={logoUrl} alt={name} className="course-logo" />
        <p className="course-name">{name}</p>
      </li>
    </Link>
  )
}

export default CourseItem
