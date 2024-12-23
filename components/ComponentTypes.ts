import { ReactNode } from 'react';
import { Project } from '../data/DataTypes';

export type BasicComponent = {
  children?: ReactNode;
};

export type ComponentWithData = {
  data: Project;
};
