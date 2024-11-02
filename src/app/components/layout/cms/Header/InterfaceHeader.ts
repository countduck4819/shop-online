import { Dispatch, SetStateAction } from "react";

export interface IHeader<S> {
    setCollapsed: Dispatch<SetStateAction<S>>;
    collapsed: S;
}
