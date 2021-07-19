import React from "react";
import {format, parseISO} from "date-fns";

const day = ["00:00","00:30","01:00","01:30","02:00","02:30","03:00","03:30","04:00","04:30","05:00","05:30","06:00"
    ,"06:30","07:00","07:30","08:00","08:30","09:00","09:30","10:00","10:30","11:00","11:30","12:00","12:30","13:00","13:30","14:00"
    ,"14:30","15:00","15:30","16:00","16:30","17:00","17:30","18:00","18:30","19:00","19:30","20:00","20:30","21:00"
    ,"21:30","22:00","22:30","23:00","23:30"];
const standartWorkHours = (day) => {
    switch (day) {
        case "ПН" : {
            return {disabled : true}
        }
        case "ВТ" : {
            return {startDate : "10:00",endDate:"18:30"}
        }
        case "СР" : {
            return {startDate : "10:00",endDate:"16:30"}
        }
        case "ЧТ" : {
            return {startDate : "10:00",endDate:"16:30"}
        }
        case "ПТ" : {
            return {startDate : "10:00",endDate:"16:30"}
        }
        case "СБ" : {
            return {startDate : "10:00",endDate:"14:30"}
        }
        case "ВС" : {
            return {startDate : "10:00",endDate:"15:00"}
        }
    }
};
const CalendarDays = ({view,data,dayNumber,unBlockDays,onClick}) => {
    const range = standartWorkHours(view);
    const validation = (data) => {
        const date = unBlockDays.map(elem => {
            format(parseISO(elem.startDate),"d HH:mm").split(" ");
            return {
                startDate : format(parseISO(elem.startDate),"d HH:mm").split(" "),
                endDate : format(parseISO(elem.endDate),"d HH:mm").split(" ")
            }
        }).filter(elem => {
            console.log(elem,dayNumber)
            return elem.startDate[0] === dayNumber
        }).map(elem => {
            return {startDate : elem.startDate[1],endDate:elem.endDate[1]}
        });
        if(date.length) {
            const flag = date.filter(elem => {
                console.log(elem,data)
                return (elem.startDate===data && elem.endDate === data)
            });
            console.log(flag)
            return flag.length
        }
        else if(range.disabled) return false;
        else if(range.startDate<=data && range.endDate >= data) return true;
        else return false
    };
    const checkValidation = elem => (
        data.map(application => {
            const date = format(parseISO(application.weddingDate),"d HH:mm").split(" ");
            return dayNumber === date[0] && elem === date[1]
        }).indexOf(true)
    );
    return (
        <ul className="calendar-days-list">
            {
                day.map((elem,i) => {
                    const disable = validation(elem);
                    const checked = checkValidation(elem);
                    return (
                        <li className={`calendar-days-list-item ${!disable ? "disable" : ""}  ${!checked ? "checked" : ""}`}
                            onClick={()=>!disable && onClick(dayNumber,elem)}
                        >
                            {elem}
                            {!checked && " Дата зарезервована"}
                        </li>
                    )
                    }
                )
            }
        </ul>
    )
};

export default CalendarDays