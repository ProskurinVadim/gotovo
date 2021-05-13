const colors = {
    "NEW" : "white",
    "IN_WORK" : "yellow",
    "NEED_DOCUMENTS" : "black-yellow",
    "APPROVED" : "light-green",
    "PAID" : "green",
    "PAYMENT_EXPIRED" : "red"
};

const statusLocal = ["новая заявка" ,"в работе","запросить еще документы","одобрена","оплачена","срок оплаты истек"];
const statusTransform = ["NEW" ,"IN_WORK","NEED_DOCUMENTS","APPROVED","PAID","PAYMENT_EXPIRED"];
export const getStatusColor =(status) => colors[status];