import React from 'react'

export default function BasicReact() {
    const fname = "pavan";
    const lname = "fernando";
    const mname = "vihanga";
    const getFullName = (fname, lname, mname) => {
    return `${fname} ${mname} ${lname}`;
    }
    const arr = ["apple", "dell", "lenovo"];
    const liLan = <ul>
    <li>Spanish</li>
    <li>Dutch</li>
    <li>Telegu</li>
    <li>Hindi</li>
  </ul>;

  const employe = {
    fname: "pavn",
    age: 25
  }

  return (
    <div>
      <h1>Student details</h1>
      <p>Full name: {fname} {mname} {lname} </p>
      <p>Full name: {getFullName("aki", "wna", "wage")} </p>
      <p>age: {10*10}</p>
      <p>favorites: {arr[0]} {arr[2]}</p>
      <p>languages: </p>
      <ul>
        <li>Sinhala</li>
        <li>English</li>
        <li>Tamil</li>
        <li>Hindi</li>
      </ul>
      <p>------------------------------------------------</p>
      <p>languages: </p>
      {liLan}
      <p>Age: {employe.age}</p>
    </div>
  )
}
