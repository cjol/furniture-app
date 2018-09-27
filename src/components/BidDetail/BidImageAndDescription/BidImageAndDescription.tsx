import * as React from "react";
import { Placeholder } from "Components/Placeholder";
import styled from "styled-components";
const BidDetailsStyle = styled.div`
  display: flex;
  flex-direction: row;
`;
const BidTextImageStyle = styled.div<{ bidImage: string }>`
  justify-content: flex-start;
  width: 60px;
  height: 60px;
  border-radius: 90px;
  background-size: cover;
  background-image: url(${props => {
    return props.bidImage;
  }});
`;
const BidTextStyle = styled.div`
  margin-left: 24px;
  flex: display;
  flex-direction: row;
  justify-content: center;
  flex-grow: 1;
`;

export class BidImageAndDescription extends React.PureComponent<{
  bidImage: string;
  bidDescriptionText: string;
}> {
  static defaultProps: BidImageAndDescription["props"] = {
    bidImage: "https://tyrohq.com/img/tyro-logo-dark.png",
    bidDescriptionText: "Lorem ipsum dora sit ameti"
  };

  render() {
    return (
      <BidDetailsStyle>
        <BidTextImageStyle bidImage={this.props.bidImage} />
        <BidTextStyle>{this.props.bidDescriptionText}</BidTextStyle>
      </BidDetailsStyle>
    );
  }
}
