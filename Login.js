import React, { Component, useState } from 'react';
import SideBarP from "../components/SideBarP"
import TopBarP from "../components/TopBarP";
import { Layout, Avatar, Affix } from 'antd';
import CArousel from '/Users/YanYang/test/src/components/Carousel.js';

const { Header, Content, Sider } = Layout;

function Login () {
    const [top, setTop] = useState(10);
    return (
        <div>
            <Layout>
                <TopBarP />
            <Layout>
                <Sider 
                className="Sider" 
                theme="light" 
                style={{ minHeight: 600,}} 
                >
                    <Affix offsetTop={top} >
                    <SideBarP />
                    </Affix>
                </Sider>
            
            <Layout style={{ padding: '0 15px 24px' }} >
                <Content 
                className="Content"
                style={{
                padding: '12px 0px',
                margin: 0,
                minHeight: 280,
                }}
                >
                    <CArousel/>
                    This is Login 
                </Content>
            </Layout>
            </Layout>
            </Layout>
        </div>
    );
  }


export default Login;