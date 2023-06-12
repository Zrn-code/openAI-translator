import { Navbar } from 'react-daisyui';
import { useTranslation } from 'react-i18next';

import { ConfigButton } from '@/components/ConfigButton';
import { SwitchLanguageButton } from '@/components/SwitchLanguageButton';
import { ToggleThemeButton } from '@/components/ToggleThemeButton';
import { Link } from 'react-router-dom';

function Header() {
  const { t } = useTranslation();
  return (
    <>
      <Navbar className="sticky top-0 z-50 bg-primary text-primary-content">
        <div className="flex-1">
          <Link to="/" className="text-xl normal-case btn btn-ghost">AI Integrator</Link>
        </div>
        <div className="flex-none">
          <ConfigButton />
          <ToggleThemeButton />
          <SwitchLanguageButton />
        </div>
      </Navbar>
    </>
  );
}

export default Header;
