'use client'

import 'bootstrap/dist/css/bootstrap.min.css';
import '../app/assets/css/global.css';
import BootstrapClient from '../app/assets/vendor/js/BootstrapClient.js'
import Header from './components/shared/Header';
import Footer from './components/shared/Footer';
import { usePathname, useSearchParams } from 'next/navigation'
import { gsap } from 'gsap'
import { CSSPlugin } from 'gsap/CSSPlugin'
gsap.registerPlugin(CSSPlugin)


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname()
  return (
    <html lang="en">
      <body>
        <div className="container">
          <div className="row">
            <section className={`${pathname === '/' ? 'd-none' : 'header'}`}>
              <Header />
            </section>
            <section className={`${pathname === '/' ? 'main-container' : 'container'}`}>
              {children}
            </section>
            <section className="footer">
              <Footer />
            </section>
          </div>
        </div>
        <BootstrapClient />
      </body>
    </html>
  );
}
