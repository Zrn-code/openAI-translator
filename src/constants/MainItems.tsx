import {BsTranslate, FaHistory} from './Icons';

const MAIN_ITEMS = [
    { label: 'Translator', to: '/translator', icon: <BsTranslate size={24} />,index: 0, image: '/images/translator.jpg'},
    { label: 'History records', to: '/history', icon: <FaHistory size={24} />,index: 1, image: '/images/history.jpg'},
  ] as const;


export default MAIN_ITEMS;