"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//@ts-ignore
var mongoose_1 = __importDefault(require("mongoose"));
var MONGO_URI = 'mongodb+srv://admin:admin@cluster0.wcyyf.mongodb.net/ReservationSystem?retryWrites=true&w=majority';
mongoose_1.default.set('useFindAndModify', false);
mongoose_1.default.connect(MONGO_URI || process.env.MONGODB_URL, {
    useFindAndModify: false,
    useNewUrlParser: true,
    useCreateIndex: true,
});
