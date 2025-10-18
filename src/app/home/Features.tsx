import Image from "next/image";
import featureFreeSrc from "public/assets/feature-free.svg";
import featureUSSrc from "public/assets/feature-us.svg";
import featurePrivacySrc from "public/assets/feature-privacy.svg";
import featureOpenSourceSrc from "public/assets/feature-open-source.svg";
import { Link } from "components/documentation";

const FEATURES = [
  {
    src: featureFreeSrc,
    title: "Miễn Phí Mãi Mãi",
    text: "SDU-JobQuest được tạo ra với niềm tin rằng mọi người đều nên có quyền truy cập miễn phí và dễ dàng vào thiết kế CV chuyên nghiệp hiện đại",
  },
  {
    src: featureUSSrc,
    title: "Thực Hành Tốt Nhất",
    text: "SDU-JobQuest có các thực hành tốt nhất được tích hợp sẵn cho thị trường việc làm và hoạt động tốt với các nền tảng ATS hàng đầu như Greenhouse và Lever",
  },
  {
    src: featurePrivacySrc,
    title: "Tập Trung Bảo Mật",
    text: "SDU-JobQuest lưu trữ dữ liệu cục bộ trong trình duyệt của bạn nên chỉ bạn mới có quyền truy cập vào dữ liệu của mình với quyền kiểm soát hoàn toàn",
  },
  {
    src: featureOpenSourceSrc,
    title: "Mã Nguồn Mở",
    text: (
      <>
        SDU-JobQuest là một dự án mã nguồn mở, và mã nguồn của nó có thể được xem
        bởi bất kỳ ai trên{" "}
        <Link href="https://github.com/xitanggg/open-resume">
          kho lưu trữ GitHub
        </Link>
      </>
    ),
  },
];

export const Features = () => {
  return (
    <section className="py-16 lg:py-36">
      <div className="mx-auto lg:max-w-4xl">
        <dl className="grid grid-cols-1 justify-items-center gap-y-8 lg:grid-cols-2 lg:gap-x-6 lg:gap-y-16">
          {FEATURES.map(({ src, title, text }) => (
            <div className="px-2" key={title}>
              <div className="relative w-96 self-center pl-16">
                <dt className="text-2xl font-bold">
                  <Image
                    src={src}
                    className="absolute left-0 top-1 h-12 w-12"
                    alt="Feature icon"
                  />
                  {title}
                </dt>
                <dd className="mt-2">{text}</dd>
              </div>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};
