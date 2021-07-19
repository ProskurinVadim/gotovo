import React, {useCallback, useState} from "react";
import Status from "../../ApplicationsTable/columns/Status"
import {getDocuments} from "../../../../../redux/actions/applicationsActions"
import {format,parseISO,isValid} from "date-fns";

const CurrentContent = ({currentApplication}) => {
    const {
        wifeSFullName,
        fullNameOfTheHusband,
        phone,
        passport,
        plan,
        status,
        comment,
        doc,
        email,
        wasPreviouslyMarried,
        weddingDate,
        endWeddingDate,
        id
    } = currentApplication;
    const handelOpenDoc = useCallback(()=> {
        getDocuments(doc)
    },[doc]);
    return (
        <div style={{width:"100%",textAlign:"left"}}>
            <p className="application-text">П.І.Б. наречного: {fullNameOfTheHusband} </p>
            <p className="application-text">П.І.Б. наречної: {wifeSFullName} </p>
            <p className="application-text">Телефон: {phone} </p>
            <p className="application-text">Паспорт: {passport} </p>
            <p className="application-text">Тариф: {plan}</p>
            <Status className="application-text" status={status} id={id} />
            <p className="application-text">Побажання: {comment}</p>
            <p className="application-text">Почта: {email}</p>
            <p className="application-text">Були одружені: {wasPreviouslyMarried ? "Так" : "Ні"}</p>
            <p className="application-text">Дата одруження: {isValid(parseISO(weddingDate)) ? format(parseISO(weddingDate),"yyyy-MM-dd") : "Невірна дата"}</p>
            <p className="application-text">Кінець одруження: {isValid(parseISO(weddingDate)) ? format(parseISO(endWeddingDate),"yyyy-MM-dd") : "Невірна дата"}</p>
            <p className="application-text link" onClick={handelOpenDoc}>Документи</p>
        </div>
    )
};

export default CurrentContent