import React, { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export function Table({ children }: { children: React.ReactNode }) {
  return <table className="w-full p-1">{children}</table>;
}

export function TableHead({ children }: { children: React.ReactNode }) {
  const rowCount = React.Children.toArray(children).filter(
    (child) =>
      React.isValidElement(child) && (child.type as any).name === "TableRow"
  ).length;

  const gridStyle = `grid grid-rows-${rowCount}`;
  return <thead className={twMerge(gridStyle, "w-full")}>{children}</thead>;
}

export function TableHeader({
  children,
  ...rest
}: {
  children: React.ReactNode;
}) {
  return (
    <th className="flex items-center justify-center w-full h-full">
      <span className="w-full">{children}</span>
    </th>
  );
}

export function TableBody({ children }: { children: React.ReactNode }) {
  const rowCount = React.Children.toArray(children).filter(
    (child) =>
      React.isValidElement(child) && (child.type as any).name === "TableRow"
  ).length;

  return <tbody className={"w-full flex flex-col"}>{children}</tbody>;
}

export function TableRow({
  children,
  bold,
}: {
  children: React.ReactNode;
  bold?: boolean;
}) {
  const colsCount = React.Children.toArray(children).filter((child) =>
    React.isValidElement(child)
  ).length;

  let bgColor = "bg-light-primary-dark text-light-background-main";

  if (bold !== undefined) {
    bgColor = bold
      ? "bg-light-background-main text-light-primary-dark"
      : "bg-light-background-dark text-light-primary-dark";
  }

  const gridStyle = `repeat(${colsCount}, minmax(0, 1fr))`;
  return (
    <tr
      className={twMerge(
        bgColor,
        "gap-1 w-full border-0 border-b border-b-light-primary-dark/30"
      )}
      style={{ display: "grid", gridTemplateColumns: gridStyle }}
    >
      {children}
    </tr>
  );
}

export function TableColumn({
  children,
  ...rest
}: {
  children: React.ReactNode;
} & HTMLAttributes<HTMLTableCellElement>) {
  return (
    <td
      {...rest}
      className="h-full border-0 border-r border-r-light-primary-dark/30 flex items-center justify-center w-full"
    >
      {children}
    </td>
  );
}
