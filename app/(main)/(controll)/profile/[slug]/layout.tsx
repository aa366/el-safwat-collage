"use client"
import Nav from "./private-components/Nav";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { auth, User } from "@/firebase/config";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const params = useParams(); // Don't destructure immediately
  const [user, setUser] = useState<User | null>(null);
  const [isOwner, setIsOwner] = useState<boolean | null>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        setUser(userAuth);
        setIsOwner(userAuth.uid === params.slug); // Access slug from params
      } else {
        setUser(null);
        setIsOwner(false);
      }
    });

    return () => unsubscribe();
  }, [params]); // Use params as the dependency

  return (
    <>
      {isOwner && <Nav />}
      {children}
    </>
  );
}