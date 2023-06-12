import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function MainPage() {
  const { t } = useTranslation();
  return (
    <div className="toast toast-center toast-middle">
        <div className="flex flex-col w-full border-opacity-50">
            <Link to="/translator" className="grid h-20 card bg-base-300 rounded-box place-items-center">{t('navbar.Translator')}</Link>
            <div className="divider" />
            <Link to="/history" className="grid h-20 card bg-base-300 rounded-box place-items-center">{t('navbar.History records')}</Link>
        </div>
    </div>
  );
}

export default MainPage;
