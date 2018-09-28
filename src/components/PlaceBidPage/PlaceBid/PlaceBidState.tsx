import { ProjectTag } from "Components/FilterResultsPopUp/FilterResultsProjectTags/ProjectTag/ProjectTag";
import * as React from "react";
import {
  Value as RRValue,
  Compose as RRCompose,
  Counter,
  Input,
  List,
  Toggle
} from "react-powerplug";

const Compose = RRCompose as any;
const Value = RRValue as any;

export class PlaceBidState extends React.PureComponent<{
  children: (
    input: {
      price: number;
      setPrice: (x: any) => void;

      time: string;
      setTime: (x: any) => void;

      description: string;
      setDescription: (x: any) => void;

      showConfirmationPopup: boolean;
      toggleConfirmationPopup: () => void;
    }
  ) => React.ReactNode;
}> {
  render() {
    return (
      // app state
      <Compose components={[Toggle]}>
        {({ on: showConfirmationPopup, toggle: toggleConfirmationPopup }) => {
          return (
            // form state
            <Compose
              components={[
                <Value initial={0} />, // Price
                Input, // Time
                Input // Description
              ]}
            >
              {(
                { value: price, set: setPriceNumber },
                { value: time, bind: bindTime },
                { value: description, bind: bindDescription }
              ) => {
                const setPrice = (price: number) => setPriceNumber(price);
                const setTime = bindTime.onChange;
                const setDescription = bindDescription.onChange;

                return this.props.children({
                  price,
                  setPrice,

                  time,
                  setTime,

                  description,
                  setDescription,

                  showConfirmationPopup,
                  toggleConfirmationPopup
                });
              }}
            </Compose>
          );
        }}
      </Compose>
    );
  }
}
