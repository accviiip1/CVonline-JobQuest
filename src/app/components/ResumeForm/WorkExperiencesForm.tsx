import { Form, FormSection } from "components/ResumeForm/Form";
import {
  Input,
  BulletListTextarea,
} from "components/ResumeForm/Form/InputGroup";
import type { CreateHandleChangeArgsWithDescriptions } from "components/ResumeForm/types";
import { useAppDispatch, useAppSelector } from "lib/redux/hooks";
import {
  changeWorkExperiences,
  selectWorkExperiences,
} from "lib/redux/resumeSlice";
import type { ResumeWorkExperience } from "lib/redux/types";

export const WorkExperiencesForm = () => {
  const workExperiences = useAppSelector(selectWorkExperiences);
  const dispatch = useAppDispatch();

  const showDelete = workExperiences.length > 1;

  return (
    <Form form="workExperiences" addButtonText="Thêm công việc">
      {workExperiences.map(({ company, jobTitle, date, descriptions }, idx) => {
        const handleWorkExperienceChange = (
          ...[
            field,
            value,
          ]: CreateHandleChangeArgsWithDescriptions<ResumeWorkExperience>
        ) => {
          // TS doesn't support passing union type to single call signature
          // https://github.com/microsoft/TypeScript/issues/54027
          // any is used here as a workaround
          dispatch(changeWorkExperiences({ idx, field, value } as any));
        };
        const showMoveUp = idx !== 0;
        const showMoveDown = idx !== workExperiences.length - 1;

        return (
          <FormSection
            key={idx}
            form="workExperiences"
            idx={idx}
            showMoveUp={showMoveUp}
            showMoveDown={showMoveDown}
            showDelete={showDelete}
            deleteButtonTooltipText="Xóa công việc"
          >
            <Input
              label="Công ty"
              labelClassName="col-span-full"
              name="company"
              placeholder="Công ty ABC"
              value={company}
              onChange={handleWorkExperienceChange}
            />
            <Input
              label="Vị trí công việc"
              labelClassName="col-span-4"
              name="jobTitle"
              placeholder="Kỹ sư phần mềm"
              value={jobTitle}
              onChange={handleWorkExperienceChange}
            />
            <Input
              label="Thời gian"
              labelClassName="col-span-2"
              name="date"
              placeholder="Tháng 6/2022 - Hiện tại"
              value={date}
              onChange={handleWorkExperienceChange}
            />
            <BulletListTextarea
              label="Mô tả công việc"
              labelClassName="col-span-full"
              name="descriptions"
              placeholder="Các điểm chính"
              value={descriptions}
              onChange={handleWorkExperienceChange}
            />
          </FormSection>
        );
      })}
    </Form>
  );
};
