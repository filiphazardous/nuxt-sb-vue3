export enum IButtonVariant {
  Contained = 'CONTAINED',
  Text = 'TEXT',
}

export enum IButtonColor {
  Primary = 'PRIMARY',
  Secondary = 'SECONDARY',
  Destructive = 'DESTRUCTIVE',
}

export enum IButtonSize {
  Small = 'SMALL',
  Medium = 'MEDIUM',
  Large = 'LARGE',
}

export enum IButtonType {
  Button = 'button',
  Submit = 'submit',
  Reset = 'reset',
}

export interface IButton {
  label?: string;
  variant?: IButtonVariant;
  colorScheme?: IButtonColor;
  size?: IButtonSize;
  type?: IButtonType;
  path?: string;
  disabled?: boolean;
  loading?: boolean;
  ariaLabel?: string;
}
