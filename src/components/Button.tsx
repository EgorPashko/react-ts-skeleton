import { Button as MaterialUiButton } from "@mui/material";

// if you want to customize component with theme,
// see https://mui.com/material-ui/customization/how-to-customize/
export const Button = ({ text }: { text: string }) => {
  return <MaterialUiButton>{text}</MaterialUiButton>;
};
