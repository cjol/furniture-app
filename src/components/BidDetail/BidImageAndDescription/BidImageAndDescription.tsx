import * as React from "react";
import { Placeholder } from "Components/Placeholder";
import styled from "styled-components";
const BidDetailsStyle = styled.div`
  display: flex;
  flex-direction: row;
`;
const BidTextImageStyle = styled.div<{bidImage:string}>`
  justify-content: flex-start;
  width: 30px;
  height: 35px;
  background-size: cover;
  background-image:url(${props=>{return props.bidImage;}});
`;
const BidTextStyle = styled.div``;

export class BidImageAndDescription extends React.PureComponent<{
  bidImage: string;
  bidDescriptionText: string;
}> {
  static defaultProps: BidImageAndDescription["props"] = {
    bidImage: "www.tyrohq.com",
    bidDescriptionText: "Lorem ipsum dora sit ameti"
  };

  render() {
    return (
      <BidDetailsStyle>
        <BidTextImageStyle bidImage={this.props.bidImage}/>
        <BidTextStyle>{this.props.bidDescriptionText}</BidTextStyle>
      </BidDetailsStyle>
    );
  }
}
