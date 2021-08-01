import React,{useCallback, useState} from "react";
const planArr = ["BASIC" ,"STANDARD","PREMIUM"];

const Plan = ({plan,setPlan,className=""}) => {
    const [open,setOpen] = useState(false);
    const toggleOpen = useCallback(()=>{
        setOpen(!open)
    },[open]);
    const handelSet = useCallback((name) => {
        setPlan(name);
        setOpen(false);
    },[]);
    return (
        <>
            <p className={`table-status ${className}`} onClick={toggleOpen}>{plan}</p>
            {open &&
                <ul className="table-status-list" style={{left:"63%", top: "69%"}}>
                    {
                        planArr.map((elem,i) => <li key={`plan-item-${i}`} onClick={()=>handelSet(elem)} className="table-status-list-item" >{elem}</li>)
                    }
                </ul>
            }
        </>

    )
};

export default Plan