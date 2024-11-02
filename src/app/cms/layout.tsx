import React from "react";
import { ILayoutComponent } from "../shared/utils/shared-interfaces";
import Sidebar from "../components/layout/cms/Sidebar/Sidebar";

function layout({ children }: ILayoutComponent) {
    return <Sidebar>{children}</Sidebar>;
}

export default layout;
