import {BsTranslate, FaHistory} from './Icons';

const MAIN_ITEMS = [
    { label: 'Translator', to: '/translator', icon: <BsTranslate size={24} />,index: 0},
    { label: 'History records', to: '/history', icon: <FaHistory size={24} />,index: 1},
  ] as const;


export default MAIN_ITEMS;