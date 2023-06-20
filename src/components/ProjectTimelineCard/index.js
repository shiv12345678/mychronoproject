import { GoPrimitiveDot } from 'react-icons/go'
import './index.css'

const ProjectTimelineCard = props => {
    const {projectItemList}=props
    const {projectTitle, description, duration, imageUrl,projectUrl}=projectItemList
    
    return(
        <>
        <img className="image" src={imageUrl} alt={projectTitle} />
        <div className='top-container'>
                <h1>{projectTitle}</h1>
                <div className="duration-container">
                <GoPrimitiveDot size={20} />
                <p className="duration">{duration}</p>
                </div>
        </div>
            <p className="desc">{description}</p>
            <a href={projectUrl} className='anchor'>visit</a>
            
        </>
    )
}

export default ProjectTimelineCard
