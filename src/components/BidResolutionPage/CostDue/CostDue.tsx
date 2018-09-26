import * as React from "react";
import { Placeholder } from "Components/Placeholder";
import styled from "styled-components";

import { mainFont, grey } from "@style";

const CostDueStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  size: 15px;
  color: ${grey};
  font-family: ${mainFont};
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
  color: ${grey};
  font-family: ${mainFont};
`;

const ValueStyle = styled.div`
  display: flex;
  flex-direction: row;
  font-weight: bold;
`;

export class CostDue extends React.PureComponent<{}> {
  static defaultProps: CostDue["props"] = {};

  render() {
    return (
      <CostDueStyle>
        <ProjectCostStyle>
          <LabelStyle>Price: </LabelStyle>
          <ValueStyle>XXX</ValueStyle>
        </ProjectCostStyle>
        <ProjectDueStyle>
          <LabelStyle>Due: </LabelStyle>
          <ValueStyle>XXX</ValueStyle>
        </ProjectDueStyle>
      </CostDueStyle>
    );
  }
}
