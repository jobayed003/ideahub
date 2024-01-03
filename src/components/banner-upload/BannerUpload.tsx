import React from 'react';
import CustomDialogTrigger from '../global/CustomDialog';
import BannerUploadForm from './BannerUploadForm';

interface BannerUploadProps {
  children: React.ReactNode;
  className?: string;
  dirType: 'workspace' | 'file' | 'folder';
  id: string;
}

const BannerUpload = ({ id, dirType, children, className }: BannerUploadProps) => {
  return (
    <CustomDialogTrigger
      header='Upload Banner'
      content={<BannerUploadForm dirType={dirType} id={id} />}
      className={className}
    >
      {children}
    </CustomDialogTrigger>
  );
};

export default BannerUpload;
