import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import TextField from "../../components/TextField";
import Button from "../../components/Button";
import { useDispatch, useSelector } from "react-redux";
import { editUser } from "./UserSlice";

const EditUser = () => {
  const users = useSelector((store) => store.users);
  const dispatch = useDispatch();
  const { id } = useParams();
  const user = users.find((user) => user.id == id);
  const { name, email } = user;
  const [values, setValues] = useState({
    name: name,
    email: email,
  });

  const navigate = useNavigate();
  const handleEditUser = () => {
    // setValues({ name: "", email: "" });
    dispatch(
      editUser({
        id: id,
        name: values.name,
        email: values.email,
      })
    );

    navigate("/");
  };
  return (
    <div className="mt-10 max-w-xl mx-auto">
      <TextField
        label="Name"
        value={values.name}
        onChange={(e) => setValues({ ...values, name: e.target.value })}
        inputProps={{ type: "text", placeholder: "John Doe" }}
      ></TextField>
      <br />
      <TextField
        label="Email"
        value={values.email}
        onChange={(e) => setValues({ ...values, email: e.target.value })}
        inputProps={{ type: "email", placeholder: "JohnDoe@mail.com" }}
      ></TextField>
      <Button onClick={handleEditUser}>Edit</Button>
    </div>
  );
};

export default EditUser;
