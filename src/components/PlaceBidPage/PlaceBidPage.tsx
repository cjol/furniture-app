import { AppHeader } from "Components/AppHeader/AppHeader";
import { AboutBid } from "Components/DetailedProjectPage/AboutBid/AboutBid";
import { ImageBar } from "Components/ImageBar/ImageBar";
import { Placeholder } from "Components/Placeholder";
import { PlainText } from "Components/PlainText/PlainText";
import { ProjectHeader } from "Components/ProjectHeader/ProjectHeader";
import * as React from "react";
import { PlaceBid } from "./PlaceBid/PlaceBid";
import styled from "styled-components";
import { white } from "@style";

const PageStyle = styled.div`
  display: flex;
  font-size: 14px;
  padding: 24px;
  flex-direction: column;
  background-color: ${white};
`;

export class PlaceBidPage extends React.PureComponent<{
  placebidProps: PlaceBid["props"];
}> {
  static defaultProps: PlaceBidPage["props"] = {
    placebidProps: PlaceBid.defaultProps
  };

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
