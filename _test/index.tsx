import React, { FC, useState, useEffect } from "react";

import ReactDOM from "react-dom";

import styled from "styled-components";

import KakaoMaps from "../src";

import KakaoMap from "../src/Map";

interface ITestComponentProps {
  className?: string;
}

let TestComponent: FC<ITestComponentProps> = (props) => {
  const [container, setContainer] = useState<HTMLDivElement>(null);
  const [mapCenter] = useState({ lat: 33.450701, lng: 126.570667 });
  const [position, setPosition] = useState(null as { lat: number, lng: number } | null);
  const [content, setContent] = useState("가나다");
  const [content2, setContent2] = useState("마바사");

  useEffect(() => {
    setContent(`${Math.random()}`);
    setContent2(`${Math.random()}`);
  }, [position])

  return (
    <div ref={(ref) => setContainer(ref)} className={props.className}>
      {container && (
        <KakaoMap
          container={container}
          center={mapCenter}
          onMouseMove={(e) => {
            setPosition(e.position);
          }}
        >
          {position !== null && (
            <KakaoMaps.CustomOverlay
              content={content}
              position={position}
            >
              {/* {content2} */}
            </KakaoMaps.CustomOverlay>
          )}
        </KakaoMap>
      )}
    </div>
  );
};

TestComponent = styled(TestComponent)`
  width: 100%;
  height: 100%;
`;

ReactDOM.render(<TestComponent />, document.getElementById("root"))
