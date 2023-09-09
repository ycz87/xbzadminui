'use client'
import React, { Component } from 'react';
import Link from 'next/link'
import { Layout, Nav, Button, Breadcrumb, Skeleton, Avatar } from '@douyinfe/semi-ui';
import { IconSemiLogo, IconBell, IconHelpCircle, IconBytedanceLogo, IconStar, IconUser, IconUserGroup, IconSetting } from '@douyinfe/semi-icons';


export default function Home() {
    const { Header, Footer, Sider, Content } = Layout;
    return (
        <Layout style={{ border: '1px solid var(--semi-color-border)' }}>
            <Header style={{ backgroundColor: 'var(--semi-color-bg-1)' }}>
                <div>
                    <Nav mode="horizontal" defaultSelectedKeys={['Home']}>
                        <Nav.Header>
                            <IconSemiLogo style={{ height: '36px', fontSize: 36 }} />
                        </Nav.Header>
                        <span
                            style={{
                                color: 'var(--semi-color-text-2)',
                            }}
                        >
                            <span
                                style={{
                                    marginRight: '24px',
                                    color: 'var(--semi-color-text-0)',
                                    fontWeight: '600',
                                }}
                            >
                                模版推荐
                            </span>
                            <span style={{ marginRight: '24px' }}>所有模版</span>
                            <span>我的模版</span>
                        </span>
                        <Nav.Footer>
                            <Button
                                theme="borderless"
                                icon={<IconBell size="large" />}
                                style={{
                                    color: 'var(--semi-color-text-2)',
                                    marginRight: '12px',
                                }}
                            />
                            <Button
                                theme="borderless"
                                icon={<IconHelpCircle size="large" />}
                                style={{
                                    color: 'var(--semi-color-text-2)',
                                    marginRight: '12px',
                                }}
                            />
                            <Avatar color="orange" size="small">
                                YJ
                            </Avatar>
                        </Nav.Footer>
                    </Nav>
                </div>
            </Header>
            <Layout>
                <Sider style={{ backgroundColor: 'var(--semi-color-bg-1)' }}>
                    <Nav
                        bodyStyle={{ height: 320 }}
                        
                        onSelect={data => console.log('trigger onSelect: ', data)}
                        onClick={data => console.log('trigger onClick: ', data)}
                        
                    >
                        <Nav.Header logo={<IconSemiLogo style={{ height: '24px', fontSize: 24 }} />} text={'导航栏'} />

                        <Nav.Item itemKey={'union'} text={'活动管理'} icon={<IconStar />} />
                        <Nav.Sub itemKey={'Components'} text="Semi组件展示" icon={<IconUser />}>
                            <Link href='/semi/components'><Nav.Item itemKey={'Froms'} text={'表单组件'} /></Link>
                            
                        </Nav.Sub>
                        <Nav.Sub itemKey={'user'} text="用户管理" icon={<IconUser />}>
                            <Nav.Item itemKey={'active'} text={'活跃用户'} />
                            <Nav.Item itemKey={'negative'} text={'非活跃用户'} />
                        </Nav.Sub>
                        <Nav.Sub itemKey={'union-management'} text="任务管理" icon={<IconUserGroup />}>
                            <Nav.Item itemKey={'notice'} text={'任务设置'} />
                            <Nav.Item itemKey={'query'} text={'任务查询'} />
                            <Nav.Item itemKey={'info'} text={'信息录入'} />
                        </Nav.Sub>
                        <Nav.Footer collapseButton={true} />
                    </Nav>
                </Sider>
                <Content
                    style={{
                        padding: '24px',
                        backgroundColor: 'var(--semi-color-bg-0)',
                    }}
                >
                    <Breadcrumb
                        style={{
                            marginBottom: '24px',
                        }}
                        routes={['首页', '当这个页面标题很长时需要省略', '上一页', '详情页']}
                    />
                    <div
                        style={{
                            borderRadius: '10px',
                            border: '1px solid var(--semi-color-border)',
                            height: '600px',
                            padding: '32px',
                        }}
                    >
                        <Skeleton placeholder={<Skeleton.Paragraph rows={2} />} loading={true}>
                            <p>Hi, Bytedance dance dance.</p>
                            <p>Hi, Bytedance dance dance.</p>
                        </Skeleton>
                    </div>
                </Content>
            </Layout>
            <Footer
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    padding: '20px',
                    color: 'var(--semi-color-text-2)',
                    backgroundColor: 'rgba(var(--semi-grey-0), 1)',
                }}
            >
                <span
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    <IconBytedanceLogo size="large" style={{ marginRight: '8px' }} />
                    <span>Copyright © 2023 ByteDance. All Rights Reserved. </span>
                </span>
                <span>
                    <span style={{ marginRight: '24px' }}>平台客服</span>
                    <span>反馈建议</span>
                </span>
            </Footer>
        </Layout>
    )
}
