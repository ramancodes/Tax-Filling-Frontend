import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div>
      {/* About Developer Section */}
      <section className="mb-16 flex flex-col justify-center items-center p-8">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">
          About the Developer
        </h2>
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/4 mb-6 md:mb-0">
              <Image
              width={400}
              height={400}
                src="/dev.jpg"
                alt="Developer Team"
                className="rounded-full shadow-md"
              />
            </div>
            <div className="md:w-3/4 md:pl-8">
              <div className="md:w-3/4 md:pl-8">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  Full Stack Developer
                </h3>
                <p className="text-gray-700 mb-4">
                  I am a full-stack developer with a postgraduate degree in MCA
                  and a graduate degree in BCA. With expertise in modern web
                  technologies, I specialize in building scalable and efficient
                  applications.
                </p>
                <p className="text-gray-700 mb-4">
                  My core skills include backend development with Node.js and
                  Python, frontend development with React.js and Next.js, and
                  database management using PostgreSQL. Additionally, I have
                  hands-on experience in cloud computing, particularly with AWS
                  and Azure.
                </p>
                <p className="text-gray-700">
                  I am passionate about project deployment, cloud solutions, and
                  building seamless user experiences. My development approach
                  focuses on security, scalability, and performance
                  optimization.
                </p>
                <div className="mt-6 flex space-x-4">
                  <a
                    href="#"
                    className="text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    <span className="underline">Contact Me</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
