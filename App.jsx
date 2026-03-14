import { useState } from "react";

function App() {
const [floor, setFloor] = useState(0);
const [status, setStatus] = useState("Running");
const [direction, setDirection] = useState("-");

const height = floor * 3;

const floors = 10;
const floorHeight = 30;
const shaftHeight = floors * floorHeight;

return (
<div style={{ padding: "40px", fontFamily: "Arial", textAlign: "center" }}> <h1>Construction Lift Dashboard</h1> <p>Machine Monitoring System</p>

```
  {/* STATUS CARDS */}
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      gap: "20px",
      marginTop: "30px",
      flexWrap: "wrap"
    }}
  >
    <Card title="Height" value={`${height}m`} />
    <Card title="Load" value="300kg" />
    <Card title="Speed" value="1.2 m/s" />
    <Card title="Status" value={status} />
    <Card title="Floor" value={floor} />
    <Card title="Direction" value={direction} />
  </div>

  {/* CONTROLS */}
  <div style={{ marginTop: "40px" }}>
    <h2>Lift Controls</h2>

    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "20px",
        marginTop: "15px"
      }}
    >
      <button
        style={greenBtn}
        onClick={() => {
          if (floor < 9) {
            setFloor(floor + 1);
            setDirection("Up");
          }
        }}
      >
        Move Up
      </button>

      <button
        style={blueBtn}
        onClick={() => {
          if (floor > 0) {
            setFloor(floor - 1);
            setDirection("Down");
          }
        }}
      >
        Move Down
      </button>

      <button
        style={yellowBtn}
        onClick={() => {
          setStatus("Stopped");
          setDirection("-");
        }}
      >
        Stop
      </button>

      <button
        style={redBtn}
        onClick={() => {
          setStatus("Emergency!");
          setDirection("-");
        }}
      >
        Emergency
      </button>
    </div>
  </div>

  {/* LIFT VISUALIZER */}
  <div style={{ marginTop: "60px" }}>
    <h2>Lift Position</h2>

    <div
      style={{
        height: `${shaftHeight}px`,
        width: "120px",
        border: "2px solid #334155",
        margin: "20px auto",
        position: "relative",
        background: "#0f172a"
      }}
    >
      {/* FLOORS */}
      {Array.from({ length: floors }).map((_, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            bottom: `${i * floorHeight}px`,
            width: "100%",
            borderTop: "1px solid #334155",
            fontSize: "11px",
            paddingLeft: "6px",
            color: i === floor ? "#22c55e" : "#94a3b8",
            fontWeight: i === floor ? "bold" : "normal"
          }}
        >
          Floor {i}
        </div>
      ))}

      {/* LIFT */}
      <div
        style={{
          position: "absolute",
          top: `${shaftHeight - (floor + 1) * floorHeight + 3}px`,
          left: "10px",
          width: "100px",
          height: "24px",
          background: "#ef4444",
          borderRadius: "4px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          fontSize: "12px",
          transition: "top 0.4s cubic-bezier(.4,0,.2,1)"
        }}
      >
        Lift
      </div>
    </div>
  </div>
</div>
);
}

/* CARD COMPONENT */
function Card({ title, value }) {
return (
<div
style={{
background: "#0f172a",
padding: "15px",
borderRadius: "8px",
width: "120px",
color: "white"
}}
> <h4>{title}</h4> <p>{value}</p> </div>
);
}

/* BUTTON STYLES */
const greenBtn = {
padding: "10px 20px",
background: "#22c55e",
border: "none",
borderRadius: "6px",
color: "white",
cursor: "pointer"
};

const blueBtn = {
padding: "10px 20px",
background: "#3b82f6",
border: "none",
borderRadius: "6px",
color: "white",
cursor: "pointer"
};

const yellowBtn = {
padding: "10px 20px",
background: "#f59e0b",
border: "none",
borderRadius: "6px",
color: "white",
cursor: "pointer"
};

const redBtn = {
padding: "10px 20px",
background: "#ef4444",
border: "none",
borderRadius: "6px",
color: "white",
cursor: "pointer"
};

export default App;
