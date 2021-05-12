import React from "react";
import Button from "../../../../common/Button";
import {useDispatch} from "react-redux";
import {deleteAdmin} from "../../../../../redux/actions/adminsAction"

const AdminsButtons = ({data}) => {
    console.log(data)
    const dispatch = useDispatch();
    const deleteClick = () => {
        dispatch(deleteAdmin(data))
    };
    return (
        <div>
            <Button text="Удалить" onClick={deleteClick}/>
            {/*<Button text="Изменить"/>*/}
        </div>
    )
};

export default  AdminsButtons