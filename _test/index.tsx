import React, { FC, useState, useEffect } from "react";

import ReactDOM from "react-dom";

import styled from "styled-components";

import NaverMap from "../src/Map";

interface ITestComponentProps {
  className?: string;
}

let TestComponent: FC<ITestComponentProps> = (props) => {
  const [mapCenter] = useState({ lat: 33.450701, lng: 126.570667 });
  const [position, setPosition] = useState(null as { lat: number, lng: number } | null);
  const [content, setContent] = useState("가나다");
  const [content2, setContent2] = useState("마바사");

  useEffect(() => {
    setContent(`${Math.random()}`);
    setContent2(`${Math.random()}`);
  }, [position])

  return (
    <div>
      <NaverMap width="100%" height={500} center={position} level={3}>
      </NaverMap>
    </div>
  );
};

TestComponent = styled(TestComponent)`
  width: 100%;
  height: 100%;
`;

ReactDOM.render(<TestComponent />, document.getElementById("root"))
