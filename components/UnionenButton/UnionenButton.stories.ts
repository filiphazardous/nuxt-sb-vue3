import type { Meta, StoryObj } from '@storybook/vue3';

import {
  BankIdMedium,
  HouseHomeMedium,
  makeVueComponent,
} from '@unionen/icons';
import {
  IButtonColor,
  IButtonSize,
  IButtonVariant,
} from './types/UnionenButton.interface';
import Button from './UnionenButton.vue';

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Atoms/Buttons/Button',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    onClick: {},
    colorScheme: {
      control: { type: 'radio' },
      options: IButtonColor,
    },
    size: {
      control: { type: 'radio' },
      options: IButtonSize,
    },
    variant: {
      control: { type: 'radio' },
      options: IButtonVariant,
    },
  },
  args: {
    colorScheme: IButtonColor.Primary,
    size: IButtonSize.Medium,
    variant: IButtonVariant.Contained,
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const ContainedPrimary: Story = {
  args: {
    size: IButtonSize.Medium,
    colorScheme: IButtonColor.Primary,
    label: 'Button',
  },
};

export const ContainedSecondary: Story = {
  args: {
    colorScheme: IButtonColor.Secondary,
    size: IButtonSize.Medium,
    label: 'Button',
  },
};

export const ContainedDestructive: Story = {
  args: {
    colorScheme: IButtonColor.Destructive,
    size: IButtonSize.Medium,
    label: 'Button',
  },
};

export const ContainedDisabled: Story = {
  args: {
    disabled: true,
    label: 'Button',
  },
};

export const ContainedPrimaryLongLabel: Story = {
  args: {
    ...ContainedPrimary.args,
    label: 'Button with a really long label',
  },
};

export const ContainedPrimaryAsLink: Story = {
  args: {
    ...ContainedPrimary.args,
    path: 'https://www.unionen.se',
  },
};

export const ContainedPrimaryWithLeftIcon: Story = {
  args: {
    ...ContainedPrimary.args,
  },
  parameters: {
    slots: {
      prepend: {
        components: {
          HouseHomeMedium: makeVueComponent(HouseHomeMedium as string),
        },
        template: '<HouseHomeMedium />',
      },
    },
  },
};

export const ContainedPrimaryWithRightIcon: Story = {
  args: {
    ...ContainedPrimary.args,
  },
  parameters: {
    slots: {
      append: {
        components: {
          HouseHomeMedium: makeVueComponent(HouseHomeMedium as string),
        },
        template: '<HouseHomeMedium />',
      },
    },
  },
};

export const SignWithBankId: Story = {
  args: {
    ...ContainedPrimary.args,
    label: 'Sign with BankID',
  },
  parameters: {
    slots: {
      prepend: {
        components: {
          BankIdMedium: makeVueComponent(BankIdMedium as string),
        },
        template: '<BankIdMedium />',
      },
    },
  },
};

export const TextPrimary: Story = {
  args: {
    size: IButtonSize.Medium,
    colorScheme: IButtonColor.Primary,
    label: 'Button',
    variant: IButtonVariant.Text,
  },
};

export const TextSecondary: Story = {
  args: {
    size: IButtonSize.Medium,
    colorScheme: IButtonColor.Secondary,
    label: 'Button',
    variant: IButtonVariant.Text,
  },
};

export const TextDestructive: Story = {
  args: {
    size: IButtonSize.Medium,
    colorScheme: IButtonColor.Destructive,
    label: 'Button',
    variant: IButtonVariant.Text,
  },
};

export const TextDisabled: Story = {
  args: {
    ...TextPrimary.args,
    disabled: true,
  },
};

export const TextPrimaryWithLeftIcon: Story = {
  args: {
    ...TextPrimary.args,
  },
  parameters: {
    slots: {
      prepend: {
        components: {
          HouseHomeMedium: makeVueComponent(HouseHomeMedium as string),
        },
        template: '<HouseHomeMedium />',
      },
    },
  },
};
