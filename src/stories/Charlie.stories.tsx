import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta } from '@storybook/react/types-6-0';
import { Button } from './Button';
import { Story, StoryTemplate } from '../../.storybook/StoryTemplate';

export default {
  title: 'Charlie/Button',
} as Meta;

export const SampleButton: Story = () => (
  <StoryTemplate title="Charlie Button">
    <Button label="button" />
  </StoryTemplate>
);
