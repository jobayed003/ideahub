import Link from 'next/link';
import { twMerge } from 'tailwind-merge';
import IdeahubHomeIcon from '../icons/ideahubHomeIcon';
import IdeahubSettingsIcon from '../icons/ideahubSettingsIcon';
import IdeahubTrashIcon from '../icons/ideahubTrashIcon';
import Settings from '../settings/Settings';
import Trash from '../trash/Trash';

interface NativeNavigationProps {
  myWorkspaceId: string;
  className?: string;
}

const NativeNavigation = ({ myWorkspaceId, className }: NativeNavigationProps) => {
  return (
    <nav className={twMerge('my-2', className)}>
      <ul className='flex flex-col gap-2'>
        <li>
          <Link
            className='group/native
            flex
            text-Neutrals/neutrals-7
            transition-all
            gap-2
          '
            href={`/dashboard/${myWorkspaceId}`}
          >
            <IdeahubHomeIcon />
            <span>My Workspace</span>
          </Link>
        </li>

        <Settings>
          <li
            className='group/native
            flex
            text-Neutrals/neutrals-7
            transition-all
            gap-2
            cursor-pointer
          '
          >
            <IdeahubSettingsIcon />
            <span>Settings</span>
          </li>
        </Settings>

        <Trash>
          <li
            className='group/native
            flex
            text-Neutrals/neutrals-7
            transition-all
            gap-2
          '
          >
            <IdeahubTrashIcon />
            <span>Trash</span>
          </li>
        </Trash>
      </ul>
    </nav>
  );
};

export default NativeNavigation;
