"use client";

import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import React, { PropsWithChildren, useRef } from "react";

// Define your props for Dock component
export interface DockProps extends VariantProps<typeof dockVariants> {
  className?: string;
  magnification?: number;
  distance?: number;
  children: React.ReactNode;
}

const DEFAULT_MAGNIFICATION = 60;
const DEFAULT_DISTANCE = 140;

// Define your variant for the Dock component
const dockVariants = cva(
  "mx-auto w-max h-full p-2 flex items-end rounded-full border"
);

const Dock = React.forwardRef<HTMLDivElement, DockProps>(
  (
    {
      className,
      children,
      magnification = DEFAULT_MAGNIFICATION,
      distance = DEFAULT_DISTANCE,
      ...props
    },
    ref
  ) => {
    const mousex = useMotionValue(Infinity);

    // Render children with necessary props passed
    const renderChildren = () => {
      return React.Children.map(children, (child: any) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            mousex,
            magnification,
            distance,
          } as DockIconProps);
        }
        return child;
      });
    };

    return (
      <motion.div
        ref={ref}
        onMouseMove={(e) => mousex.set(e.pageX)}
        onMouseLeave={() => mousex.set(Infinity)}
        {...props}
        className={cn(dockVariants({ className }))}
      >
        {renderChildren()}
      </motion.div>
    );
  }
);

Dock.displayName = "Dock";

// Define props for DockIcon
export interface DockIconProps {
  size?: number;
  magnification?: number;
  distance?: number;
  mousex?: any;
  className?: string;
  children?: React.ReactNode;
  props?: PropsWithChildren;
}

// Create DockIcon component with ref handling
const DockIcon = React.forwardRef<HTMLDivElement, DockIconProps>(
  (
    {
      size,
      magnification = DEFAULT_MAGNIFICATION,
      distance = DEFAULT_DISTANCE,
      mousex,
      className,
      children,
      ...props
    },
    ref
  ) => {
    // Local ref to reference the DOM node
    const localRef = useRef<HTMLDivElement | null>(null);

    // Combine external ref and local ref handling
    const setRefs = (node: HTMLDivElement | null) => {
      if (ref) {
        if (typeof ref === "function") {
          ref(node); // If ref is a function, pass the node
        } else {
          (ref as React.MutableRefObject<HTMLDivElement | null>).current = node; // Set the ref's current property
        }
      }
      // Always set localRef to node (even if it is null)
      localRef.current = node;
    };

    // Calculate the distance between mouse and the icon
    const distanceCalc = useTransform(mousex, (val: number) => {
      const bounds = localRef.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
      return val - bounds.x - bounds.width / 2;
    });

    // Sync the width of the icon based on mouse movement
    const widthSync = useTransform(
      distanceCalc,
      [-distance, 0, distance],
      [40, magnification, 40]
    );

    // Apply spring animation to the width
    const width = useSpring(widthSync, {
      mass: 0.1,
      stiffness: 150,
      damping: 12,
    });

    return (
      <motion.div
        ref={setRefs} // Combine refs here
        style={{ width }}
        className={cn(
          "flex aspect-square cursor-pointer items-center justify-center rounded-full",
          className
        )}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

DockIcon.displayName = "DockIcon";

export { Dock, DockIcon, dockVariants };
