import React,{useEffect,useState} from "react";
import Input from "../../../../common/Input";
import Plan from "../../../../common/Plan";
import DatePicker from "react-datepicker";
import {useInput} from "../../../../../hooks/useInput";

const AddContent = ({setApplication,application={}}) => {
    const {value:fullNameOfTheHusband,bind:bindFullNameOfTheHusband} = useInput(application.fullNameOfTheHusband);
    const {value:wifeSFullName,bind:bindWifeSFullName} = useInput(application.wifeSFullName);
    const {value:phone,bind:bindPhone} = useInput(application.phone);
    const {value:weddingDate,setValue:setWeddingDate} = useInput("");
    const [plan,setPlan] = useState(application.plan);
    const {value:email,bind:bindEmail} = useInput(application.email);
    const {value:endWeddingDate,setValue:seEndWeddingDate} = useInput("");
    const {value:husbandPassport,bind:bindHusbandPassport} = useInput(application.husbandPassport);
    const {value:wifePassport,bind:bindWifePassport} = useInput(application.wifePassport);
    const {value:comment,bind:bindComment} = useInput(application.comment);
    useEffect(()=> {
        setApplication({
            wifeSFullName,
            fullNameOfTheHusband,
            phone,
            husbandPassport,
            plan,
            comment,
            email,
            //wasPreviouslyMarried,
            weddingDate,
            wifePassport,
            status: "нова",
        })
    },[]);
    return (
        <div className="modal-inputs-list">
            <div className="application-item" style={{width: 600}}>
                <p className="application-text">Наречений</p>
                <Input placeholder="Введіть ПІБ нареченого" className="authorization-form-input common-input" {...bindFullNameOfTheHusband}  type="text"/>
            </div>

            <div className="application-item" style={{width: 600}}>
                <p className="application-text">Паспорт наречененого</p>
                <Input placeholder="Введіть паспорт нареченої" className="authorization-form-input common-input" {...bindHusbandPassport}  type="text"/>
            </div>
            <div className="application-item" style={{width: 600}}>
                <p className="application-text">Наречена</p>
                <Input placeholder="ВведітьПІБ нареченої" className="authorization-form-input common-input" {...bindWifeSFullName}  type="text"/>
            </div>
            <div className="application-item" style={{width: 600}}>
                <p className="application-text">Паспорт наречененої</p>
                <Input placeholder="Введіть паспорт нареченої" className="authorization-form-input common-input" {...bindWifePassport}  type="text"/>
            </div>
            <div className="application-item" style={{width: 600}}>
                <p className="application-text">Дата оруження</p>
                <DatePicker placeholder="Введіть дату одруження" selected={weddingDate} showTimeSelect onChange={((data)=>setWeddingDate(data))} className="authorization-form-input common-input"  type="text"/>
            </div>
            <div className="application-item" style={{width: 600}}>
                <p className="application-text">Кінець оруження</p>
                <DatePicker placeholder="Введіть дату одруження" showTimeSelect selected={endWeddingDate} onChange={((data)=>seEndWeddingDate(data))} className="authorization-form-input common-input"  type="text"/>
            </div>
            <div className="application-item" style={{width: 600}}>
                <p className="application-text">Телефон</p>
                <Input placeholder="Введіть телефон" className="authorization-form-input common-input" {...bindPhone}  type="text"/>
            </div>
            <div className="application-item" style={{width: 600}}>
                <p className="application-text">Почта</p>
                <Input placeholder="Введіть телефон" className="authorization-form-input common-input" {...bindEmail}  type="text"/>
            </div>
            <div className="application-item" style={{width: 600}}>
                <p className="application-text">Пакет послуг</p>
                <Plan plan={plan} setPlan={setPlan}/>
            </div>
            <div className="application-item" style={{width: 600}}>
                <p className="application-text">Коментар</p>
                <Input placeholder="Введіть коментарій" className="authorization-form-input common-input" {...bindComment}  type="text"/>
            </div>
        </div>
    )
};

export default AddContent