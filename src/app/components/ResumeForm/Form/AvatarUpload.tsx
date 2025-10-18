import React, { useRef, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'lib/redux/hooks';
import { changeProfile, selectProfile } from 'lib/redux/resumeSlice';

export const AvatarUpload = () => {
  const profile = useAppSelector(selectProfile);
  const dispatch = useAppDispatch();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isUploading, setIsUploading] = useState(false);

  const handleAvatarChange = (field: 'avatar', value: string) => {
    dispatch(changeProfile({ field, value }));
  };

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Kiểm tra kích thước file (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        alert('Kích thước file không được vượt quá 5MB');
        return;
      }

      // Kiểm tra định dạng file
      if (!file.type.startsWith('image/')) {
        alert('Vui lòng chọn file ảnh');
        return;
      }

      setIsUploading(true);
      
      // Tạo URL tạm thời để preview
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        // Đảm bảo ảnh được encode đúng cách cho PDF
        if (result && result.startsWith('data:image/')) {
          handleAvatarChange('avatar', result);
        }
        setIsUploading(false);
      };
      reader.onerror = () => {
        alert('Lỗi khi đọc file ảnh');
        setIsUploading(false);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveAvatar = () => {
    handleAvatarChange('avatar', '');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="col-span-full">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Ảnh đại diện
      </label>
      
      <div className="flex items-center space-x-4">
        {/* Avatar Preview */}
        <div className="flex-shrink-0">
          {profile.avatar ? (
            <div className="relative">
              <img
                src={profile.avatar}
                alt="Avatar"
                className="h-20 w-20 rounded-full object-cover border-2 border-gray-300"
              />
              <button
                type="button"
                onClick={handleRemoveAvatar}
                className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs hover:bg-red-600"
              >
                ×
              </button>
            </div>
          ) : (
            <div className="h-20 w-20 rounded-full bg-gray-200 border-2 border-gray-300 flex items-center justify-center">
              <svg
                className="h-8 w-8 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </div>
          )}
        </div>

        {/* Upload Button */}
        <div className="flex-1">
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleFileSelect}
            className="hidden"
            id="avatar-upload"
          />
          <label
            htmlFor="avatar-upload"
            className="cursor-pointer inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            {isUploading ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Đang tải...
              </>
            ) : (
              <>
                <svg className="-ml-1 mr-3 h-5 w-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
                {profile.avatar ? 'Thay đổi ảnh' : 'Chọn ảnh đại diện'}
              </>
            )}
          </label>
          <p className="mt-1 text-xs text-gray-500">
            JPG, PNG hoặc GIF. Tối đa 5MB.
          </p>
        </div>
      </div>
    </div>
  );
};


