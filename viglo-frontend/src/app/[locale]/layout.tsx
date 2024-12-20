import BaseLayout from "@/components/layout/base-layout";
import { getMessages } from "next-intl/server";
export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{
    locale: string;
  }>;
}) {
  return <BaseLayout params={params}> {children}</BaseLayout>;
}
