import * as React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Story } from '@storybook/react/types-6-0';

interface Props {
  children: React.ReactNode;
  title: string;
}


const StoryTemplate: Story<Props> = ({ children, title }) => (
  <div>
    <h1>{title}</h1>
    {children}
  </div>
);

export default StoryTemplate;
