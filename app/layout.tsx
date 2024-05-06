import 'bootstrap/dist/css/bootstrap.css';
import '../app/assets/css/global.css';
import BootstrapClient from '../app/assets/vendor/js/BootstrapClient.js'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <BootstrapClient/>
      </body>
    </html>
  );
}
