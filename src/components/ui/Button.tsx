import React from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';

interface ButtonProps extends HTMLMotionProps<"button"> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
    variant = 'primary',
    size = 'md',
    className = '',
    children,
    ...props
}) => {
    const baseStyles = "inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed tracking-wide";

    const variants = {
        primary: "bg-primary text-white hover:bg-black shadow-lg shadow-black/5 hover:shadow-xl hover:shadow-black/10",
        secondary: "bg-surface text-primary border border-gray-100 hover:bg-white hover:border-accent/30 hover:text-accent shadow-sm",
        outline: "border border-primary/20 text-primary hover:border-primary hover:bg-primary hover:text-white",
        ghost: "text-secondary hover:text-primary hover:bg-surface/50"
    };

    const sizes = {
        sm: "h-9 px-4 text-xs uppercase",
        md: "h-11 px-6 text-sm uppercase",
        lg: "h-14 px-8 text-base uppercase"
    };

    return (
        <motion.button
            whileTap={{ scale: 0.98 }}
            className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
            {...props}
        >
            {children}
        </motion.button>
    );
};
