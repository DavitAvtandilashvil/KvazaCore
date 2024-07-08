import { ReactNode } from "react";
import React from "react";

interface Ui_Item_Prop {
  isEnable: boolean;
  number: string | number;
  content: ReactNode;
}
const Views_Component_Loader = (props: Ui_Item_Prop) => {
  const [enable, setEnable] = React.useState(props.isEnable);
  setTimeout(() => {
    setEnable(enable);
  }, 5);
  return enable ? props.content : <></>;
};

export { Views_Component_Loader };
