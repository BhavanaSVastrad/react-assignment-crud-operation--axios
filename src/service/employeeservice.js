import axios from "axios";
export default class EmpService {

  static async createEmployee(empDetails) {

    const url = "http://localhost:3001/employee";
    const response = await axios.post(url, empDetails);
    window.alert("Saved Successfully");
    window.location = '/';
    return response.data;

  }
  static async delete(id) {

    const url = "http://localhost:3001/employee/" + id;
    const response = await axios.delete(url);
    return response.data;

  }

  static async updateData(id, data) {
    const url = "http://localhost:3001/employee/" + id;
    const response = await axios.put(url, data);
    window.alert("Saved Successfully");
    window.location = '/';
    return response.data;

  };

  static async getAll() {
    const url = "http://localhost:3001/employee";
    const response = await axios.get(url);
    return response.data;
  }

  static async getEmployeeDetail(id) {
    const url = "http://localhost:3001/employee/" + id;
    const response = await axios.get(url);
    const userlist = response.data;
    return userlist;
  }
}

