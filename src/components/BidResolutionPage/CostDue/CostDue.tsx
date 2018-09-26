import * as React from "react";
import { Placeholder } from "Components/Placeholder";
import styled from "styled-components";
import { mainColor } from "@style";
import {mainFont} from "@style";

const CostDueStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  size: 11px;
`;

const ProjectCostStyle = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const ProjectDueStyle = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const LabelStyle = styled.div`
  display: flex;
  flex-direction: row;
color:${mainColor};
font-family:${mainFont};
`;

const ValueStyle = styled.div`
  display: flex;
  flex-direction: row;
  color:${mainColor};
font-family:${mainFont};
`;

export class CostDue extends React.PureComponent<{}> {
  static defaultProps: CostDue["props"] = {};

  render() {
    return (
      <CostDueStyle>
        <ProjectCostStyle>
          <LabelStyle>Price:</LabelStyle>
          <ValueStyle>XXX</ValueStyle>
        </ProjectCostStyle>
        <ProjectDueStyle>
          <LabelStyle>Due:</LabelStyle>
          <ValueStyle>XXX</ValueStyle>
        </ProjectDueStyle>
      </CostDueStyle>
    );
  }
}
