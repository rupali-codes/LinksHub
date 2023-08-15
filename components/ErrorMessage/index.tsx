interface ErrorMessageProps {
  children: React.ReactNode
  className?: string | undefined
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({
  children,
  className,
}) => {
  const defaultClasses = 'text-red-500 mt-2'
  const classes = defaultClasses + ' ' + (className ?? '')

  return <p className={classes}>{children}</p>
}
