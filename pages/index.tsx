import Head from "next/head";
import Image from "next/image";
import { useSelector } from "react-redux";
import { Layout } from "@/components/templates/Layout";
import hero from "../assets/home/hero.jpg";
// import video from "../assets/home/video.mp4";
import { Button } from "@/components/atoms/Button";
import { OurProducts } from "@/components/organisms/home/OurProducts";
import { EventPromotion } from "@/components/organisms/home/EventPromotion";
import { Instagram } from "@/components/organisms/home/Instagram";
import ReactPlayer from "react-player";
import { useRouter } from "next/router";
import { useEffect } from "react";
export default function Home() {
  const { username } = useSelector((state: any) => state.user);
  const { user } = useSelector((state: any) => state.user);
  console.log(username);
  const router = useRouter();
  useEffect(() => {
    !username && router.replace("/auth/login");
  });

  return (
    <>
      <Layout></Layout>
    </>
  );
}
