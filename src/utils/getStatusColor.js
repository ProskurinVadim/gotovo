const colors = {
    "NEW" : "white",
    "IN_WORK" : "yellow",
    "REQUESTED" : "black-yellow",
    "APPROVED" : "light-green",
    "PAID_UP" : "green",
    "EXPIRED_PAYMENT" : "red"
};

export const getStatusColor =(status) => colors[status];