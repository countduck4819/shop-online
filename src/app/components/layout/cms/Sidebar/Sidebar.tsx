"use client";
import {
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import React, { useState } from "react";
import Header from "../Header/Header";
import { ILayoutComponent } from "@/app/shared/utils/shared-interfaces";

function Sidebar({ children }: ILayoutComponent) {
    const [collapsed, setCollapsed] = useState<boolean>(false);
    return (
        <div style={{ height: "100vh" }}>
            <Layout style={{height: "100%"}}>
                <Sider trigger={null} collapsible collapsed={collapsed}>
                    <div className="demo-logo-vertical" />
                    <Menu
                        theme="dark"
                        mode="inline"
                        defaultSelectedKeys={["1"]}
                        items={[
                            {
                                key: "1",
                                icon: <UserOutlined />,
                                label: "nav 1",
                            },
                            {
                                key: "2",
                                icon: <VideoCameraOutlined />,
                                label: "nav 2",
                            },
                            {
                                key: "3",
                                icon: <UploadOutlined />,
                                label: "nav 3",
                            },
                        ]}
                    />
                </Sider>
                <Layout>
                    <Header setCollapsed={setCollapsed} collapsed={collapsed} />
                    {children}
                </Layout>
            </Layout>
        </div>
    );
}

export default Sidebar;
