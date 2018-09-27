import { grey, mainFont } from "@style";
import * as React from "react";
import styled from "styled-components";

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

export class CostDue extends React.PureComponent<{
  price: string;
  dueDate: string;
}> {
  static defaultProps: CostDue["props"] = {
    price: "600ugx",
    dueDate: "16-Jan-2018"
  };

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
