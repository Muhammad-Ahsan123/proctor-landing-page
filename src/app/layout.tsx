import { Lato } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.min.css';


const Latofont = Lato({ subsets: ['latin'], weight: ['400'] })

export const metadata = {
  title: 'ProctorParhai',
  description: 'AI-Based Vigilance: Harnessing advanced artificial intelligence technology to ensure proactive monitoring, enhanced security, and intelligent decision-making for a safer and more efficient future.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/IconForQRCode.jpeg" />

        <meta name="author" content="ProctorParhai" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="ProctorParhai" />

        <meta property="og:image" content="/proctorparhailandingpage.png" />
        <meta property="og:url" content="https://proctorparhai.vercel.app" />
        <meta name="linkedin:site" content="https://www.linkedin.com/company/syslab-ai/" />
        <meta name="keywords" content="online exam, proctoring, AI, test, AI vigilance, AI-based monitoring, online test security, artificial intelligence in exams, automated proctoring, test integrity" />


        <script async src="https://www.googletagmanager.com/gtag/js?id=G-034QF7XDKM"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag() {
                  window.dataLayer.push(arguments);
              }
              gtag('js', new Date());
              gtag('config', 'G-034QF7XDKM');
            `,
          }}
        />

      </head>

      <body className={Latofont.className}>
        {children}
      </body>
    </html>
  );
}
