import MainNavigation from "../components/Navigation/MainNavigation";

const Layout = ({ children }) => {
  return (
    <>
      <MainNavigation />
      <main className="flex w-[80%] items-center justify-center mx-auto my-5">
        {children}
      </main>
    </>
  );
};

export default Layout;
