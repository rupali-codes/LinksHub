import Link from 'next/link';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalContext';
import { SubCategories } from '../../types';

export const SideNavbarElement = ({ name, url }: SubCategories) => {
  const router = useRouter();
  const { closeNav } = useContext(GlobalContext);

  return (
    <Link
      href={url}
      onClick={closeNav}
      className={`${
        router.asPath === url
          ? "bg-gradient-to-r from-violet-900 to-violet-500 transition-all pl-5 text-gray-200"
          : ""
      } collapse py-3 w-full hover:bg-gradient-to-l from-violet-900 to-violet-500 text-start border-b hover:pl-5 transition-all duration-300 rounded dark:border-gray-600`}
    >
      <div className="text-md font-medium uppercase">{name}</div>
    </Link>
  );
};
