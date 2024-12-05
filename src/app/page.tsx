'use client'

import React from 'react'
import Mainbanner from './components/screens/Mainbanner/Mainbanner'
import Featuresection from './components/screens/FeaturesSection/Featuresection'
import Services from './components/screens/Services/Services'
import Demo from './components/screens/Demo/Demo'
import Testsection from './components/screens/testssection/Testsection'
import Analytics from './components/screens/Analyticssection/Analytics'
import Support from './components/screens/support/Support'
// import Cards from './components/ui/Cards/Cards'
import Cardssection from './components/screens/Cardsection/Cardssection'
import Testimonals from './components/screens/Testmonals/Testimonals'
import Footer from './components/screens/Footer/footer'
import { useReportWebVitals } from 'next/web-vitals'


function page() {
  useReportWebVitals((metric) => {
    // console.log(metric)
  })
  return (
    <div>
      {/* <Head>
        <title>Syslab.ai - AI Solutions</title>
        <meta
          name="description"
          content="Syslab.ai provides cutting-edge AI solutions, web interfaces, and cross-platform mobile apps."
        />
        <meta property="og:title" content="Syslab.ai - Innovative AI Solutions" />
        <meta
          property="og:description"
          content="Explore the future with Syslab.ai's AI-driven solutions for businesses."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/assets/syslab-banner.jpg" />
        <meta property="og:url" content="https://new-look-syslab-syslab.vercel.app" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@your_twitter_handle" />
      </Head> */}

      <Mainbanner />
      <Featuresection />
      <Services />
      <Demo />
      <Testsection />
      <Analytics />
      <Support />
      <Cardssection />
      <Testimonals />
      <Footer />
    </div>
  )
}

export default page