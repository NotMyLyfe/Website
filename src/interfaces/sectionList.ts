import React from 'react';

export default interface sectionList {
    id: string;
    name: string;
    component: (visible: boolean) => React.ReactNode;
    visible: boolean;
    ref: React.LegacyRef<HTMLElement>;
}
