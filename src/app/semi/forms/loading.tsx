'use client'
import React from 'react';
import { Skeleton} from '@douyinfe/semi-ui';


export default function Page() {
    return (
            <Skeleton placeholder={<Skeleton.Avatar />} loading={true}>
            </Skeleton>
    )
}
