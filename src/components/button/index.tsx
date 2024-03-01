import { LucideIcon } from "lucide-react";
import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

type ButtonTypes = {
  variant: "warning" | "danger" | "success";
  label: string;
  Icon: LucideIcon;
  iconColor: string;
  position: "left" | "right";
} & HTMLAttributes<HTMLButtonElement>;

export function Button({
  variant,
  label,
  Icon,
  iconColor,
  position,
  ...rest
}: ButtonTypes) {
  const buttonVariant = {
    warning: "bg-light-warning",
    danger: "bg-light-danger",
    success: "bg-light-primary-main",
  };

  return (
    <button
      {...rest}
      className={twMerge(
        `${buttonVariant[variant]}`,
        "w-full rounded-lg flex gap-1 items-center text-light-background-main justify-center px-2 py-2"
      )}
    >
      <Icon size={14} color={iconColor} />
      {label}
    </button>
  );
}
