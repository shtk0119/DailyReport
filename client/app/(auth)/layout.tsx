export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className='h-full bg-[#5865F2]'>
      {children}
    </div>
  );
};
