import AdminsButtons from "./AdminsButtons";
export const getColumns = () => [
    {
        title: "№ сотрудника",
        dataIndex: "index",
        key: "index",
        render: data => <p>{data}</p>
    },
    {
        title: "ФИО",
        dataIndex: "name",
        key: "name",
        render: data => <p>{name}</p>
    },
    {
        title: "Email",
        dataIndex: "email",
        key: "email",
        render: data => <p>{data}</p>
    },
    {
        title: "Телефон",
        dataIndex: "phone",
        key: "phone",
        render: data => <p>{data}</p>
    },
    {
        title: "Контактний номер телефону",
        dataIndex: "phone",
        key: "phone",
        render: data => <p>{data}</p>
    },

    {
        title: "Редактировать",
        dataIndex: "index",
        key: "buttons",
        render: data => <AdminsButtons data={data}/>
    },
];