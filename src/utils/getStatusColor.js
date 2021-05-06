const colors = {
    "новая заявка" : "white",
    "в работе" : "yellow",
    "запросить еще документы" : "black-yellow",
    "одобрена" : "light-green",
    "оплачена" : "green",
    "срок оплаты истек" : "red"
};

export const getStatusColor =(status) => colors[status];