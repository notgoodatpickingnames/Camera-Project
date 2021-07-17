import { Component, ComponentLifecycle } from 'react';

export interface Route {
    label: string;
    path: string;
    component: React.FunctionComponent;
}