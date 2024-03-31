import { GearIcon } from "./GearIcon";

const Header = () => {
  return (
    <div className="text-white bg-main flex items-center justify-between py-4">
      <h1 className="text-2xl font-bold ml-8 md:ml-8 lg:ml-16">デイリポ＋</h1>
      <div className="flex">
        <GearIcon />
        <h1 className="text-2xl mr-8 md:mr-8 lg:mr-16">User1</h1>
      </div>
    </div>
  );
};

export default Header;
