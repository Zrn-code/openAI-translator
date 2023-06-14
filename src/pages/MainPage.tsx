import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import  MAIN_ITEMS from '@/constants/MainItems';
import { useState } from 'react';
import clsx from 'clsx';

function MainPage() {
  const { t } = useTranslation();
	const [selected, setSelected] = useState<number>(0);

  const handleClick = (index:number) => {
    setSelected(index);
  };
	
  return (
		<div className="flex max-h-full h-3/5 w-full lg:flex-row toast toast-center toast-middle">
			<div className="card lg:card-side bg-base-100 shadow-xl basis-2/3 image-full">
				<figure className='blur-sm'><img src="/images/translator.jpg" alt="Album"/></figure>
				<div className="card-body">
					<h2 className="card-title text-2xl">{t(`navbar.${MAIN_ITEMS[selected].label}`)}</h2>
					<p>Describe the Main Function.</p>
					<div className="card-actions justify-end">
						<Link to={MAIN_ITEMS[selected].to}className="btn btn-primary">{t('Go')}</Link>
					</div>
				</div>
			</div>
			<div className="divider divider-horizontal" />
			<div className="flex flex-row basis-1/4 space-x-4">
				{ MAIN_ITEMS.map(({to,icon,label,index}) => (
					<div 
						key={index} 
						onClick={() => handleClick(index)} 
						className={clsx("flex flex-wrap basis-4/10 place-items-center btn h-15",selected === index?"btn-primary":"bg-base-300")}>{icon}{t(`navbar.${label}`)}
					</div>))
				}
				</div>
    </div>
  );
}

export default MainPage;
