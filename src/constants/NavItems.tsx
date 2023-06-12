import { BsTranslate } from 'react-icons/bs';
import { FaHistory } from 'react-icons/fa';
import { FaHome } from 'react-icons/fa';

const NAV_ITEMS = [
  { key: 'main', label: 'Main', to: '/', icon: <FaHome size={24} />},
  { key: 'translator', label: 'Translator', to: '/translator', icon: <BsTranslate size={24} /> },
  { key: 'history', label: 'History records', to: '/history', icon: <FaHistory size={24} /> },
] as const;

export default NAV_ITEMS;
