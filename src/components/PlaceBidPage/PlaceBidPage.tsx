import { AppHeader } from "Components/AppHeader/AppHeader";
import { AboutBid } from "Components/DetailedProjectPage/AboutBid/AboutBid";
import { ImageBar } from "Components/ImageBar/ImageBar";
import { Placeholder } from "Components/Placeholder";
import { PlainText } from "Components/PlainText/PlainText";
import { ProjectHeader } from "Components/ProjectHeader/ProjectHeader";
import * as React from "react";
import { PlaceBid } from "./PlaceBid/PlaceBid";
import styled from "styled-components";

const PageStyle = styled.div`
displa:flex;
font-size:14px;
`;

export class PlaceBidPage extends React.PureComponent<{}> {
  static defaultProps: PlaceBidPage["props"] = {};

  render() {
    return (
      <PageStyle>
        <AppHeader />
        <ProjectHeader />
        <AboutBid />
        <ImageBar />
        <PlainText>Instructions go here</PlainText>
        <PlaceBid />
      </PageStyle>
    );
  }
}
