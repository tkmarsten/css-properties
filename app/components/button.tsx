export default function Button({
  children,
  ...props
}: {
  children: React.ReactNode;
}) {
  return (
    <button
      {...props}
      className="bg-slate-200 text-slate-600 border-2 border-slate-400 p-4 rounded"
    >
      {children}
    </button>
  );
}
