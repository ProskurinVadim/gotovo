import React,{useState} from "react";
import CalendarHeader from "./CalendarHeader";
import CalendarCells from "./CalendarCells";
import dateFns from "date-fns";

const Calendar = () => {
    const [currentMonth,setCurrentMonth] = useState(new Date());
    const [selectedDate,setSelectedDate] = useState(new Date());
    const onDateClick = day => {
        setSelectedDate(day);
    };
    return (
        <div className="calendar">
            <CalendarHeader currentMonth={currentMonth} setCurrentMonth={setCurrentMonth} />
            <CalendarCells currentMonth={currentMonth} selectedDate={selectedDate} onDateClick={onDateClick}/>
        </div>
    );
};

export default Calendar;