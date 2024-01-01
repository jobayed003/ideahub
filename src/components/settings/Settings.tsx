import { ReactNode } from 'react';
import CustomDialogTrigger from '../global/CustomDialog';
import SettingsForm from './SettingsForm';

interface SettingsProps {
  children: ReactNode;
}

const Settings = ({ children }: SettingsProps) => {
  return (
    <CustomDialogTrigger header='Settings' content={<SettingsForm />}>
      {children}
    </CustomDialogTrigger>
  );
};

export default Settings;
