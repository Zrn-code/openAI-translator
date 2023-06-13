import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import  MAIN_ITEMS from '@/constants/MainItems';
import React,{ useState } from 'react';
import clsx from 'clsx';

function MainPage() {
  const { t } = useTranslation();
	const [selected, setSelected] = useState<number>(0);

  const handleClick = (index:number) => {
    setSelected(index);
  };
	
  return (
			<div className="flex flex-col w-full lg:flex-row toast toast-center toast-middle">
				<div className="card lg:card-side w-96 bg-base-100 shadow-xl basis-2/3">
					<div className="card-body">
						<h2 className="card-title">{t(`navbar.${MAIN_ITEMS[selected].label}`)}</h2>
						<p>Describe the Main Function.</p>
						<div className="card-actions justify-end">
							<Link to={MAIN_ITEMS[selected].to}className="btn btn-primary">{t('Go')}</Link>
						</div>
					</div>
				</div>
				<div className="divider divider-horizontal" />
        <div className="flex flex-col  basis-1/6 ">
            { MAIN_ITEMS.map(({to,icon,label,index}) => (
							<div>
								<div key={index} onClick={() => handleClick(index)} className={clsx("grid h-20 place-items-center btn",selected === index?"btn-primary":"bg-base-300")}>{icon}{t(`navbar.${label}`)}</div>
								<div className="divider" />
							</div>
						))
						}
				</div>
    </div>
  );
}

export default MainPage;
