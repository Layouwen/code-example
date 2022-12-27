import axios from "axios";
import People from "./People";
export * from "./fetchData";
export * from "./math";

export const callBackFn = (cb) => {
  cb();
};

export const callBackFnHasReturn = (cb) => {
  return cb();
};

export const getConfig = () => {
  return {
    host: "127.0.0.1",
    port: 3000,
  };
};

export const fetchCustomData = () => {
  return axios.get("http://www.baidu.com");
};

export const timerExec = (timer = 1000, cb) => {
  setTimeout(() => {
    cb();
    setTimeout(() => {
      cb();
    }, timer);
  }, timer);
};

export const createPeople = () => {
  const people = new People("layouwen");
  console.log(people.getName());
  return people;
};
