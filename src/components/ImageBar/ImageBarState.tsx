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

export class ImageBarState extends React.PureComponent<{
  images: string[];
  children: (
    input: {
      selectedPhotoUrls: string[];
      goLeft: () => void;
      goRight: () => void;
    }
  ) => React.ReactNode;
}> {
  render() {
    // mutation goes here

    return (
      // form state
      <Compose components={[Counter]}>
        {({ count: firstImage, inc: imageNext, dec: imagePrev }) => {
          const imageCount = firstImage % this.props.images.length;
          const selectedPhotoUrls = this.props.images.slice(
            imageCount,
            imageCount + 3
          );

          return this.props.children({
            selectedPhotoUrls,
            goLeft: firstImage > 0 ? imagePrev : null,
            goRight:
              firstImage + 3 < this.props.images.length ? imageNext : null
          });
        }}
      </Compose>
    );
  }
}
