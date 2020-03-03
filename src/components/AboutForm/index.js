import React, { useState } from "react";

export default function AboutForm() {

  const [skills, setSkills] = useState("");
  const [phone, setPhone] = useState("");
  const [description, setDescription] = useState("");

  return (
    <form>
      <p>About Form</p>
      <label>
        Skills:
        <input
          type="text"
          id="skills"
          name="skills"
          value={skills}
          onChange={e => setSkills(e.target.value)}
        />
      </label>
      <label>
        Phone:
        <input
          type="text"
          id="phone"
          name="phone"          
          value={phone}
          onChange={e => setPhone(e.target.value)}
        />
      </label>
      <label>
        Description:
        <textarea
          id="description"
          name="description"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
      </label>
    </form>
  );
}
