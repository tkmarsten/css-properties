export default function Container({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      {...props}
      className={`${className} flex w-full h-[480px] border-2 rounded-md p-4`}
    >
      {children}
    </div>
  );
}
