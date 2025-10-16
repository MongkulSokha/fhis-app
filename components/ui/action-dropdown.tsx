import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "./dropdown-menu";
import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { Button } from "./button";
import { IconDotsVertical } from "@tabler/icons-react";
import ConfirmDeleteButton from "./delete-button";

interface ActionDropdownProps {
  onConfirmDelete: () => Promise<void> | void;
}

const ActionDropdown: React.FC<ActionDropdownProps> = ({ onConfirmDelete }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="data-[state=open]:bg-muted text-muted-foreground flex size-8"
          size="icon"
        >
          <IconDotsVertical />
          <span className="sr-only">Open menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-32 !text-center">
        <DropdownMenuItem className=" hover:bg-gray-200">Edit</DropdownMenuItem>
        <DropdownMenuSeparator />
        <ConfirmDeleteButton onConfirm={onConfirmDelete} />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ActionDropdown;
