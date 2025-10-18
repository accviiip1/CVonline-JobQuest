import "globals.css";
import { TopNavBar } from "components/TopNavBar";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "SDU-JobQuest - Công cụ tạo CV chuyên nghiệp miễn phí",
  description:
    "SDU-JobQuest là công cụ tạo CV miễn phí và mạnh mẽ cho phép bất kỳ ai tạo CV chuyên nghiệp hiện đại trong 3 bước đơn giản. Tạo CV đẹp và chuyên nghiệp ngay hôm nay!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <TopNavBar />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
