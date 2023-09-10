'use client'


import { Metadata } from 'next'
import { Col, Row } from '@douyinfe/semi-ui';

export const metadata: Metadata = {
    title: '测试表单',
}

export default function Page() {
    
    return (
        <div className="grid">
        <Row>
            <Col span={24}><div className="col-content">col-24</div></Col>
        </Row>
        <br/>
        <Row>
            <Col span={12}><div className="col-content">col-12</div></Col>
            <Col span={12}><div className="col-content">col-12</div></Col>
        </Row>
        <br/>
        <Row>
            <Col span={8}><div className="col-content">col-8</div></Col>
            <Col span={8}><div className="col-content">col-8</div></Col>
            <Col span={8}><div className="col-content">col-8</div></Col>
        </Row>
        <br/>
        <Row>
            <Col span={6}><div className="col-content">col-6</div></Col>
            <Col span={6}><div className="col-content">col-6</div></Col>
            <Col span={6}><div className="col-content">col-6</div></Col>
            <Col span={6}><div className="col-content">col-6</div></Col>
        </Row>
    </div>
    )
}
