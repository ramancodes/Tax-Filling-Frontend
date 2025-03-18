import React from "react";
import Link from "next/link";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Image from "next/image";

const ThingsToKnow = () => {
  const content = {
    howToVideos: [
      {
        title: "How to file Form1-DTVsV, 2024",
        url: "https://www.youtube.com/watch?v=4x5F9hOvC6s",
        image:
          "https://www.incometax.gov.in/iec/foportal/sites/default/files/2025-01/DTVsV.png",
      },
      {
        title: "e-Proceedings",
        url: "https://www.youtube.com/watch?v=cIFuzZxEosk",
        image:
          "https://www.incometax.gov.in/iec/foportal/sites/default/files/2025-01/e-Proceedings.png",
      },
      {
        title: "Tax Audit Report : Form 3CA - 3CD",
        url: "https://www.youtube.com/watch?v=XvztuA-2MnY&feature=youtu.be",
        image:
          "https://www.incometax.gov.in/iec/foportal/sites/default/files/2024-09/Screenshot%20%281470%29_0.png",
      },
      {
        title: "Frequently Asked Questions on Form ITR 6",
        url: "https://www.youtube.com/watch?v=uibI7TBnkjY",
        image:
          "https://www.incometax.gov.in/iec/foportal/sites/default/files/2024-08/Screenshot%20%281384%29_0.png",
      },
    ],
    awareness: [
      {
        title: "Do not get lured by phishing!",
        url: "https://www.youtube-nocookie.com/embed/-Qn45y8RPtQ?hl=en",
        image:
          "https://www.incometax.gov.in/iec/foportal/sites/default/files/2023-09/Beware%20of%20fraud%20email%20and%20sms.png",
      },
      {
        title: "Got a email/SMS from ITD",
        url: "https://www.youtube-nocookie.com/embed/B4DGtmPfrOQ?hl=en",
        image:
          "https://www.incometax.gov.in/iec/foportal/sites/default/files/2023-09/Do%20not%20get%20lured%20by%20phishing%21%20%282%29.png",
      },
    ],
    brochers: [
      {
        title: "ABC of Tax",
        url: "https://www.incometax.gov.in/iec/foportal/sites/default/files/2022-07/ABC%20of%20Tax.pdf#",
        image:
          "https://www.incometax.gov.in/iec/foportal/themes/custom/itdbase/images/pdf.svg",
      },
      {
        title: "e-Filing Portal",
        url: "https://www.incometax.gov.in/iec/foportal/sites/default/files/2021-05/e-filing%20brochure%202-%20e-Filing%20Portal.pdf#",
        image:
          "https://www.incometax.gov.in/iec/foportal/themes/custom/itdbase/images/pdf.svg",
      },
      {
        title: "File Grievances & respond to e-proceedings",
        url: "https://www.incometax.gov.in/iec/foportal/sites/default/files/2021-05/e-Filing%20brochure%203%20-%20File%20Grievances%20%26%20respond%20to%20e-proceedings.pdf#",
        image:
          "https://www.incometax.gov.in/iec/foportal/themes/custom/itdbase/images/pdf.svg",
      },
      {
        title: "e-file Returns",
        url: "https://www.incometax.gov.in/iec/foportal/sites/default/files/2021-05/E-Filing%20Brochure%204-e-file%20Returns.pdf#",
        image:
          "https://www.incometax.gov.in/iec/foportal/themes/custom/itdbase/images/pdf.svg",
      },
    ],
  };

  return (
    <section className="bg-gray-100 pb-16 px-8">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8">Things To Know</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* HowToVideos Card */}
          <div className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow flex flex-col gap-4 items-start justify-start px-8 py-8">
            <span className="inline-block text-black text-sm font-bold px-2 py-1 rounded mb-4">
              How To Videos
            </span>
            {content.howToVideos.map((item, index) => (
              <div
                className="flex gap-4 items-center justify-center"
                key={index}
              >
                <img src={item.image} className="w-20 h-15 rounded-lg" />
                <Link href={item.url} target='_blank' className="px-2 py-1 hover:border-3 hover:border-[#1f2c76] hover:underline">{item.title}</Link>
              </div>
            ))}
          </div>

          {/* Awareness Card */}
          <div className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow flex flex-col gap-4 items-start justify-start px-8 py-8">
            <span className="inline-block text-black text-sm font-bold px-2 py-1 rounded mb-4">
            Awareness
            </span>
            {content.awareness.map((item) => (
              <div
                className="flex gap-4 items-center justify-center"
                key={item.title}
              >
                <img src={item.image} className="w-20 h-15 rounded-lg" />
                <Link href={item.url} target='_blank' className="px-2 py-1 hover:border-3 hover:border-[#1f2c76] hover:underline">{item.title}</Link>
              </div>
            ))}
          </div>

          {/* Brochers Card */}
          <div className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow flex flex-col gap-4 items-start justify-start px-8 py-8">
            <span className="inline-block text-black text-sm font-bold px-2 py-1 rounded mb-4">
            Brochers
            </span>
            {content.brochers.map((item) => (
              <div
                className="flex gap-4 items-center justify-center"
                key={item.title}
              >
                <img src={item.image} className="w-20 h-15 rounded-lg" />
                <Link href={item.url} target='_blank' className="px-2 py-1 hover:border-3 hover:border-[#1f2c76] hover:underline">{item.title}</Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThingsToKnow;
