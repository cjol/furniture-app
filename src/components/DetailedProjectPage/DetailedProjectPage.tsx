import { AppHeader } from "Components/AppHeader/AppHeader";
import { ImageBar } from "Components/ImageBar/ImageBar";
import { Placeholder } from "Components/Placeholder";
import { ProjectHeader } from "Components/ProjectHeader/ProjectHeader";
import { RectangularButton } from "Components/RectangularButton/RectangularButton";
import * as React from "react";
import { AboutBid } from "./AboutBid/AboutBid";
import { ActiveBids } from "./ActiveBids/ActiveBids";
import { ClarificationBoard } from "./ClarificationBoard/ClarificationBoard";
import { PendingQueries } from "./PendingQueries/PendingQueries";
import { PlainText } from "Components/PlainText/PlainText";
import styled from "styled-components";

const PageContentStyle = styled.div`
  display: flex;
  flex-direction: column;
`;

export class DetailedProjectPage extends React.PureComponent<{}> {
  static defaultProps: DetailedProjectPage["props"] = {};

  render() {
    return (
      <PageContentStyle>
        <AppHeader />
        <ProjectHeader />
        <AboutBid />
        <ImageBar />
        <PlainText>Project Description</PlainText>

        <ActiveBids />
        <RectangularButton />
      </PageContentStyle>
    );
  }
}
