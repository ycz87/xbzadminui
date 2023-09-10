'use client'


import { Metadata } from 'next'
import { Col, Row, Typography } from '@douyinfe/semi-ui';
import styles from './styles.module.css'

export const metadata: Metadata = {
    title: '测试表单',
}

export default function Page() {
    const { Title } = Typography;
    return (
        <div>
            <Title heading={3} style={{ margin: '8px 0' }} >基础使用</Title>
            <div className="grid">
                <Row>
                    <Col span={24}><div className={styles.colstyle}>col-24</div></Col>
                </Row>
                <br />
                <Row>
                    <Col span={12}><div className={styles.colstyle}>col-12</div></Col>
                    <Col span={12}><div className={styles.colstyle}>col-12</div></Col>
                </Row>
                <br />
                <Row>
                    <Col span={8}><div className={styles.colstyle}>col-8</div></Col>
                    <Col span={8}><div className={styles.colstyle}>col-8</div></Col>
                    <Col span={8}><div className={styles.colstyle}>col-8</div></Col>
                </Row>
                <br />
                <Row>
                    <Col span={6}><div className={styles.colstyle}>col-6</div></Col>
                    <Col span={6}><div className={styles.colstyle}>col-6</div></Col>
                    <Col span={6}><div className={styles.colstyle}>col-6</div></Col>
                    <Col span={6}><div className={styles.colstyle}>col-6</div></Col>
                </Row>
            </div>

            <Title heading={3} style={{ margin: '8px 0' }} >Gutter 间隔</Title>
            <div className="grid grid-gutter">
                <p>horizontal</p>
                <hr />
                <Row gutter={16}>
                    <Col span={6}>
                        <div className={styles.colstyle}>col-6</div>
                    </Col>
                    <Col span={6}>
                        <div className={styles.colstyle}>col-6</div>
                    </Col>
                    <Col span={6}>
                        <div className={styles.colstyle}>col-6</div>
                    </Col>
                    <Col span={6}>
                        <div className={styles.colstyle}>col-6</div>
                    </Col>
                    <Col span={6}>
                        <div className={styles.colstyle}>col-6</div>
                    </Col>
                    <Col span={6}>
                        <div className={styles.colstyle}>col-6</div>
                    </Col>
                    <Col span={6}>
                        <div className={styles.colstyle}>col-6</div>
                    </Col>
                    <Col span={6}>
                        <div className={styles.colstyle}>col-6</div>
                    </Col>
                </Row>
                <p>vertical</p>
                <hr />
                <Row gutter={[16, 24]}>
                    <Col span={6}>
                        <div className={styles.colstyle}>col-6</div>
                    </Col>
                    <Col span={6}>
                        <div className={styles.colstyle}>col-6</div>
                    </Col>
                    <Col span={6}>
                        <div className={styles.colstyle}>col-6</div>
                    </Col>
                    <Col span={6}>
                        <div className={styles.colstyle}>col-6</div>
                    </Col>
                    <Col span={6}>
                        <div className={styles.colstyle}>col-6</div>
                    </Col>
                    <Col span={6}>
                        <div className={styles.colstyle}>col-6</div>
                    </Col>
                    <Col span={6}>
                        <div className={styles.colstyle}>col-6</div>
                    </Col>
                    <Col span={6}>
                        <div className={styles.colstyle}>col-6</div>
                    </Col>
                </Row>
            </div>

            <Title heading={3} style={{ margin: '8px 0' }} >Offset 偏移</Title>
            <div className="grid">
                <Row>
                    <Col span={8}><div className={styles.colstyle}>col-8</div></Col>
                    <Col span={8} offset={8}>
                        <div className={styles.colstyle}>col-8</div>
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col span={6} offset={6}>
                        <div className={styles.colstyle}>col-6</div>
                    </Col>
                    <Col span={6} offset={6}>
                        <div className={styles.colstyle}>col-6</div>
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col span={12} offset={6}>
                        <div className={styles.colstyle}>col-12</div>
                    </Col>
                </Row>
            </div>

            <Title heading={3} style={{ margin: '8px 0' }} >Flex 布局</Title>
            <div className="grid">
                <p>sub-element align left</p>
                <Row type="flex" justify="start">
                    <Col span={4}><div className={styles.colstyle}>col-4</div></Col>
                    <Col span={4}><div className={styles.colstyle}>col-4</div></Col>
                    <Col span={4}><div className={styles.colstyle}>col-4</div></Col>
                    <Col span={4}><div className={styles.colstyle}>col-4</div></Col>
                </Row>

                <p>sub-element align center</p>
                <Row type="flex" justify="center">
                    <Col span={4}><div className={styles.colstyle}>col-4</div></Col>
                    <Col span={4}><div className={styles.colstyle}>col-4</div></Col>
                    <Col span={4}><div className={styles.colstyle}>col-4</div></Col>
                    <Col span={4}><div className={styles.colstyle}>col-4</div></Col>
                </Row>

                <p>sub-element align right</p>
                <Row type="flex" justify="end">
                    <Col span={4}><div className={styles.colstyle}>col-4</div></Col>
                    <Col span={4}><div className={styles.colstyle}>col-4</div></Col>
                    <Col span={4}><div className={styles.colstyle}>col-4</div></Col>
                    <Col span={4}><div className={styles.colstyle}>col-4</div></Col>
                </Row>

                <p>sub-element monospaced arrangement</p>
                <Row type="flex" justify="space-between">
                    <Col span={4}><div className={styles.colstyle}>col-4</div></Col>
                    <Col span={4}><div className={styles.colstyle}>col-4</div></Col>
                    <Col span={4}><div className={styles.colstyle}>col-4</div></Col>
                    <Col span={4}><div className={styles.colstyle}>col-4</div></Col>
                </Row>

                <p>sub-element align full</p>
                <Row type="flex" justify="space-around">
                    <Col span={4}><div className={styles.colstyle}>col-4</div></Col>
                    <Col span={4}><div className={styles.colstyle}>col-4</div></Col>
                    <Col span={4}><div className={styles.colstyle}>col-4</div></Col>
                    <Col span={4}><div className={styles.colstyle}>col-4</div></Col>
                </Row>
            </div>


            <Title heading={3} style={{ margin: '8px 0' }} >Flex 子元素垂直对齐</Title>
            <div className="grid grid-flex">
                <p>Align Top</p>
                <Row type="flex" justify="center" align="top">
                    <Col span={4}><div className={styles.colstyle} value={100}>col-4</div></Col>
                    <Col span={4}><div className={styles.colstyle} value={50}>col-4</div></Col>
                    <Col span={4}><div className={styles.colstyle} value={120}>col-4</div></Col>
                    <Col span={4}><div className={styles.colstyle} value={80}>col-4</div></Col>
                </Row>

                <p>Align Center</p>
                <Row type="flex" justify="space-around" align="middle">
                    <Col span={4}><div className={styles.colstyle} value={100}>col-4</div></Col>
                    <Col span={4}><div className={styles.colstyle} value={50}>col-4</div></Col>
                    <Col span={4}><div className={styles.colstyle} value={120}>col-4</div></Col>
                    <Col span={4}><div className={styles.colstyle} value={80}>col-4</div></Col>
                </Row>

                <p>Align Bottom</p>
                <Row type="flex" justify="space-between" align="bottom">
                    <Col span={4}><div className={styles.colstyle} value={100}>col-4</div></Col>
                    <Col span={4}><div className={styles.colstyle} value={50}>col-4</div></Col>
                    <Col span={4}><div className={styles.colstyle} value={120}>col-4</div></Col>
                    <Col span={4}><div className={styles.colstyle} value={80}>col-4</div></Col>
                </Row>
            </div>

            <Title heading={3} style={{ margin: '8px 0' }} >Flex 元素排序</Title>
            <div className="grid">
                <Row type="flex">
                    <Col span={6} order={4}><div className={styles.colstyle}>col-4</div></Col>
                    <Col span={6} order={3}><div className={styles.colstyle}>col-3</div></Col>
                    <Col span={6} order={2}><div className={styles.colstyle}>col-2</div></Col>
                    <Col span={6} order={1}><div className={styles.colstyle}>col-1</div></Col>
                </Row>
            </div>

            <Title heading={3} style={{ margin: '8px 0' }} >响应式</Title>
            <div className="grid">
                <Row gutter={{ xs: 16, sm: 16, md: 16, lg: 24, xl: 24, xxl: 24 }}>
                    <Col xs={2} sm={4} md={6} lg={8} xl={10}><div className={styles.colstyle}>Col</div></Col>
                    <Col xs={20} sm={16} md={12} lg={8} xl={4}><div className={styles.colstyle}>Col</div></Col>
                    <Col xs={2} sm={4} md={6} lg={8} xl={10}><div className={styles.colstyle}>Col</div></Col>
                </Row>
                <br />
                <Row>
                    <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}><div className={styles.colstyle}>Col</div></Col>
                    <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}><div className={styles.colstyle}>Col</div></Col>
                    <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}><div className={styles.colstyle}>Col</div></Col>
                </Row>
            </div>




        </div>
    )
}
