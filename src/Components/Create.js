import { useState } from "react";
import { Link } from "react-router-dom";
import EmpService from "../service/employeeservice";

const EmpCreate = () => {
    const [name, setNameValue] = useState("");
    const [email, setEmailValue] = useState("");
    const [phone, setPhoneValue] = useState("");
    const [gender, setGenderValue] = useState("");
    const [role, setRoleValue] = useState("");
    const [validation, setValue] = useState(false);

    // handles selection change
    const handleChange = e => {
        const target = e.target;
        if (target.checked) {
            setGenderValue(target.value);
        }
    };

    const handlesubmit = (e) => {
        e.preventDefault();
        const empData = { name, email, phone, gender, role };
        EmpService.createEmployee(empData);
    }

    return (
        <div>

            <div className="row">
                <div className="offset-lg-3 col-lg-6">
                    <form className="container" onSubmit={handlesubmit}>

                        <div className="card" style={{ "textAlign": "left" }}>
                            <div className="card-title">
                                <h2>Employee Create</h2>
                            </div>
                            <div className="card-body">

                                <div className="row">

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
                                            <input required value={email} onChange={e => setEmailValue(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Phone</label>
                                            <input required value={phone} onChange={e => setPhoneValue(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Gender</label>
                                            <br />
                                            <input type="radio" value="Male" name="gender" checked={gender === "Male"} onChange={handleChange} /> Male
                                            <br />
                                            <input type="radio" value="Female" name="gender" checked={gender === "Female"} onChange={handleChange} /> Female
                                            <br />
                                            <input type="radio" value="Other" name="gender" checked={gender === "Other"} onChange={handleChange} /> Other
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

                                    <br />


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

export default EmpCreate;