import {
    startOfMonth,
    endOfMonth,
    startOfWeek,
    endOfWeek,
    format,
    isSameMonth,
    isSameDay,
    parse,
    addDays,
    getDaysInMonth,
    getYear,
    getMonth,
    getDay,
    getDate
} from "date-fns";
const daysNames = ["ПН","ВТ","СР","ЧТ","ПТ","СБ","ВС"];
import React from "react";
const CalendarCells = ({currentMonth, selectedDate,onDateClick}) => {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd =  endOfMonth(monthStart);
    const dayInMonth = getDaysInMonth(currentMonth);
    const monthBefore = new Date(getYear(currentMonth),getMonth(currentMonth),0);
    console.log(monthBefore)
    const startDate =  startOfWeek(monthStart);
    console.log(monthStart)
    const dayBeforeMonth = getDay(monthStart) === 0 ?  getDay(monthStart) : 7;
    console.log(dayBeforeMonth);
    const days = [];
    let day = startDate;
    console.log(monthBefore.getDate());

    for (let i = 1; i <= dayInMonth+dayBeforeMonth; i++) {
            if(i<=dayBeforeMonth){
                day = new Date(getYear(monthBefore),monthBefore.getMonth(),monthBefore.getDate()-dayBeforeMonth+i+1);
                console.log(i,day)
            }
            if(i>dayBeforeMonth && i <=dayInMonth+dayBeforeMonth) day = new Date(getYear(currentMonth),currentMonth.getMonth(),i-dayBeforeMonth+1);
            days.push(
                <div
                    data-date={day}
                    className={`calendar-body-cell ${
                        i <= getDate(currentMonth)+dayBeforeMonth
                            ? "disabled"
                            : isSameDay(day, selectedDate) ? "selected" : ""
                        }`}
                    key={day}
                >
                    {i <=7 && <p className="calendar-day">{daysNames[i-1]}</p>}
                    <span className="number">
                        {day.getDate()}
                    </span>
                    <span className="bg">{day.getDate()}</span>
                </div>
            );
    }
    return <div className="calendar-body">{days}</div>;
};

export default CalendarCells