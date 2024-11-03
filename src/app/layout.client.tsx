import LayoutSite from '@/components/layout/LayoutSite';
import React, { FC, ReactNode } from 'react';

interface LayoutClientType {
    children: ReactNode
}

const LayoutClient:FC<LayoutClientType> = ({children}) => {
    return (
       <LayoutSite>{children}</LayoutSite>
    );
};

export default LayoutClient;