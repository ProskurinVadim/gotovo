import Person from "./columns/Person";
import Data from "./columns/Data";
import Status from "./columns/Status";
import {format, isValid, parseISO} from "date-fns";
export const getColumns = () => [
    {
        title: "Статус",
        dataIndex: ["status"],
        key: "status ",
        render: (data,record) => <Status status={data} id={record._id}/>
    },
    {
        title: "Дата одруження",
        dataIndex: "weddingDate",
        key: "weddingDate",
        render: data => <p>
            {data !== "" ?
                isValid(parseISO(data)) ?
                    format(parseISO(data.slice(0,-4)),"yyyy-MM-dd hh:mm")
                    : "Невірна дата"
                : "Дата не назначена"
            }
        </p>
    },
    {
        title: "Дата отримання заявки",
        dataIndex: "createdAt",
        key: "createdAt",
        render: data => <p>{isValid(parseISO(data)) ? format(parseISO(data.slice(0,-4)),"yyyy-MM-dd hh:mm") : "Невірна дата"}</p>
    },
    {
        title: "П.І.Б Нареченої",
        dataIndex: "wifeSFullName",
        key: "wifeSFullName",
        render: data => <Person person={data} />
    },
    {
        title: "П.І.Б  Нареченого",
        dataIndex: "fullNameOfTheHusband",
        key: "fullNameOfTheHusband",
        render: data => <Person person={data} />
    },
    {
        title: "Тариф",
        dataIndex: "plan",
        key: "plan",
        render: data => <p>{data}</p>
    },
    {
        title: "Контактний номер телефону",
        dataIndex: "phone",
        key: "phone",
        render: data => <p>{data}</p>
    },

    {
        title: "Коментарі та побажання",
        dataIndex: "comments",
        key: "comments",
        render: data => <p>{data}</p>
    },
];