import "./globals.css";
import Provider from "./providers";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: {
    default: "Next SpaceX",
    template: "Next SpaceX - %s"
  },
  description: "A powerful web application designed to provide comprehensive information about SpaceX. It offers details about capsules, cores, crew members, dragons, landpads, launches, launchpads, payloads, and rockets.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body>
        <Provider>
          <Header />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
