import React,{useRef,useEffect,useCallback} from "react";
import Button from "../Button";

const Modal = ({okFunction,okText,cancelFunction,hideFunction,cancelText,children,className}) => {
    const modalWrapper = useRef(null);
    useEffect(()=>{
        const outsideClick = ((e)=> {
            e.target === modalWrapper.current && hideFunction();
        });
      modalWrapper.current.addEventListener("mousedown",outsideClick);
        return () => {
            modalWrapper.current && modalWrapper.current.removeEventListener("mousedown",outsideClick)
        }
    },[modalWrapper]);
    return (
        <div className="modal-container" ref={modalWrapper}>
            <div className={"modal "+className}>
                {children}
                <div className="modal-buttons">
                    <Button
                        onClick={okFunction}
                        text={okText}
                        preventDefault
                        className="button-common"
                    />
                    { cancelText &&
                        <Button
                            onClick={cancelFunction}
                            text={cancelText}
                            preventDefault
                            className="button-common button-common-dangerous"
                        />
                    }
                </div>
            </div>
        </div>
    )
};

export default Modal