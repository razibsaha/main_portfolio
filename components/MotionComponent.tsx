import { motion, Variants, AnimationProps } from 'framer-motion';
import React from 'react';

interface MotionComponentProps {
  variants: Variants;
  initial?: AnimationProps['initial'];
  animate?: AnimationProps['initial'];
  className?: string;
  children: React.ReactNode;
  elementType?: keyof typeof motion; // To specify if it's motion.div, motion.span, etc.
  [key: string]: any; // Allow other props like data-testid, aria-label, href
}

const MotionComponent: React.FC<MotionComponentProps> = ({
  variants,
  initial = 'initial',
  animate = 'animate',
  className,
  children,
  elementType = 'div', // Default to motion.div
  ...rest // Collect other props
}) => {
  const MotionElement = motion[elementType];

  return (
    <MotionElement
      variants={variants}
      initial={initial}
      animate={animate}
      className={className}
      {...rest} // Spread other props onto the motion element
    >
      {children}
    </MotionElement>
  );
};

export default MotionComponent;
