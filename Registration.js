import React, { useState } from "react";
import SideBar from "../components/SideBar"
import TopBar from "../components/TopBar";
import { Layout, Affix } from 'antd';

const { Header, Content, Sider } = Layout;

function Registration() {
    return (
        <div>
            <Layout>
                <Affix>
                    <TopBar />
                </Affix>
                <Layout>
                    <Sider
                        className="site-layout-background"
                        theme="light"
                        style={{ minHeight: 600, }}
                    >
                        <Affix offsetTop={50}>
                            <SideBar />
                        </Affix>
                    </Sider>

                    <Layout style={{ padding: '0 24px 24px' }} >
                        <Content
                            className="site-layout-background"
                            style={{
                                padding: '12px 0px',
                                margin: 0,
                                minHeight: 280,
                            }}
                        >
                            This is Registration
                </Content>
                    </Layout>
                </Layout>
            </Layout>
        </div>
    );

}

export default Registration;