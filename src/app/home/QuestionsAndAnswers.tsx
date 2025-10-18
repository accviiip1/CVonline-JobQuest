import { Link } from "components/documentation";

const QAS = [
  {
    question:
      "Q1. Công cụ tạo CV là gì? Tại sao công cụ tạo CV tốt hơn mẫu CV doc?",
    answer: (
      <>
        <p>
          Có hai cách để tạo CV ngày nay. Một lựa chọn là sử dụng mẫu CV, 
          chẳng hạn như office/google doc, và tùy chỉnh nó theo nhu cầu của bạn. 
          Lựa chọn khác là sử dụng công cụ tạo CV, một công cụ trực tuyến cho phép 
          bạn nhập thông tin và tự động tạo CV cho bạn.
        </p>
        <p>
          Sử dụng mẫu CV yêu cầu công việc định dạng thủ công, như sao chép và dán 
          các phần văn bản và điều chỉnh khoảng cách, điều này có thể tốn thời gian 
          và dễ gây lỗi. Dễ dàng gặp phải các vấn đề định dạng, chẳng hạn như sử dụng 
          các dấu đầu dòng hoặc kiểu phông chữ khác nhau sau khi sao chép và dán. 
          Mặt khác, công cụ tạo CV như OpenResume tiết kiệm thời gian và ngăn ngừa 
          lỗi định dạng bằng cách tự động định dạng CV. Nó cũng cung cấp sự tiện lợi 
          của việc dễ dàng thay đổi loại phông chữ hoặc kích thước chỉ với một cú nhấp chuột. 
          Tóm lại, công cụ tạo CV dễ sử dụng hơn so với mẫu CV.
        </p>
      </>
    ),
  },
  {
    question:
      "Q2. Điều gì làm cho OpenResume khác biệt so với các công cụ tạo CV khác?",
    answer: (
      <>
        <p>
          Ngoài OpenResume, có một số công cụ tạo CV miễn phí tuyệt vời khác,
          ví dụ: <Link href="https://rxresu.me/">Reactive Resume</Link>,{" "}
          <Link href="https://flowcv.com/">FlowCV</Link>. Tuy nhiên, OpenResume
          nổi bật với 2 tính năng đặc biệt:
        </p>{" "}
        <p>
          <span className="font-semibold">
            1. OpenResume được thiết kế đặc biệt cho thị trường việc làm và thực hành tốt nhất.
          </span>
          <br />
          Không giống như các công cụ tạo CV khác nhắm đến đối tượng toàn cầu và cung cấp
          nhiều tùy chọn tùy chỉnh, OpenResume cố ý chỉ cung cấp
          các tùy chọn phù hợp với thực hành tốt nhất. Ví dụ, nó
          loại trừ tùy chọn thêm ảnh đại diện để tránh thiên vị và
          phân biệt đối xử. Nó chỉ cung cấp các phần cốt lõi, ví dụ: hồ sơ, kinh nghiệm làm việc,
          giáo dục và kỹ năng, trong khi bỏ qua các phần không cần thiết
          như tham khảo. Ngoài ra, OpenResume chỉ cung cấp thiết kế CV một cột
          từ trên xuống dưới thay vì thiết kế hai cột, vì
          thiết kế một cột hoạt động tốt nhất cho ATS. <br />{" "}
        </p>
        <p>
          <span className="font-semibold">
            2. OpenResume tập trung rất cao vào quyền riêng tư.
          </span>{" "}
          <br />
          Trong khi các công cụ tạo CV khác có thể yêu cầu đăng ký email và lưu trữ dữ liệu người dùng
          trong cơ sở dữ liệu của họ, OpenResume tin rằng dữ liệu CV nên
          được giữ riêng tư và chỉ có thể truy cập trên máy cục bộ của người dùng. Do đó,
          OpenResume không yêu cầu đăng ký để sử dụng ứng dụng, và tất cả dữ liệu đã nhập
          được lưu trữ trong trình duyệt của người dùng mà chỉ người dùng mới có quyền truy cập.
        </p>
      </>
    ),
  },
  {
    question: "Q3. Ai đã tạo ra OpenResume và tại sao?",
    answer: (
      <p>
        OpenResume được tạo bởi{" "}
        <Link href="https://github.com/xitanggg">Xitang Zhao</Link> và được thiết kế
        bởi <Link href="https://www.linkedin.com/in/imzhi">Zhigang Wen</Link> như
        một dự án cuối tuần. Là những người nhập cư vào Mỹ, chúng tôi đã mắc nhiều lỗi
        khi tạo CV đầu tiên và ứng tuyển thực tập và công việc.
        Chúng tôi đã mất một thời gian dài để học một số thực hành tốt nhất. Trong khi
        cố vấn cho sinh viên thế hệ đầu tiên và xem xét CV của họ, chúng tôi
        nhận thấy sinh viên đang mắc phải những lỗi tương tự mà chúng tôi đã mắc trước đó.
        Điều này khiến chúng tôi suy nghĩ về cách chúng tôi có thể giúp đỡ với kiến thức và
        kỹ năng mà chúng tôi đã tích lũy. Chúng tôi bắt đầu trò chuyện và làm việc vào cuối tuần
        dẫn đến OpenResume, nơi chúng tôi tích hợp các thực hành tốt nhất và
        kiến thức của chúng tôi vào công cụ tạo CV này. Hy vọng của chúng tôi là OpenResume có thể giúp
        bất kỳ ai dễ dàng tạo một CV chuyên nghiệp hiện đại tuân theo
        thực hành tốt nhất và cho phép bất kỳ ai ứng tuyển việc làm với sự tự tin.
      </p>
    ),
  },
  {
    question: "Q4. Làm thế nào tôi có thể hỗ trợ OpenResume?",
    answer: (
      <>
        <p>
          Cách tốt nhất để hỗ trợ OpenResume là chia sẻ suy nghĩ và
          phản hồi của bạn với chúng tôi để giúp cải thiện thêm. Bạn có thể gửi email cho chúng tôi
          tại{" "}
          <Link href="mailto:hello@open-resume.com">hello@open-resume.com</Link>{" "}
          hoặc{" "}
          <Link href="https://github.com/xitanggg/open-resume/issues/new">
            mở một issue
          </Link>{" "}
          tại kho lưu trữ Github của chúng tôi. Dù bạn có thích hay không, chúng tôi rất muốn
          nghe từ bạn.
        </p>
        <p>
          Một cách tuyệt vời khác để hỗ trợ OpenResume là lan truyền thông tin.
          Chia sẻ nó với bạn bè, trên các nền tảng mạng xã hội, hoặc với
          trung tâm nghề nghiệp của trường bạn. Mục tiêu của chúng tôi là tiếp cận nhiều người hơn đang gặp khó khăn
          trong việc tạo CV, và sự hỗ trợ truyền miệng của bạn sẽ được
          đánh giá cao. Nếu bạn sử dụng Github, bạn cũng có thể thể hiện sự hỗ trợ
          bằng cách{" "}
          <Link href="https://github.com/xitanggg/open-resume">
            cho dự án một ngôi sao
          </Link>{" "}
          để giúp tăng tính phổ biến và tiếp cận.
        </p>
      </>
    ),
  },
];

export const QuestionsAndAnswers = () => {
  return (
    <section className="mx-auto max-w-3xl divide-y divide-gray-300 lg:mt-4 lg:px-2">
      <h2 className="text-center text-3xl font-bold">Câu Hỏi & Trả Lời</h2>
      <div className="mt-6 divide-y divide-gray-300">
        {QAS.map(({ question, answer }) => (
          <div key={question} className="py-6">
            <h3 className="font-semibold leading-7">{question}</h3>
            <div className="mt-3 grid gap-2 leading-7 text-gray-600">
              {answer}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
