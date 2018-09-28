import { ProjectTag } from "Components/FilterResultsPopUp/FilterResultsProjectTags/ProjectTag/ProjectTag";
import * as React from "react";
import {
  Compose as RRCompose,
  Counter,
  Input,
  List,
  Toggle
} from "react-powerplug";

const Compose = RRCompose as any;

export class CreateProjectPageState extends React.PureComponent<{
  children: (
    input: {
      showUploadPopup: boolean;
      toggleUploadPopup: () => void;

      allPhotoUrls: { image: string; changeImage: (i: string) => void }[];
      addPhotoUrl: () => void;

      selectedPhotoUrls: string[];
      goLeft: () => void;
      goRight: () => void;

      title: string;
      setTitle: (x: any) => void;

      description: string;
      setDescription: (x: any) => void;

      projectTags: ProjectTag["props"][];
    }
  ) => React.ReactNode;
}> {
  render() {
    return (
      // mutation goes here

      // app state
      <Compose components={[Toggle]}>
        {({ on: showUploadPopup, toggle: toggleUploadPopup }) => {
          return (
            // form state
            <Compose
              components={[
                Input, // Title
                List, // Images
                Input, // Description
                Toggle,
                Toggle,
                Toggle,
                Toggle,
                Toggle,
                Toggle,
                Counter
              ]}
            >
              {(
                { value: title, bind: bindTitle },
                { list: images, push: pushImage, set: setImages },
                { value: description, bind: bindDescription },
                { on: bedSelected, toggle: bedToggle },
                { on: chairSelected, toggle: chairToggle },
                { on: tableSelected, toggle: tableToggle },
                { on: bedsideTableSelected, toggle: bedsideTableToggle },
                { on: deskSelected, toggle: deskToggle },
                { on: sofaSelected, toggle: sofaToggle },
                { count: firstImage, inc: imageNext, dec: imagePrev }
              ) => {
                const setTitle = bindTitle.onChange;
                const setDescription = bindDescription.onChange;
                const projectTags = [
                  {
                    projectTag: "Bed",
                    selected: bedSelected,
                    toggle: bedToggle
                  },
                  {
                    projectTag: "Chair",
                    selected: chairSelected,
                    toggle: chairToggle
                  },
                  {
                    projectTag: "Table",
                    selected: tableSelected,
                    toggle: tableToggle
                  },
                  {
                    projectTag: "Bedside Table",
                    selected: bedsideTableSelected,
                    toggle: bedsideTableToggle
                  },
                  {
                    projectTag: "Desk",
                    selected: deskSelected,
                    toggle: deskToggle
                  },
                  {
                    projectTag: "Sofa",
                    selected: sofaSelected,
                    toggle: sofaToggle
                  }
                ];

                const allPhotoUrls = images.map((image, i) => ({
                  image,
                  changeImage: (newString: string) =>
                    setImages(is =>
                      is.map((_, i2) => (i === i2 ? newString : _))
                    )
                }));
                const addPhotoUrl = () => pushImage("");

                const imageCount = firstImage % images.length;
                const selectedPhotoUrls = images.slice(
                  imageCount,
                  imageCount + 3
                );

                return this.props.children({
                  showUploadPopup,
                  toggleUploadPopup,

                  allPhotoUrls,
                  addPhotoUrl,

                  selectedPhotoUrls,
                  goLeft: firstImage > 0 ? imagePrev : null,
                  goRight: firstImage + 3 < images.length ? imageNext : null,

                  title,
                  setTitle,

                  description,
                  setDescription,

                  projectTags
                });
              }}
            </Compose>
          );
        }}
      </Compose>
    );
  }
}
