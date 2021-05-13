import Person from "./columns/Person";
import Data from "./columns/Data";
import Status from "./columns/Status";
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
        render: data => <p>{data}</p>
    },
    {
        title: "П.І.Б Нареченої Нареченого",
        dataIndex: "WifeSFullName",
        key: "WifeSFullName",
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