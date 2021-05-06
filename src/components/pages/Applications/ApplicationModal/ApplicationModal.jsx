import React from "react";
import {useSelector} from "react-redux";
import {useInput} from "../../../../hooks/useInput";
import Modal from "../../../common/Modal"
import { DatePicker } from 'antd';
import moment from "moment";
import ChangeableInput from "../../../common/ChangeableInput";
import {getStatusColor} from "../../../../utils/getStatusColor"
const ApplicationModal = ({hideClick,okClick,cancelClick}) => {
    const {pib,data,pack,status} = useSelector(({applications}) => applications.currentApplication);
    const {value,reset:restManValue,bind:bindManValue} = useInput(pib);
    return (
        <Modal
            okText="Відправити"
            cancelText="Закрити"
            okFunction={okClick}
            hideFunction={hideClick}
            cancelFunction={cancelClick}
            className={`application-modal `}
        >
            <p className="application-header">Контактна карточка</p>
            <div className="application-field">
                <p className="application-text">ПІБ нареченого та нареченої:</p>
                <ChangeableInput className="application-input common-input" value={value} {...bindManValue} type="text"/>
            </div>
            <div className="application-field">
                <p className="application-text">Дата заключення шлюбу:</p>
                <DatePicker defaultValue={moment(data, "DD-MM-YYYY")} className="application-data-picker"/>
            </div>
            <div className="application-field">
                <p className="application-text">Статус заяви:</p>
                <p className="application-status">{status}</p>
                <p className="application-text">Пакет послуг:</p>
                <p className="application-pack">{pack}</p>
            </div>
        </Modal>
    )
};

export default ApplicationModal