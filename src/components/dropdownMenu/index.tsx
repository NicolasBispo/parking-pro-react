"use client"
import React, { useState } from "react";
import { ChevronDown, ChevronRight, LucideIcon } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

type DropdownMenuTypes = {
  label: string;
  Icon?: LucideIcon;
  children: React.ReactNode;
};
export function DropdownMenu({ label, Icon, children }: DropdownMenuTypes) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className="dropdown relative flex flex-col gap-1 text-base items-center w-full cursor-pointer bg-light-primary-dark text-light-background-main overflow-hidden"
    >
      <div className="flex items-center w-full justify-between px-2 py-1" onClick={() => setIsOpen(!isOpen)}>
        <div className="w-full flex items-center gap-1">
          {Icon && <Icon size={20} />}
          <span>{label}</span>
        </div>
        <ChevronRight
          className={`${isOpen ? "rotate-[90deg]" : ""} duration-400`}
          size={16}
        />
      </div>
      <AnimatePresence>
        {isOpen && children && (
          <motion.div
            className="w-full"
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.4 }}
          >
            {React.Children.map(children, (child) => {
              return React.cloneElement(child as React.ReactElement<any>, {
                closeMenu: toggleMenu,
              });
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

type DropdownItemTypes = {
  children: React.ReactNode;
  onSelect?: () => void;
};
export function DropdownItem({ children, onSelect }: DropdownItemTypes) {
  return (
    <div
      onClick={onSelect ? () => onSelect() : () => null}
      className="cursor-pointer w-full bg-light-primary-base px-2 py-1"
    >
      {children}
    </div>
  );
}
