import React,{useState} from "react";
import Button from "../Button";
const LocalModal = ({elem,children,onClick=()=>null,}) => {
    const [open,setOpen] = useState(false);
    const handelClick = () => {
        setOpen(false);
        onClick(elem._id);
    };
    return  (
        <div style={{position:"relative"}} >
            <span onClick={()=>setOpen(true)}>
                {children}
            </span>
            {open &&
                <div className="local-modal" style={{position : "absolute"}}>
                    <p>
                        Бажаєте змінити загс на {elem.name}
                    </p>
                    <div className="application-buttons">
                        <Button className="button-common" text="Так" onClick={handelClick}/>
                        <Button className="button-common button-common-dangerous" text="Ні" onClick={()=>setOpen(false)}/>
                    </div>
                </div>
            }
        </div>
    )
};

export default LocalModal
