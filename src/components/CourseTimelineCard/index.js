import {GoPrimitiveDot} from 'react-icons/go'
import './index.css'

const CourseTimelineCard = props => {
    const {courseItemList}=props
    const {id, courseTitle, description,tagsList,duration}=courseItemList
    return(
        <>
            <div className='top-container'>
                <h1>{courseTitle}</h1>
                <div className="duration-container">
                <GoPrimitiveDot size={20} />
                <p className="duration">{duration}</p>
                </div>
                
            </div>
            <p>{description}</p>
            <ul className='tag-container'>{tagsList.map(eachTag=>
            <li key={eachTag.id} className='tag-list'>{eachTag.name}</li>)
            }</ul>
            
        </>
    )
}

export default CourseTimelineCard
