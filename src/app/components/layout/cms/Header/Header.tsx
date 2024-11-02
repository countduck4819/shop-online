"use client";
import { Button, Layout } from "antd";
import React from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { IHeader } from "./InterfaceHeader";
function Header(props: IHeader<boolean>) {
    const { collapsed, setCollapsed } = props;
    const { Header } = Layout;
    return (
        <Header
            style={{
                padding: 0,
                background: "#fff",
                boxShadow: "rgba(100, 100, 111, 0.2) 0px 0px 29px 0px;",
            }}
        >
            <Button
                type="text"
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                onClick={() => setCollapsed(!collapsed)}
                style={{
                    fontSize: "16px",
                    width: 64,
                    height: 64,
                }}
            />
        </Header>
    );
}

export default Header;
