import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-blue-500 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="text-2xl font-bold">
          <Link href="/">Home</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
