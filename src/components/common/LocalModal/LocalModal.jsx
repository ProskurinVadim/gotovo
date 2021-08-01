import React,{useState} from "react";
import Button from "../Button";
const LocalModal = ({children,onCancel=()=>null,onSubmit=()=>null,initialOpen,text}) => {
    const [open,setOpen] = useState(initialOpen);
    const handelClick = () => {
        setOpen(false);
        onSubmit();
    };
    const handelCancel = () => {
        onCancel();
        setOpen(false);
    };
    return  (
        <div style={{position:"relative"}} >
            <span onClick={()=>setOpen(true)}>
                {children}
            </span>
            {open &&
                <div className="local-modal" style={{position : "absolute"}}>
                    <p>
                        {text}
                    </p>
                    <div className="application-buttons">
                        <Button className="button-common" text="Так" onClick={handelClick}/>
                        <Button className="button-common button-common-dangerous" text="Ні" onClick={handelCancel}/>
                    </div>
                </div>
            }
        </div>
    )
};

export default LocalModal
