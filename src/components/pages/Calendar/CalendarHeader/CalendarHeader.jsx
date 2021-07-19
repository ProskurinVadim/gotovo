import React from "react";
import {format,getYear} from "date-fns"
import ChervonRight from "../../../icons/ChervonRight";
import ChervonLeft from "../../../icons/ChervonLeft";

const CalendarHeader = ({setCurrentMonth,currentMonth,view,setView}) => {
    const dateFormat = "MMMM yyyy";
    const nextMonth = () => {
        setCurrentMonth(new Date(getYear(currentMonth),currentMonth.getMonth()+2,0))
    };
    const prevMonth = () => {
        setCurrentMonth(new Date(getYear(currentMonth),currentMonth.getMonth(),0))
    };
    return (
        <>
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
            {view !== "Month"&&
                <div className="calendar-header">
                    <p  className="calendar-header-title" onClick={()=>setView("Month")}>Назад</p>
                    <p  className="calendar-header-title">{view}</p>
                </div>
            }
        </>
    );
};

export default CalendarHeader
