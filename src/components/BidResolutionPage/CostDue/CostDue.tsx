import { grey, mainFont, normalBoxShadow, whiteButtonColor } from "@style";
import * as React from "react";
import styled from "styled-components";

const CostDueStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const ProjectInfoStyle = styled.div`
  display: flex;
  justify-content: flex-start;
  font-size: 15px;
  color: ${grey};
  font-family: ${mainFont};
  margin-top: 24px;
  background: ${whiteButtonColor};
  box-shadow: ${normalBoxShadow};
  padding: 10px;
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
        <ProjectInfoStyle>
          <LabelStyle>Price: </LabelStyle>
          <ValueStyle>{this.props.price}</ValueStyle>
        </ProjectInfoStyle>
        <ProjectInfoStyle>
          <LabelStyle>Due: </LabelStyle>
          <ValueStyle>{this.props.dueDate}</ValueStyle>
        </ProjectInfoStyle>
      </CostDueStyle>
    );
  }
}
