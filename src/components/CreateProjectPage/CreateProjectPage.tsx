import { white } from "@style";
import { AppHeader } from "Components/AppHeader/AppHeader";
import { ImageBar } from "Components/ImageBar/ImageBar";
import { PhotoUploadPopUp } from "Components/PhotoUploadPopUp/PhotoUploadPopUp";
import { ProjectHeader } from "Components/ProjectHeader/ProjectHeader";
import * as React from "react";
import styled from "styled-components";

import { CreateProjectButton } from "./CreateProjectButton/CreateProjectButton";
import { CreateProjectPageState } from "./CreateProjectPageState";
import { PhotoContainer } from "./PhotoContainer/PhotoContainer";
import { ProjectDescription } from "./ProjectDescription/ProjectDescription";
import { TaggingProject } from "./TaggingProject/TaggingProject";

const CreateProjectPageStyle = styled.div`
  display: flex;
  flex-direction: column;
`;

const PageContents = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  background-color: ${white};
`;

export class CreateProjectPage extends React.PureComponent<{
  appHeaderProps: AppHeader["props"];
  onClick: () => void;
}> {
  static defaultProps: CreateProjectPage["props"] = {
    appHeaderProps: AppHeader.defaultProps,
    onClick: () => alert("Posting Project")
  };

  render() {
    return (
      <CreateProjectPageState>
        {({
          showUploadPopup,
          toggleUploadPopup,

          allPhotoUrls,
          addPhotoUrl,

          title,
          setTitle,

          description,
          setDescription,

          projectTags
        }) => {
          const mutationTags = projectTags
            .filter(p => p.selected)
            .map(p => p.projectTag);
          const mutationImages = allPhotoUrls.map(a => a.image);

          return (
            <CreateProjectPageStyle>
              <PhotoUploadPopUp
                popupProps={{
                  show: showUploadPopup,
                  headerProps: {
                    title: "Photo Upload",
                    closeFunction: toggleUploadPopup
                  }
                }}
                photoUrlProps={allPhotoUrls}
                addButtonProps={addPhotoUrl}
                uploadPhotoProps={toggleUploadPopup}
              />
              <AppHeader {...this.props.appHeaderProps} />
              <PageContents>
                <ProjectHeader />
                <PhotoContainer uploadPhoto={toggleUploadPopup} />
                <ImageBar image={allPhotoUrls.map(x => x.image)} />
                <ProjectDescription
                  description={description}
                  setDescription={setDescription}
                />
                <TaggingProject
                  filterResultsProps={{ projectTagProps: projectTags }}
                />

                <CreateProjectButton
                  title={"Temporary Title"}
                  description={description}
                  photos={mutationImages}
                  tags={mutationTags}
                />
              </PageContents>
            </CreateProjectPageStyle>
          );
        }}
      </CreateProjectPageState>
    );
  }
}
