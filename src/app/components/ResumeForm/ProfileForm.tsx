import { BaseForm } from "components/ResumeForm/Form";
import { Input, Textarea } from "components/ResumeForm/Form/InputGroup";
import { AvatarUpload } from "components/ResumeForm/Form/AvatarUpload";
import { useAppDispatch, useAppSelector } from "lib/redux/hooks";
import { changeProfile, selectProfile } from "lib/redux/resumeSlice";
import { ResumeProfile } from "lib/redux/types";

export const ProfileForm = () => {
  const profile = useAppSelector(selectProfile);
  const dispatch = useAppDispatch();
  const { name, email, phone, url, summary, location } = profile;

  const handleProfileChange = (field: keyof ResumeProfile, value: string) => {
    dispatch(changeProfile({ field, value }));
  };

  return (
    <BaseForm>
      <div className="grid grid-cols-6 gap-3">
        <AvatarUpload />
        <Input
          label="Họ và tên"
          labelClassName="col-span-full"
          name="name"
          placeholder="Nguyễn Văn A"
          value={name}
          onChange={handleProfileChange}
        />
        <Textarea
          label="Mục tiêu nghề nghiệp"
          labelClassName="col-span-full"
          name="summary"
          placeholder="Doanh nhân và nhà giáo dục đam mê việc làm cho giáo dục miễn phí cho mọi người"
          value={summary}
          onChange={handleProfileChange}
        />
        <Input
          label="Email"
          labelClassName="col-span-4"
          name="email"
          placeholder="nguyenvana@gmail.com"
          value={email}
          onChange={handleProfileChange}
        />
        <Input
          label="Số điện thoại"
          labelClassName="col-span-2"
          name="phone"
          placeholder="0123456789"
          value={phone}
          onChange={handleProfileChange}
        />
        <Input
          label="Website"
          labelClassName="col-span-4"
          name="url"
          placeholder="linkedin.com/in/nguyenvana"
          value={url}
          onChange={handleProfileChange}
        />
        <Input
          label="Địa chỉ"
          labelClassName="col-span-2"
          name="location"
          placeholder="Hà Nội, Việt Nam"
          value={location}
          onChange={handleProfileChange}
        />
      </div>
    </BaseForm>
  );
};
