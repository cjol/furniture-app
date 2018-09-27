import * as React from "react";
import { Placeholder } from "Components/Placeholder";
import styled from "styled-components";
import {greenMain} from "@style"

const TimeRowStyle = styled.div`
  display: flex;
  flex-direction: row;
`;
const TimeStyle = styled.div`
  display: flex;
  flex-direction: column;
  color: grey;
  font-weight: bold;
  font-size: 14px;
`;
const TimeBidStyle = styled.input`
  display: flex;
  flex-direction: column;
  color: ${greenMain};
  font-size: 12px;
  border:none;
  border-bottom-style: solid
`;

export class TimeRow extends React.PureComponent<{ time: string }> {
  static defaultProps: TimeRow["props"] = { time: "4 Days" };

  render() {
    return (
      <TimeRowStyle>
        <TimeStyle> Time To Compile (Days) </TimeStyle>
        <TimeBidStyle value="bid" />
      </TimeRowStyle>
    );
  }
}
