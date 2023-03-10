import React from "react";

export default ({ myStudents }) => {
  return (
    <div>
      <ul>
        {myStudents.map((theStudent) => (
          <li style={{ listStyle: "none" }}>
            <a className="link" href={`/students/${theStudent.login.uuid}`}>
              {theStudent.name.first} {theStudent.name.last}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
