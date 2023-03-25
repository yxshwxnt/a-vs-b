import { Modal, Button, ButtonToolbar, Placeholder } from "rsuite";
import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

const API = "http://localhost:5000";

export default function Home() {
  const [open, setOpen] = React.useState(false);
  const [size, setSize] = React.useState();
  const [pdata, setPData] = React.useState({
    name: "",
    age: 19,
    height: "",
    weight: "",
    jno: "",
  });
  const [isError, setisError] = React.useState("");
  const handleOpen = (value) => {
    setSize(value);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  //Old Way,  Better way below
  // useEffect(() => {
  //   axios
  //     .get("http://localhost:5000/get-data")
  //     // .get("http://localhost:5000/get-data?jno=10&team=A")
  //     .then((res) => {
  //       // setPData(JSON.stringify(res.data))
  //       setPData(res.data);
  //       console.log(pdata);
  //     }, [])
  //     .catch((error) => {
  //       // alert("Error getting Data");
  //       console.log("Error getting Data");
  //     });
  // });

  // useEffect(() => {
  //   getPlayerData(`${API}/get-data`);
  // }, [])
  // const getPlayerData= async(url)=>{
  //   try {
  //     const res= await axios.get(url);
  //     setPdata(res.data);
  //   } catch (error) {
  //     setisError(error);
  //   }
  // }

  function getObj(jno, team) {
    axios
      .get(`http://localhost:5000/get-data?jno=${jno}&team=${team}`)
      .then((res) => {
        setPData(res.data);
        // const r=res.data;
        // console.log(r);
        // return r;
      }, [])
      .catch((error) => {
        // alert("Error getting Data");
        console.log("Error getting Data");
      });
  }

  // getObj(10,'A');
  console.log(pdata);

  return (
    <>
      <div className="main-div-f">
        <div className="upper">
          {isError !== "" && <h2>{isError}</h2>}
          <h4>Venue: Zion</h4>
          <div className="teams">
            <div className="home">
              <img
                src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c4e7.png"
                alt="logo-A"
              />
              <p>Section A</p>
            </div>
            <div className="score">
              <h2>4 - 1</h2>
              <h5>time</h5>
            </div>
            <div className="away">
              <img
                src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c4e7.png"
                alt="logo-B"
              />
              <p>Section B</p>
            </div>
          </div>
          <div className="goal-scorer">
            <div className="home">
              <ul>
                <li>Yashwant</li>
                <li>Yashwant</li>
                <li>Yashwant</li>
                <li>Yashwant</li>
              </ul>
            </div>
            <div className="away">
              <ul>
                <li>Shashwat</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="lower">
          <div className="field">
            <div className="lineups">
              <div className="line1">
                <div
                  className="circle"
                  onClick={() => {
                    handleOpen();
                    getObj(8, "B");
                  }}
                >
                  1
                </div>
              </div>
              <div className="line2">
                <div
                  className="circle"
                  onClick={() => {
                    handleOpen();
                    getObj(6, "A");
                  }}
                >
                  4
                </div>
                <div
                  className="circle"
                  onClick={() => {
                    handleOpen();
                    getObj(10, "A");
                  }}
                >
                  6
                </div>
                <div
                  className="circle"
                  onClick={() => {
                    handleOpen();
                    getObj(9, "A");
                  }}
                >
                  7
                </div>
              </div>
              <div className="line3">
                <div
                  className="circle"
                  onClick={() => {
                    handleOpen();
                    getObj(8, "B");
                  }}
                >
                  10
                </div>
                <div
                  className="circle"
                  onClick={() => {
                    handleOpen();
                    getObj(8, "B");
                  }}
                >
                  11
                </div>
              </div>
              <div className="line4">
                <div
                  className="circle"
                  onClick={() => {
                    handleOpen();
                    getObj(8, "B");
                  }}
                >
                  11
                </div>
                <div
                  className="circle"
                  onClick={() => {
                    handleOpen();
                    getObj(8, "B");
                  }}
                >
                  10
                </div>
              </div>
              <div className="line5">
                <div
                  className="circle"
                  onClick={() => {
                    handleOpen();
                    getObj(8, "B");
                  }}
                >
                  9
                </div>
                <div
                  className="circle"
                  onClick={() => {
                    handleOpen();
                    getObj(8, "B");
                  }}
                >
                  2
                </div>
                <div
                  className="circle"
                  onClick={() => {
                    handleOpen();
                    getObj(8, "B");
                  }}
                >
                  4
                </div>
              </div>
              <div
                className="line6"
                onClick={() => {
                  handleOpen();
                  getObj(8, "B");
                }}
              >
                <div
                  className="circle"
                  onClick={() => {
                    handleOpen();
                    getObj(8, "B");
                  }}
                >
                  1
                </div>
              </div>
            </div>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Soccer_Field_Transparant.svg/396px-Soccer_Field_Transparant.svg.png?20160729023054"
              alt=""
            />
          </div>
        </div>
      </div>
      <Modal size={"xs"} open={open} onClose={handleClose} className="modal">
        <Modal.Header>
          <Modal.Title>Player: {pdata.name} </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            src="https://cdn-icons-png.flaticon.com/512/1754/1754810.png"
            alt="Player_img"
            className="player_img"
          />
          <br />
          <p>Age: {pdata.age} yrs</p>
          <p>Height: {pdata.height} cm</p>
          <p>Weight: {pdata.weight} Kgs</p>
          <p>Jersey No: {pdata.jno} </p>
          {/* <div>
            {pdata.map((item) => (
              <div key={item._id}>
                <h2>{item.name}</h2>
                <p>Team: {item.team}</p>
                <p>Jersey Number: {item.jno}</p>
                <p>Age: {item.age}</p>
                <p>Height: {item.height}</p>
                <p>Weight: {item.weight}</p>
              </div>
            ))}
          </div> */}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose} appearance="subtle">
            Cancel
          </Button>
          <Button onClick={handleClose} appearance="primary">
            Ok
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
