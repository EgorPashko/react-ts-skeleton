import type { ButtonProps } from "@mui/material";
import { Button as MaterialUiButton } from "@mui/material";

type Props = ButtonProps & {
  text: string;
};

// if you want to customize component with theme,
// see https://mui.com/material-ui/customization/how-to-customize/
export const Button = ({ text, ...args }: Props) => {
  return <MaterialUiButton {...args}>{text}</MaterialUiButton>;
};
