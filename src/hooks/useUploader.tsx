import { AxiosRequestConfig } from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

interface IFileUploadterType<T> {
  uploadData: T;
  api: (data: any, otherConfigs: AxiosRequestConfig) => Promise<any>;
  onUploadSuccess: () => void;
  onUploadFailure: (err: any) => void;
  onUploadCancel?: () => void;
  onUploadStart: () => void;
}

function getFormData(object: any) {
  const formData = new FormData();
  Object.keys(object).forEach((key) => formData.append(key, object[key]));
  return formData;
}

export default function useUploader() {
  const [progress, setProgress] = useState(0);
  const [toastId, setToastId] = useState<any>(null);
  const [isUploading, setIsUploading] = useState(false);

  useEffect(() => {
    if (toastId) {
      toast.update(toastId, {
        render: <Component />,
        progress: progress / 100,
      });
    }
  }, [progress, toastId]);

  const Component = () => {
    return (
      <div>
        <span>%{progress}</span>
        <span>در حال آپلود فایل</span>
      </div>
    );
  };

  function uploadFile<T>({
    uploadData,
    api,
    onUploadFailure,
    onUploadStart,
    onUploadSuccess,
    onUploadCancel,
  }: IFileUploadterType<T>) {
    const formData = getFormData(uploadData);
    setProgress(0);
    setToastId(
      toast.info(<Component />, {
        autoClose: false,
        closeButton: false,
      }),
    );
    onUploadStart();
    setIsUploading(true);

    api(formData as T, {
      onUploadProgress(progressEvent: any) {
        const percentage = (progressEvent.loaded * 100) / progressEvent.total;
        setProgress(+percentage.toFixed());
      },
      onDownloadProgress(progressEvent) {},
    })
      .catch((err) => {
        setProgress((prev) => 100);
        onUploadFailure(err);
      })
      .then((res) => {
        onUploadSuccess();
      })
      .finally(() => {
        setProgress((prev) => 100);
        setIsUploading(false);
      });
  }

  return {
    uploadFile,
    isUploading,
  };
}
