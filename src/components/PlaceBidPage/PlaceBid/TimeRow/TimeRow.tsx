import * as React from "react";
import { Placeholder } from "Components/Placeholder";
import styled from "styled-components";

const TimeRowStyle = styled.div`
  display: flex;
  flex-direction: row;
`;

export class TimeRow extends React.PureComponent<{}> {
  static defaultProps: TimeRow["props"] = {};

  render() {
    return (
      <TimeRowStyle>
        <Placeholder description="Time" />
        <Placeholder description="TimeBid" />
      </TimeRowStyle>
    );
  }
}
