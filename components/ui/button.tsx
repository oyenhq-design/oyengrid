import Link from "next/link"
import { cn } from "@/lib/utils"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost"
  size?: "sm" | "md" | "lg"
}

export function Button({
  variant = "primary",
  size = "md",
  className,
  ...props
}: ButtonProps) {
  const baseStyles = "font-medium rounded-lg transition-all duration-300 inline-flex items-center justify-center hover:scale-105"

  const variants = {
    primary: "bg-[#C8A95A] text-black hover:bg-[#D4B86A] shadow-lg shadow-[#C8A95A]/20",
    secondary: "bg-[#1F1F1F] text-[#A1A1AA] hover:text-white border border-[#1F1F1F]",
    outline: "border border-[#C8A95A] text-[#C8A95A] hover:bg-[#C8A95A]/10",
    ghost: "text-white hover:text-[#C8A95A]",
  }

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-base",
  }

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    />
  )
}

interface ButtonLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost"
  size?: "sm" | "md" | "lg"
  href: string
}

export function ButtonLink({
  variant = "primary",
  size = "md",
  className,
  href,
  ...props
}: ButtonLinkProps) {
  const baseStyles = "font-medium rounded-lg transition-all duration-300 inline-flex items-center justify-center hover:scale-105"

  const variants = {
    primary: "bg-[#C8A95A] text-black hover:bg-[#D4B86A] shadow-lg shadow-[#C8A95A]/20",
    secondary: "bg-[#1F1F1F] text-[#A1A1AA] hover:text-white border border-[#1F1F1F]",
    outline: "border border-[#C8A95A] text-[#C8A95A] hover:bg-[#C8A95A]/10",
    ghost: "text-white hover:text-[#C8A95A]",
  }

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-base",
  }

  return (
    <Link
      href={href}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    />
  )
}
