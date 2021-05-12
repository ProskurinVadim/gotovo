import Person from "./columns/Person";
import Data from "./columns/Data";
import Status from "./columns/Status";
export const getColumns = () => [
    {
        title: "Статус",
        dataIndex: ["status"],
        key: "status ",
        render: (data,record) => <Status status={data} id={record.id}/>
    },
    {
        title: "Дата",
        dataIndex: "data",
        key: "data",
        render: data => <p>{data}</p>
    },
    {
        title: "П.І.Б Нареченої та Нареченого",
        dataIndex: "pib",
        key: "pib",
        render: data => <Person person={data} />
    },
    {
        title: "Тариф",
        dataIndex: "pack",
        key: "pack",
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