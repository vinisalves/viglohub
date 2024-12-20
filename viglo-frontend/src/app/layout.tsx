import type { Metadata } from "next";

import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "VigloHub",
  description: "VigloHub",
};

type Props = {
  children: ReactNode;
};

export default function RootLayout({ children }: Props) {
  return children;
}
