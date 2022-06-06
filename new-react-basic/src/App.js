import "./assets/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import BandSection from "./components/BandSection/BandSection";
import Navbar from "./components/Navbar/Navbar";
import ContentCard from "./components/ContentCard/ContentCard";
import BandContainerSection from "./components/BandContainerSection/BandContainerSection";
import { useState } from "react";
import { Button, Input } from "reactstrap";
import ToDoListSection from "./components/ToDoListSection/ToDoListSection";

import m4 from "../src/components/ContentCard/bmw m4.jpeg";
import m2 from "../src/components/ContentCard/bmw m2 2.jpeg";
import m2c from "../src/components/ContentCard/bmw m2.jpeg";
import m3 from "../src/components/ContentCard/m3 f80.jpg";

const list = [
  {
    username: "Mobil_M3_TEST",
    caption: "f80 m3",
    numberOfLikes: 1200,
    location: "BSD",
    img_src: m3,
  },
  {
    username: "Mobil_M2",
    caption: "M2 N55",
    numberOfLikes: 3300,
    location: "GERMAN",
    img_src: m2,
  },
  {
    username: "Mobil_M2C",
    caption: "M2C S55",
    numberOfLikes: 5000,
    location: "Gading Serpong",
    img_src: m2c,
  },
  {
    username: "Mobil_M4",
    caption: "f82 M4",
    numberOfLikes: 4300,
    location: "Lampung",
    img_src: m4,
  },
];

const datas = [
  {
    tgl: new Date(),
    action: "jadi pengamen keliling",
    status: true,
  },
  {
    tgl: new Date(),
    action: "makan indomie goreng",
    status: false,
  },
  {
    tgl: new Date(),
    action: "cuci Kamar Mandi",
    status: true,
  },
  {
    tgl: new Date(),
    action: "ngegym 10 jam ",
    status: true,
  },
];

// Prop singkatan dari Property. Ini cukup simple, apalagi jika anda sudah terbiasa dengan HTML,
// ini mirip seperti atrribute pada tag HTML.
// Dalam pembuatannya, jika dalam functional component maka prop ini adalah parameternya.

// State adalah data private sebuah component. Data ini hanya tersedia untuk component tersebut
// dan tidak bisa di akses dari component lain.
//  Component dapat merubah statenya sendiri.

function App() {
  // const [myUsername, setUsername] = useState("test");
  // const [toDoValue, setToDoValue] = useState("");

  const [myUsername, setUsername] = useState("Udin");

  function changeUsername() {
    setUsername("bukan udin");
  }

  // function setUser() {
  //   setUsername("ayam");
  // }

  // function inputHandler(event) {
  //   const { value } = event.target;
  //   console.log(value);

  //   setToDoValue(value);
  // }

  return (
    <>
      {/* <Navbar /> */}
      {/* <div className="container">
        <h1>{toDoValue}</h1>
        <div className="row">
          <Button onClick={setUser}>{myUsername}</Button>
          <div className="col-6 offset-3">
            <Input onChange={inputHandler} />
          </div> */}

      <div className="col-4 offset-4 p-3">
        {datas.map((val) => {
          return (
            <ToDoListSection
              tgl={val.tgl}
              action={val.action}
              status={val.status}
            />
          );
        })}

        {/* {list.map((val) => {
          return (
            <ContentCard
              username={myUsername}
              caption={val.caption}
              img_src={val.img_src}
              location={val.location}
              numberOfLikes={val.numberOfLikes}
            />
          );
        })}

        <button
          style={{ width: "200px", height: "200px" }}
          onClick={changeUsername}
        >
          {" "}
          change udin
        </button> */}
      </div>
      {/* </div> */}
      {/* </div> */}
      {/* <BandContainerSection /> */}
      {/* <BandSection /> */}
    </>
  );
}

export default App;
