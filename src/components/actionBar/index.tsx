type ActionBarTypes = {
  children: React.ReactNode;
};
export function ActionBar({ children }: ActionBarTypes) {
  return (
    <div className="w-full py-3 px-2 flex justify-start gap-1 bg-light-primary-main text-light-primary-dark  rounded-lg">
      {children}
    </div>
  );
}
