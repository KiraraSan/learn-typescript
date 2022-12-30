"use strict";
function get_customer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = get_customer(1);
console.log(customer === null || customer === void 0 ? void 0 : customer.birthday);
//# sourceMappingURL=index.js.map