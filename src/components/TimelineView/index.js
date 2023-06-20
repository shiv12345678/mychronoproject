import { Chrono } from "react-chrono";
import CourseTimelineCard from "../CourseTimelineCard";
import ProjectTimelineCard from "../ProjectTimelineCard";
import "./index.css";

const TimelineView = (props) => {
  const { timelineItemsList } = props;

  const renderTimelineCardView = (item) => {
    if (item.categoryId === "COURSE") {
      return <CourseTimelineCard key={item.id} courseItemList={item} />;
    } else {
      return <ProjectTimelineCard key={item.id} projectItemList={item} />;
    }
  };

  return (
    <div className="timeline-container">
      <p className="home-initial">MY JOURNEY OF</p>
      <h1 className="heading">CCBP 4.0</h1>
      <div className="chrono-container">
        <Chrono theme={{secondary:'white'}} items={timelineItemsList} mode="VERTICAL_ALTERNATING">
          {timelineItemsList.map((item) => renderTimelineCardView(item))}
        </Chrono>
      </div>
    </div>
  );
};

export default TimelineView;
