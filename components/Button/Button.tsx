
interface IProps {
    children: React.ReactNode;
}
const Button = ({ children, ...props }: IProps) => {
    return (
        <button className="flex items-center gap-2 p-[12px] text-[16px] bg-primary-purple hover:bg-primary-purple/80 text-white rounded-[10px] duration-500" {...props}>
            {children}
        </button>
    )
}

export default Button
