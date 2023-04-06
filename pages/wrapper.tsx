import { Layout } from "@/components/templates/Layout";
import type { AppProps } from "next/app";
export default function Wrapper({ children }: any) {
  return <Layout>{children}</Layout>;
}
