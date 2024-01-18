"use client";
import { useState } from "react";
import Button from "@/app/components/button";
import Container from "@/app/components/container";

const boxStyle = {
  display: "grid",
  placeContent: "center",
  width: "100px",
  borderRadius: "0.5rem",
  fontSize: "2rem",
  fontWeight: "600",
};

export function JustifyContent() {
  const [property, setProperty] = useState("flex-start");

  const properties = [
    "flex-start",
    "center",
    "flex-end",
    "space-between",
    "space-around",
    "space-evenly",
  ];

  return (
    <div>
      <h3>JUSTIFY-CONTENT</h3>
      <Container style={{ justifyContent: property }}>
        <div style={boxStyle} className="bg-[#ef4444]">
          1
        </div>
        <div style={boxStyle} className="bg-[#fb923c]">
          2
        </div>
        <div style={boxStyle} className="bg-[#22c55e]">
          3
        </div>
        <div style={boxStyle} className="bg-[#0ea5e9]">
          4
        </div>
        <div style={boxStyle} className="bg-[#a855f7]">
          5
        </div>
      </Container>
      <div>
        {properties.map((property, index) => (
          <Button key={index} onClick={() => setProperty(property)}>
            {property}
          </Button>
        ))}
      </div>
    </div>
  );
}

export function AlignItems() {
  const [property, setProperty] = useState("flex-start");

  const properties = [
    "flex-start",
    "center",
    "flex-end",
    "stretch",
    "baseline",
  ];

  return (
    <div>
      <h3>ALIGN-ITEMS</h3>
      <Container style={{ alignItems: property }}>
        <div style={boxStyle} className="bg-[#ef4444]">
          1
        </div>
        <div style={boxStyle} className="bg-[#fb923c] pt-2 pb-6">
          2
        </div>
        <div style={boxStyle} className="bg-[#22c55e] pt-8 pb-12">
          3
        </div>
        <div style={boxStyle} className="bg-[#0ea5e9] pt-12 pb-4">
          4
        </div>
        <div style={boxStyle} className="bg-[#a855f7]">
          5
        </div>
      </Container>
      <div>
        {properties.map((property, index) => (
          <Button key={index} onClick={() => setProperty(property)}>
            {property}
          </Button>
        ))}
      </div>
    </div>
  );
}

export function AlignContent() {
  const [property, setProperty] = useState("flex-start");

  const properties = [
    "flex-start",
    "center",
    "flex-end",
    "space-between",
    "space-around",
    "space-evenly",
    "baseline",
    "stretch",
  ];

  return (
    <div>
      <h3>ALIGN-CONTENT</h3>
      <Container style={{ alignContent: property }} className="flex-wrap">
        <div style={boxStyle} className="bg-[#ef4444]">
          1
        </div>
        <div style={boxStyle} className="bg-[#fb923c]">
          2
        </div>
        <div style={boxStyle} className="bg-[#22c55e]">
          3
        </div>
        <div style={boxStyle} className="bg-[#0ea5e9]">
          4
        </div>
        <div style={boxStyle} className="bg-[#a855f7]">
          5
        </div>
        <div style={boxStyle} className="bg-[#ef4444]">
          1
        </div>
        <div style={boxStyle} className="bg-[#fb923c]">
          2
        </div>
        <div style={boxStyle} className="bg-[#22c55e]">
          3
        </div>
        <div style={boxStyle} className="bg-[#0ea5e9]">
          4
        </div>
        <div style={boxStyle} className="bg-[#a855f7]">
          5
        </div>
        <div style={boxStyle} className="bg-[#ef4444]">
          1
        </div>
        <div style={boxStyle} className="bg-[#fb923c]">
          2
        </div>
        <div style={boxStyle} className="bg-[#22c55e]">
          3
        </div>
        <div style={boxStyle} className="bg-[#0ea5e9]">
          4
        </div>
        <div style={boxStyle} className="bg-[#a855f7]">
          5
        </div>
      </Container>
      <div>
        {properties.map((property, index) => (
          <Button key={index} onClick={() => setProperty(property)}>
            {property}
          </Button>
        ))}
      </div>
    </div>
  );
}

export function NoWrap() {
  return (
    <div>
      <h3>NOWRAP</h3>
      <Container className="flex-nowrap">
        <div style={boxStyle} className="bg-[#ef4444]">
          1
        </div>
        <div style={boxStyle} className="bg-[#fb923c]">
          2
        </div>
        <div style={boxStyle} className="bg-[#22c55e]">
          3
        </div>
        <div style={boxStyle} className="bg-[#0ea5e9]">
          4
        </div>
        <div style={boxStyle} className="bg-[#a855f7]">
          5
        </div>
        <div style={boxStyle} className="bg-[#ef4444]">
          1
        </div>
        <div style={boxStyle} className="bg-[#fb923c]">
          2
        </div>
        <div style={boxStyle} className="bg-[#22c55e]">
          3
        </div>
        <div style={boxStyle} className="bg-[#0ea5e9]">
          4
        </div>
        <div style={boxStyle} className="bg-[#a855f7]">
          5
        </div>
        <div style={boxStyle} className="bg-[#ef4444]">
          1
        </div>
        <div style={boxStyle} className="bg-[#fb923c]">
          2
        </div>
        <div style={boxStyle} className="bg-[#22c55e]">
          3
        </div>
        <div style={boxStyle} className="bg-[#0ea5e9]">
          4
        </div>
        <div style={boxStyle} className="bg-[#a855f7]">
          5
        </div>
      </Container>
    </div>
  );
}

export function Wrap() {
  return (
    <div>
      <h3>WRAP</h3>
      <Container className="flex-wrap">
        <div style={boxStyle} className="bg-[#ef4444]">
          1
        </div>
        <div style={boxStyle} className="bg-[#fb923c]">
          2
        </div>
        <div style={boxStyle} className="bg-[#22c55e]">
          3
        </div>
        <div style={boxStyle} className="bg-[#0ea5e9]">
          4
        </div>
        <div style={boxStyle} className="bg-[#a855f7]">
          5
        </div>
        <div style={boxStyle} className="bg-[#ef4444]">
          1
        </div>
        <div style={boxStyle} className="bg-[#fb923c]">
          2
        </div>
        <div style={boxStyle} className="bg-[#22c55e]">
          3
        </div>
        <div style={boxStyle} className="bg-[#0ea5e9]">
          4
        </div>
        <div style={boxStyle} className="bg-[#a855f7]">
          5
        </div>
        <div style={boxStyle} className="bg-[#ef4444]">
          1
        </div>
        <div style={boxStyle} className="bg-[#fb923c]">
          2
        </div>
        <div style={boxStyle} className="bg-[#22c55e]">
          3
        </div>
        <div style={boxStyle} className="bg-[#0ea5e9]">
          4
        </div>
        <div style={boxStyle} className="bg-[#a855f7]">
          5
        </div>
      </Container>
    </div>
  );
}

export function WrapReverse() {
  return (
    <div>
      <h3>WRAP-REVERSE</h3>
      <Container className="flex-wrap-reverse">
        <div style={boxStyle} className="bg-[#ef4444]">
          1
        </div>
        <div style={boxStyle} className="bg-[#fb923c]">
          2
        </div>
        <div style={boxStyle} className="bg-[#22c55e]">
          3
        </div>
        <div style={boxStyle} className="bg-[#0ea5e9]">
          4
        </div>
        <div style={boxStyle} className="bg-[#a855f7]">
          5
        </div>
        <div style={boxStyle} className="bg-[#ef4444]">
          1
        </div>
        <div style={boxStyle} className="bg-[#fb923c]">
          2
        </div>
        <div style={boxStyle} className="bg-[#22c55e]">
          3
        </div>
        <div style={boxStyle} className="bg-[#0ea5e9]">
          4
        </div>
        <div style={boxStyle} className="bg-[#a855f7]">
          5
        </div>
        <div style={boxStyle} className="bg-[#ef4444]">
          1
        </div>
        <div style={boxStyle} className="bg-[#fb923c]">
          2
        </div>
        <div style={boxStyle} className="bg-[#22c55e]">
          3
        </div>
        <div style={boxStyle} className="bg-[#0ea5e9]">
          4
        </div>
        <div style={boxStyle} className="bg-[#a855f7]">
          5
        </div>
      </Container>
    </div>
  );
}

export function Grow() {
  const [grow1, setGrow1] = useState("1");
  const [grow2, setGrow2] = useState("1");

  const properties = ["0", "1", "2", "3"];

  return (
    <div>
      <h3>FLEX-GROW</h3>
      <Container>
        <div style={boxStyle} className={`bg-[#ef4444] grow-[${grow1}]`}>
          1
        </div>
        <div style={boxStyle} className={`bg-[#fb923c] grow-[${grow2}]`}>
          2
        </div>
      </Container>
      <div>
        {properties.map((property, index) => (
          <Button key={index} onClick={() => setGrow1(property)}>
            {property}
          </Button>
        ))}
      </div>
      <div>
        {properties.map((property, index) => (
          <Button key={index} onClick={() => setGrow2(property)}>
            {property}
          </Button>
        ))}
      </div>
    </div>
  );
}
