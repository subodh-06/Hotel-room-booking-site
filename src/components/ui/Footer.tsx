import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const sections = [
  {
    title: "Company",
    links: [
      { name: "About", href: "#" },
      { name: "Team", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Careers", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Help", href: "#" },
      { name: "Sales", href: "#" },
      { name: "Advertise", href: "#" },
      { name: "Privacy", href: "#" },
    ],
  },
];

const Footer = () => {
  return (
    <section className="bg-[#141413] py-16 text-gray-300">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <footer>
          {/* Top Section */}
          <div className="flex flex-col items-center justify-between gap-10 text-center lg:flex-row lg:text-left">
            {/* Logo & Description */}
            <div className="flex w-full max-w-96 flex-col items-center gap-6 lg:items-start">
              <div>
                <span className="flex items-center justify-center gap-4 lg:justify-start">
                  <p className="text-3xl font-semibold text-white">
                  StayEase
                  </p>
                </span>
                <p className="mt-4 text-sm text-gray-400">
                Discover and book the perfect stay with ease—luxurious hotels, cozy stays, and budget-friendly options, all in one place
                </p>
              </div>

              {/* Social Icons */}
              <ul className="flex items-center space-x-6">
                {[
                  { icon: FaInstagram, href: "#" },
                  { icon: FaFacebook, href: "#" },
                  { icon: FaTwitter, href: "#" },
                  { icon: FaLinkedin, href: "#" },
                ].map((social, index) => (
                  <li key={index} className="text-gray-400 hover:text-white transition duration-200">
                    <a href={social.href}>
                      <social.icon className="size-6" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Links Section */}
            <div className="grid grid-cols-2 gap-10 lg:gap-20">
              {sections.map((section, sectionIdx) => (
                <div key={sectionIdx} className="text-center sm:text-left">
                  <h3 className="mb-6 text-lg font-semibold text-white">{section.title}</h3>
                  <ul className="space-y-4 text-sm text-gray-400">
                    {section.links.map((link, linkIdx) => (
                      <li key={linkIdx} className="hover:text-white transition duration-200">
                        <a href={link.href}>{link.name}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-16 flex flex-col justify-between gap-4 border-t border-gray-700 pt-6 text-center text-sm text-gray-400 lg:flex-row lg:items-center lg:text-left">
            <p>© 2025 StayEase. All rights reserved.</p>
            <ul className="flex justify-center gap-6 lg:justify-start">
              <li className="hover:text-white transition duration-200">
                <a href="#"> Terms and Conditions</a>
              </li>
              <li className="hover:text-white transition duration-200">
                <a href="#"> Privacy Policy</a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Footer;
