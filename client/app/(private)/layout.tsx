import Header from "../_components/Header"

export default function PrivateLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      {children}
    </>
  );
};
