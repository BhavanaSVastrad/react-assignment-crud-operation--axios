import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import EmpService from "../service/employeeservice";

const EmpEdit = () => {
    const { empid } = useParams();
    useEffect(() => {
        loadEmpDta(empid);
    }, []);

    const loadEmpDta = async (empid) => {
        const resp = await EmpService.getEmployeeDetail(empid);
        setIdValue(resp.id);
        setNameValue(resp.name);
        setEmailValue(resp.email);
        setPhoneValue(resp.phone);
        setGenderValue(resp.gender);
        setRoleValue(resp.role);

    }
    const [id, setIdValue] = useState("");
    const [name, setNameValue] = useState("");
    const [email, setEmailValue] = useState("");
    const [phone, setPhoneValue] = useState("");
    const [gender, setGenderValue] = useState("");
    const [role, setRoleValue] = useState("");
    const [validation, setValue] = useState(false);

    const handlesubmit = (e) => {
        e.preventDefault();
        const empdata = { id, name, email, phone, gender, role };
        EmpService.updateData(id, empdata);

    }
    return (
        <div>

            <div className="row">
                <div className="offset-lg-3 col-lg-6">
                    <form className="container" onSubmit={handlesubmit}>

                        <div className="card" style={{ "textAlign": "left" }}>
                            <div className="card-title">
                                <h2>Employee Edit</h2>
                            </div>
                            <div className="card-body">

                                <div className="row">

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>ID</label>
                                            <input value={id} disabled="disabled" className="form-control"></input>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Name</label>
                                            <input required value={name} onMouseDown={e => setValue(true)} onChange={e => setNameValue(e.target.value)} className="form-control"></input>
                                            {name.length === 0 && validation && <span className="text-danger">Enter the name</span>}
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Email</label>
                                            <input value={email} onChange={e => setEmailValue(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Phone</label>
                                            <input value={phone} onChange={e => setPhoneValue(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Gender</label>
                                            <br />
                                            <input type="radio" value="Male" checked={gender === "Male"} onChange={e => setGenderValue(e.target.value)} /> Male
                                            <br />
                                            <input type="radio" value="Female" checked={gender === "Female"} onChange={e => setGenderValue(e.target.value)} /> Female
                                            <br />
                                            <input type="radio" value="Other" checked={gender === "Other"} onChange={e => setGenderValue(e.target.value)} /> Other
                                            <br />

                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Role</label>
                                            <select value={role} onChange={e => setRoleValue(e.target.value)} className="form-control">
                                                <option value="HR">HR</option>
                                                <option value="Manager">Manager</option>
                                            </select>
                                        </div>
                                    </div>


                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <br />
                                            <button className="btn btn-success" type="submit">Save</button>
                                            <Link to="/" className="btn btn-danger">Back</Link>
                                        </div>
                                    </div>

                                </div>

                            </div>

                        </div>

                    </form>

                </div>
            </div>
        </div>
    );
}

export default EmpEdit;