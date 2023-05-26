import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import EmpService from "../service/employeeservice";

const EmpDetail = (props) => {
    const { empid } = useParams();
    const [empdata, setEmpData] = useState({});
    useEffect(() => {
        loadEmpDta(empid);
    }, []);

    const loadEmpDta = async (empid) => {
        const empList = await EmpService.getEmployeeDetail(empid);
        setEmpData(empList);
    }
    return (
        <div>
            <div className="container">

                <div className="card row" style={{ "textAlign": "left" }}>
                    <div className="card-title">
                        <h2>Employee Create</h2>
                    </div>
                    <div className="card-body"></div>

                    {empdata &&
                        <div>
                            <h2>The Employee name is : <b>{empdata.name}</b>  ({empdata.id})</h2>
                            <h3>Contact Details</h3>
                            <h5>Email is : {empdata.email}</h5>
                            <h5>Phone is : {empdata.phone}</h5>
                            <h5>Gender is : {empdata.gender}</h5>
                            <h5>Role is : {empdata.role}</h5>
                            <Link className="btn btn-danger" to="/">Back to Listing</Link>
                        </div>
                    }
                </div>
            </div>
        </div >
    );
}

export default EmpDetail;