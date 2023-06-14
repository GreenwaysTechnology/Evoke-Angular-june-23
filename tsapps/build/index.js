"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var customer_service_1 = require("./services/customer.service");
var customerService = new customer_service_1.CustomerService();
console.log(customerService.findAll());
