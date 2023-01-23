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
          ? 'bg-slate-300 text-slate-700 transition-all pl-5'
          : ''
      } collapse py-3 w-full text-start border-b border-base-100 hover:bg-slate-300 hover:pl-5 hover:text-slate-700 transition-all duration-300 rounded dark:border-gray-600`}
    >
      <div className="text-md font-medium uppercase">{name}</div>
    </Link>
  );
};
