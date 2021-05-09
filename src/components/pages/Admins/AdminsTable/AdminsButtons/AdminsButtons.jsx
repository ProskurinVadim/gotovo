import React from "react";
import Button from "../../../../common/Button";
import {useDispatch} from "react-redux";
import {deleteUser} from "../../../../../redux/actions/authActions"

const AdminsButtons = ({data}) => {
    console.log(data)
    const dispatch = useDispatch();
    const deleteAdmin = () => {
        dispatch(deleteUser(data))
    };
    return (
        <div>
            <Button text="Удалить" onClick={deleteAdmin}/>
            {/*<Button text="Изменить"/>*/}
        </div>
    )
};

export default  AdminsButtons