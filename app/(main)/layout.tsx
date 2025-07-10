import NavBar from "@/components/nav-bar";
import Footer from "@/components/footer";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
 
  return (

    <>
    <NavBar />
       
        {children}
          {/* <Footer /> */}
      </>
     
  );
}
