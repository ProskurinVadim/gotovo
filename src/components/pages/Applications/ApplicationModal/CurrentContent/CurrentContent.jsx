import React, {useCallback, useState} from "react";
import Status from "../../ApplicationsTable/columns/Status"
import {getDocuments} from "../../../../../redux/actions/applicationsActions"
import {format,parseISO,isValid} from "date-fns";
import "react-datepicker/dist/react-datepicker.css";

const CurrentContent = ({currentApplication}) => {
    const {
        wifeSFullName,
        fullNameOfTheHusband,
        phone,
        plan,
        status,
        comment,
        email,
        wasPreviouslyMarried,
        weddingDate,
        endWeddingDate,
        docs,
        _id,
        userId,
        husbandPassport,
        wifePassport
    } = currentApplication;
    return (
        <div style={{width:"100%",textAlign:"left",flexGrow:"1"}}>
            <p className="application-text">П.І.Б. наречного: {fullNameOfTheHusband} </p>
            <p className="application-text">Паспорт чоловіка: {husbandPassport}</p>
            <p className="application-text">П.І.Б. наречної: {wifeSFullName} </p>
            <p className="application-text">Паспорт жінки: {wifePassport} </p>
            <p className="application-text">Телефон: {phone} </p>
            <p className="application-text">Тариф: {plan}</p>
            <Status className="application-text" status={status} id={_id} />
            <p className="application-text">Побажання: {comment}</p>
            <p className="application-text">Почта: {email}</p>
            <p className="application-text">Були одружені: {wasPreviouslyMarried ? "Так" : "Ні"}</p>
            <p className="application-text">Дата одруження: {isValid(parseISO(weddingDate)) ? format(parseISO(weddingDate.slice(0,-5)),"yyyy-MM-dd hh:mm") : "Невірна дата"}</p>
            <p className="application-text">Кінець одруження: {isValid(parseISO(endWeddingDate)) ? format(parseISO(endWeddingDate.slice(0,-5)),"yyyy-MM-dd hh:mm") : "Невірна дата"}</p>
            <ul>
            {
                docs.map((elem,i) => (
                    <li  key={`link-${i}`} className="application-doc-item">
                        <a
                            href={`https://cmusy-dev.space/api/v1/profile/images/${userId}/${elem}`}
                            target="_blank"
                            className="application-text link"
                        >
                            {elem}
                        </a>
                    </li>
                ))
            }
            </ul>
        </div>
    )
};

export default CurrentContent