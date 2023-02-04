const Logo = ({ className }: { className?: string }) => {
  return (
    <h1 className={`font-bold  ${className}`}>
      <span className="border-b-4 border-violet-500 text-violet-400 dark:text-gray-200">
        Links
      </span>
      <span className="text-violet-500 animate-pulse">Hub</span>
    </h1>
  );
};

export default Logo;
