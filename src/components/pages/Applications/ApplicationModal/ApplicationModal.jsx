import React from "react";
import {useSelector,useDispatch} from "react-redux";
import {useInput} from "../../../../hooks/useInput";
import Modal from "../../../common/Modal"
import { DatePicker } from 'antd';
import moment from "moment";
import {addApplication} from "../../../../redux/actions/applicationsActions"
import Input from "../../../common/Input";
const ApplicationModal = ({cancelClick,length}) => {
    const {pib,data,pack,status} = useSelector(({applications}) => applications.currentApplication);
    const dispatch = useDispatch();
    const {value:manPIBValue,reset:restManPIB,bind:bindManPIB} = useInput();
    const {value:womanPIBValue,reset:restWomanPIB,bind:bindWomanPIB} = useInput();
    const {value:phoneValue,reset:restPhone,bind:bindPhone} = useInput();
    const {value:dataValue,reset:restData,bind:bindData} = useInput();
    const {value:packValue,reset:restPack,bind:bindPack} = useInput();
    const {value:commentValue,reset:restComment,bind:bindComment} = useInput();
    const handelClick = () => {
        const application = {
            data: dataValue,
            pib: `${manPIBValue} та ${womanPIBValue} `,
            pack: packValue,
            phone: phoneValue,
            status: "нова",
            comments: commentValue,
            id:length
        };
        dispatch(addApplication(application))
    };
    return (
        <Modal
            okText="Відправити"
            cancelText="Закрити"
            okFunction={handelClick}
            hideFunction={cancelClick}
            cancelFunction={cancelClick}
            className="application-modal"
        >
            <div className="modal-inputs-list">
                <Input placeholder="Введіть ПІБ нареченого" className="authorization-form-input common-input" {...bindManPIB}  type="text"/>
                <Input placeholder="ВведітьПІБ нареченої" className="authorization-form-input common-input" {...bindWomanPIB}  type="text"/>
                <Input placeholder="Введіть дату" className="authorization-form-input common-input" {...bindData}  type="text"/>
                <Input placeholder="Введіть телефон" className="authorization-form-input common-input" {...bindPhone}  type="text"/>
                <Input placeholder="Введіть пакет послуг" className="authorization-form-input common-input" {...bindPack}  type="text"/>
                <Input placeholder="Введіть коментарій" className="authorization-form-input common-input" {...bindComment}  type="text"/>
            </div>
        </Modal>
    )
};

export default ApplicationModal