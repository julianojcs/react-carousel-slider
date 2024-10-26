// import localFont from "next/font/local";
import { Poppins } from 'next/font/google'
import "./globals.css";
import { getPlaceholderImage } from '@/utils/images'

const poppins = Poppins({
  weight: ['100', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})
// const poppins = localFont({
//   src: [
//     {
//       path: "./fonts/Poppins-Thin.ttf",
//       weight: "100",
//       style: "normal",
//     },
//     {
//       path: "./fonts/Poppins-ThinItalic.ttf",
//       weight: "100",
//       style: "italic",
//     },
//     {
//       path: "./fonts/Poppins-Light.ttf",
//       weight: "300",
//       style: "normal",
//     },
//     {
//       path: "./fonts/Poppins-LightItalic.ttf",
//       weight: "300",
//       style: "italic",
//     },
//     {
//       path: "./fonts/Poppins-Regular.ttf",
//       weight: "400",
//       style: "normal",
//     },
//     {
//       path: "./fonts/Poppins-Italic.ttf",
//       weight: "400",
//       style: "italic",
//     },
//     {
//       path: "./fonts/Poppins-Medium.ttf",
//       weight: "500",
//       style: "normal",
//     },
//     {
//       path: "./fonts/Poppins-MediumItalic.ttf",
//       weight: "500",
//       style: "italic",
//     },
//     {
//       path: "./fonts/Poppins-SemiBold.ttf",
//       weight: "600",
//       style: "normal",
//     },
//     {
//       path: "./fonts/Poppins-SemiBoldItalic.ttf",
//       weight: "600",
//       style: "italic",
//     },
//     {
//       path: "./fonts/Poppins-Bold.ttf",
//       weight: "700",
//       style: "normal",
//     },
//     {
//       path: "./fonts/Poppins-BoldItalic.ttf",
//       weight: "700",
//       style: "italic",
//     },
//     {
//       path: "./fonts/Poppins-ExtraBold.ttf",
//       weight: "800",
//       style: "normal",
//     },
//     {
//       path: "./fonts/Poppins-ExtraBoldItalic.ttf",
//       weight: "800",
//       style: "italic",
//     },
//     {
//       path: "./fonts/Poppins-Black.ttf",
//       weight: "900",
//       style: "normal",
//     },
//     {
//       path: "./fonts/Poppins-BlackItalic.ttf",
//       weight: "900",
//       style: "italic",
//     },
//   ],
//   variable: "--font-poppins",
// });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <body className={poppins.variable}> */}
      <body className={poppins.className}>
        {children}
      </body>
    </html>
  );
}
