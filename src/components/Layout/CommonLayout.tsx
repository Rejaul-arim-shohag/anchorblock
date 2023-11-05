import React, { Fragment, ReactNode } from "react";
import { Menubar } from "../Menubar";

type CommonLayoutProps = {
  children: ReactNode;
};

const CommonLayout: React.FC<CommonLayoutProps> = ({ children }) => {
  return (
    <Fragment>
      <Menubar />
      {children}
    </Fragment>
  );
};

export default CommonLayout;
