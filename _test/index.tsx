import React, { FC, useState, useEffect } from "react";

import ReactDOM from "react-dom";

import styled from "styled-components";

import NaverMap from "../src/Map";
import NaverMarker from "../src/Marker";

interface ITestComponentProps {
  className?: string;
}

let TestComponent: FC<ITestComponentProps> = (props) => {
  const [mapCenter] = useState({ lat: 33.450701, lng: 126.570667 });
  const [position, setPosition] = useState({ lat: 33.450701, lng: 126.570667 } as { lat: number, lng: number } | null);
  const [testpos, setTestPos] = useState({ lat: 33.451001, lng: 126.570667 } as { lat: number, lng: number } | null);
  const [content, setContent] = useState("가나다");
  const [content2, setContent2] = useState("마바사");

  useEffect(() => {
    setContent(`${Math.random()}`);
    setContent2(`${Math.random()}`);
  }, [position])

  return (
    <div className={props.className}>
      <NaverMap width="100%" height={500} center={position} level={15}>
        <NaverMarker
          position={position}
          draggable={true}
          icon={{
            content: [
              '<div class="balloon purple">',
                '<span class="balloon--price">매매 00.0억</span>',
                '<span class="balloon--size">100.00<span class="balloon--size-unit">㎡</span></span>',
              '</div>'
            ].join(''),
            size: new naver.maps.Size(38, 58),
            anchor: new naver.maps.Point(19, 58),
          }}
          onClick={(e) => {
            // console.log("marker click");
          }}
        />
        <NaverMarker
          position={testpos}
          draggable={true}
          icon={{
            content: [
              '<div class="balloon green">',
                '<span class="balloon--size">100.00<span class="balloon--size-unit">㎡</span></span>',
              '</div>'
            ].join(''),
            size: new naver.maps.Size(38, 58),
            anchor: new naver.maps.Point(19, 58),
          }}
        />
      </NaverMap>
    </div>
  );
};

TestComponent = styled(TestComponent)`
  width: 100%;
  height: 100%;

  .balloon {
    position: relative;
    padding:16px;
    box-shadow: 0 3px 6px 0 rgba(0,0,0,0.16);
    color: #fff;
    border-radius: 8px;
    display: flex;
    flex-direction: column;

    &::after {
      content: "";
      position: absolute;
      left: 0px;
      bottom: -15px;
      width: 0px;
      height: 0px;
      border-right: 30px solid transparent;
    }

    &.green {
      background-color: #51cc98;
      &::after { border-top: 24px solid #51cc98; }
    }

    &.purple {
      background-color: #771eb9;
      &::after { border-top: 24px solid #771eb9; }
    }

    &--price { font-size: 14px; }
    &--size { font-size: 12px; }
  }
`;

ReactDOM.render(<TestComponent />, document.getElementById("root"))
