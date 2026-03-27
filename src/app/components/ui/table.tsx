"use client";

import * as React from "react";

import { cn } from "./utils";

function Table({ className, ...props }: React.ComponentProps<"table">) {
  return (
    <div
      data-slot="table-container"
      className="relative w-full overflow-x-auto overflow-clip rounded-tl-[4px] rounded-tr-[4px]"
    >
      <table
        data-slot="table"
        className={cn("w-full caption-bottom", className)}
        style={{ fontSize: "var(--text-base)", fontFamily: "'Alibaba PuHuiTi 3.0', sans-serif" }}
        {...props}
      />
    </div>
  );
}

function TableHeader({ className, ...props }: React.ComponentProps<"thead">) {
  return (
    <thead
      data-slot="table-header"
      className={cn("[&_tr]:border-b-0", className)}
      style={{ backgroundColor: "#f2f4f9" }}
      {...props}
    />
  );
}

function TableBody({ className, ...props }: React.ComponentProps<"tbody">) {
  return (
    <tbody
      data-slot="table-body"
      className={cn("[&_tr:last-child]:border-0", className)}
      {...props}
    />
  );
}

function TableFooter({ className, ...props }: React.ComponentProps<"tfoot">) {
  return (
    <tfoot
      data-slot="table-footer"
      className={cn(
        "bg-muted/50 border-t font-medium [&>tr]:last:border-b-0",
        className,
      )}
      {...props}
    />
  );
}

function TableRow({ className, ...props }: React.ComponentProps<"tr">) {
  return (
    <tr
      data-slot="table-row"
      className={cn(
        "transition-colors hover:bg-[#f8f9fc]",
        className,
      )}
      style={{ backgroundColor: "var(--card)" }}
      {...props}
    />
  );
}

function TableHead({ className, ...props }: React.ComponentProps<"th">) {
  return (
    <th
      data-slot="table-head"
      className={cn(
        "text-left align-middle whitespace-nowrap first:rounded-tl-[4px] last:rounded-tr-[4px] [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        className,
      )}
      style={{
        height: "44px",
        padding: "12px 16px",
        color: "var(--card-foreground)",
        fontSize: "var(--text-base)",
        fontWeight: "var(--font-weight-regular)",
        fontFamily: "'Alibaba PuHuiTi 3.0', sans-serif",
      }}
      {...props}
    />
  );
}

function TableCell({ className, ...props }: React.ComponentProps<"td">) {
  return (
    <td
      data-slot="table-cell"
      className={cn(
        "align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        className,
      )}
      style={{
        height: "52px",
        padding: "12px 16px",
        color: "var(--foreground)",
        fontSize: "var(--text-base)",
        fontWeight: "var(--font-weight-regular)",
        fontFamily: "'Alibaba PuHuiTi 3.0', sans-serif",
        boxShadow: "inset 0px -0.5px 0px 0px var(--border)",
      }}
      {...props}
    />
  );
}

function TableCaption({
  className,
  ...props
}: React.ComponentProps<"caption">) {
  return (
    <caption
      data-slot="table-caption"
      className={cn("text-muted-foreground mt-4 text-sm", className)}
      {...props}
    />
  );
}

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
};