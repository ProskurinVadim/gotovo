import React,{useState,useEffect,useMemo} from "react";
import CalendarHeader from "./CalendarHeader";
import CalendarCells from "./CalendarCells";
import CalendarDays from "./CalendarDays";
import {getUnblockDays,setUnblockDays} from "../../../redux/actions/weddingActions";
import {useDispatch, useSelector} from "react-redux";
import {format,parseISO,isValid} from "date-fns"

const Calendar = () => {
    const [currentMonth,setCurrentMonth] = useState(new Date());
    const [view,setView] = useState("Month");
    const dispatch = useDispatch();
    const applications = useSelector(({applications})=>applications.applications);
    const unBlockDays = useSelector(({weddings})=>weddings.unBlockDays);
    useEffect(()=> {
        dispatch(getUnblockDays())
    },[]);
    const formatData = useMemo(()=>applications.filter(elem => {
        if(elem.weddingDate !=="") {
            const data = format(parseISO(elem.weddingDate), "y MMM");
            const currentData = format(currentMonth, "y MMM");
            return data === currentData && elem
        }
    }),[applications,currentMonth]);
    const formatUnBlockDays = useMemo(()=>unBlockDays.filter(elem => {
        const data = isValid(parseISO(elem.startDate)) && format(parseISO(elem.startDate),"y MMM");
        const currentData = format(currentMonth,"y MMM");
        return data === currentData && elem
    }),[unBlockDays,currentMonth]);
    const handelUnBlockDay =(day,time) => {
        const str = `${currentMonth.getFullYear()}-${currentMonth.getMonth()+1 < 10 ? 0 :""}${currentMonth.getMonth()+1}-${day <10 ? 0 : ""}${day}T${time}`;
        const startData = format(parseISO(str), "yyyy-MM-dd'T'HH:mm:ss.SSSxxx");
        dispatch(setUnblockDays(startData,startData,[...unBlockDays,{startDate :startData ,endDate:startData}]))
    };
    return (
        <div className="calendar">
            <CalendarHeader view={view} setView={setView} currentMonth={currentMonth} setCurrentMonth={setCurrentMonth} />
            {view === "Month" ? <CalendarCells setView={setView} currentMonth={currentMonth} />
                : <CalendarDays onClick={handelUnBlockDay} unBlockDays={formatUnBlockDays} data={formatData} dayNumber={view.split(" число ")[0]} view={view.split(" число ")[1]} />}
        </div>
    );
};

export default Calendar;