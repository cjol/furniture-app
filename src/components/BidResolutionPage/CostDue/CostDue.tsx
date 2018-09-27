import { grey, mainFont, normalBoxShadow, whiteButtonColor } from "@style";
import * as React from "react";
import styled from "styled-components";

const CostDueStyle = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  justify-content: stretch;
  padding-top: 12px;
  padding-bottom: 12px;
`;

const ProjectInfoStyle = styled.div`
  display: flex;
  justify-content: flex-start;
  font-size: 15px;
  color: ${grey};
  font-family: ${mainFont};
  background: ${whiteButtonColor};
  box-shadow: ${normalBoxShadow};
  padding: 10px;
  justify-content: stretch;
  flex-grow: 1;
  width: 40%;
  margin: 12px;
  margin-bottom: 0px;
  margin-top: 0px;
`;

const LabelStyle = styled.div`
  display: flex;
  flex-direction: row;
  color: ${grey};
  font-family: ${mainFont};
  margin-right: 8px;
`;

const ValueStyle = styled.div`
  display: flex;
  flex-direction: row;
  font-weight: bold;
`;

const ContentsStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-grow: 1;
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
          <ContentsStyle>
            <LabelStyle>Price: </LabelStyle>
            <ValueStyle>{this.props.price}</ValueStyle>
          </ContentsStyle>
        </ProjectInfoStyle>
        <ProjectInfoStyle>
          <ContentsStyle>
            <LabelStyle>Due: </LabelStyle>
            <ValueStyle>{this.props.dueDate}</ValueStyle>
          </ContentsStyle>
        </ProjectInfoStyle>
      </CostDueStyle>
    );
  }
}
