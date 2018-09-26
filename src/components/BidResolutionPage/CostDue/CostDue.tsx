import * as React from "react";
import { Placeholder } from "Components/Placeholder";
import styled from "styled-components";

const CostDueStyle = styled.div`
  display: flex;
  flex-direction: row;
`;

const ProjectCostStyle = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const ProjectDueStyle = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export class CostDue extends React.PureComponent<{}> {
  static defaultProps: CostDue["props"] = {};

  render() {
    return (
      <CostDueStyle>
        <ProjectCostStyle>text</ProjectCostStyle>
        <ProjectDueStyle>text</ProjectDueStyle>
      </CostDueStyle>
    );
  }
}
