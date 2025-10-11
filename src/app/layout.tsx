import "@/assets/styles/variables/index.scss";
import "@/assets/styles/global/index.scss";
import "react-toastify/dist/ReactToastify.css";
import "jalaali-react-date-picker/lib/styles/index.css";

import ReactQueryProvider from "@/providers/ReactQuery/ReactQueryProvider";
import ReduxProvider from "@/providers/ReduxProvider/ReduxProvider";
import AdminProvider from "@/providers/AdminProvider/AdminProvider";
import ToastProvider from "@/providers/ToastProvider/ToastProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactElement;
}>) {
  return (
    <html lang='fa'>
      <body className='App'>
        <ReactQueryProvider>
          <ReduxProvider>
            <AdminProvider>{children}</AdminProvider>
          </ReduxProvider>
          <ToastProvider />
        </ReactQueryProvider>
      </body>
    </html>
  );
}
