import "./globals.css";
import Providers from "./providers";
// import ThemeSwitcher from "./ThemeSwitcher";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
          <Providers>
            {children}
          </Providers>
      </body>
    </html>
  );
}