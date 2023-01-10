import Link from "next/link";
import { ReactNode } from "react";
import { useUser } from "../../lib/contexts/user.context";
import { User } from "../../lib/types/user.type";

const Navbar = ({ children }: { children: ReactNode }) => {
  const userContext = useUser();
  const user = userContext.user as User;
  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <div className="w-full navbar bg-primary">
          <div className="flex-none lg:hidden">
            <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="flex-1 px-2 mx-2 text-black text-2xl font-bold lg:text-3xl">
            <Link href="/">Game Qualifier </Link>
            <div className="rating">
              <input
                type="radio"
                name="rating-2"
                className="mx-4 mask mask-star-2 bg-orange-400 hover:cursor-default"
                disabled
                checked
              />
            </div>
          </div>
          <div className="flex-none hidden lg:block">
            <ul className="menu menu-horizontal text-black">
              {user.id ? (
                <>
                  <li>
                    <Link href="/">Profile</Link>
                  </li>
                  <li>
                    <Link href="/">Logout</Link>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link href="/login">Login</Link>
                  </li>
                  <li>
                    <Link href="/">Register</Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
        {children}
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 bg-base-100">
          {user.id ? (
            <>
              <li>
                <Link href="/">Profile</Link>
              </li>
              <li>
                <Link href="/">Logout</Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link href="/login">Login</Link>
              </li>
              <li>
                <Link href="/">Register</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
