import DayHourSection from "./styleSection";
import HourBox from "./styleHourBox";

import { Link } from "react-router-dom";

export default function SectionDayHour(props){
    const [weekday, date, showtimes] = props.children;
    const listShowtimes = showtimes.map((showdata)=>
        <Link to={"/seats/"+showdata.id}>
            <div key={showdata.id}>{showdata.name}</div>
        </Link>
            
       
    );
    return(
        <DayHourSection>
            <p className="day">{weekday} - {date}</p>
            <HourBox>
                {listShowtimes}
            </HourBox>
        </DayHourSection>
    );

}
