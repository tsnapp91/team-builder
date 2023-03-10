import React, { useState } from "react";

import Forms from "./Components/Forms";

function App() {
  const [member, setMember] = useState([]);
  const [values, setValues] = useState({ name: "", email: "", role: "" });

  const onSubmit = () => {
    setMember([values, ...member]);
    setValues({ name: "", email: "", role: "" });
  };

  const onChange = (name, value) => {
    setValues({ ...values, [name]: value });
  };
  return (
    <div className="App">
      <h1>Team Builder</h1>
      <Forms values={values} change={onChange} submit={onSubmit} />

      {member.map((members, idx) => {
        return (
          <div>
            {member.name}, {members.email}, {members.role}
          </div>
        );
      })}
    </div>
  );
}

export default App;
