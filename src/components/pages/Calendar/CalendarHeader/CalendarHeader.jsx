import React from "react";
import {format,getYear} from "date-fns"
import ChervonRight from "../../../icons/Plus";
import ChervonLeft from "../../../icons/ChervonLeft";

const CalendarHeader = ({setCurrentMonth,currentMonth}) => {
    const dateFormat = "MMMM yyyy";
    const nextMonth = () => {
        setCurrentMonth(new Date(getYear(currentMonth),currentMonth.getMonth()+2,0))
    };
    const prevMonth = () => {
        setCurrentMonth(new Date(getYear(currentMonth),currentMonth.getMonth(),0))
    };
    console.log(currentMonth )
    return (
        <div className="calendar-header">
            <div className="calendar-header-icon" onClick={prevMonth}>
                <ChervonLeft />
            </div>
            <h3 className="calendar-header-title">
                {format(currentMonth, dateFormat)}
            </h3>
            <div className="calendar-header-icon" onClick={nextMonth}>
                <ChervonRight />
            </div>
        </div>
    );
};

export default CalendarHeader
