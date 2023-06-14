import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, matchPath, useLocation } from 'react-router-dom';

import NAV_ITEMS from '@/constants/NavItems';

function NavBar() {
  const location = useLocation();
  const { t } = useTranslation();

  const selectedKey = useMemo(
    () =>
      matchPath({ path: '/', end: true }, location.pathname)
        ? NAV_ITEMS[0].key
        : NAV_ITEMS.find(({ to }) => matchPath({ path: to, end: true }, location.pathname))?.key,
    [location],
  );

  return (
   
    <div className='btm-nav btm-nav-xs'>
        {NAV_ITEMS.map(({ key, label, to, icon }) => (
          <div key={key} className={selectedKey === key ? 'active':''}>
            <Link to={to} title={t(`navbar.${label}`)} draggable="false" className="flex flex-col items-center">
               {icon}
              {/*<span className='block text-xs font-semibold'>{t(`navbar.${label}`)}</span>*/ }
            </Link>
          </div>
        ))}
    </div>
  );
}

export default NavBar;
