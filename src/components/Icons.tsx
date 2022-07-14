import { images } from "../assets";

export const iconMapper = {
  account: images.Account,
};

export type IconType = keyof typeof iconMapper;

type IconProps = {
  className?: string;
  type: IconType;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
};

const Icon = (props: IconProps) => {
  const { className, type, onClick } = props;

  if (!type) return null;
  const IconSource = iconMapper[type];

  return (
    <div className={className} onClick={(e) => onClick?.(e)}>
      <IconSource data-test={`${type}-icon`} />
    </div>
  );
};

export default Icon;
