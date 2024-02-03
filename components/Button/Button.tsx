import { FC, ReactNode } from 'react'
import Link from 'next/link'
import { cn } from 'lib/utils'

interface Props {
  label: string
  icon?: ReactNode
  link?: string
  onClick?: () => void
  className?: string
  variant: 'primary' | 'secondary' | 'pale' | 'text'
}

const Button: FC<Props> = ({
  label,
  icon,
  link,
  onClick,
  variant = 'primary',
  className,
}) => {
  const styles = {
    primary: 'bg-primary hover:bg-primary/80 text-white rounded-[10px] duration-500',
    secondary: '',
    pale: 'bg-slate-100 hover:bg-violet-50 dark:bg-white dark:bg-opacity-10 dark:hover:bg-opacity-20 text-slate-500 dark:text-violet-50',
    text: 'text-slate-400 dark:text-gray-400 !gap-4',
  }[variant]

  const cls = cn(
    'flex justify-center items-center px-4 py-3 gap-1.5 rounded-lg transition-colors',
    styles,
    className
  )

  const content = () => (
    <>
      {icon && (
        <span className="flex items-center justify-center text-base font-medium font-urbanist">
          {icon}
        </span>
      )}
      <span>{label}</span>
    </>
  )

  return link ? (
    <Link href={link} className={cls} target="_blank">
      {content()}
    </Link>
  ) : (
    <button onClick={onClick} className={cls}>
      {content()}
    </button>
  )
}

export default Button
