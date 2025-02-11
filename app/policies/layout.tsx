import { PolicyLayoutClient } from "@/components/layouts/policy-layout-client"

export default function PoliciesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <PolicyLayoutClient>{children}</PolicyLayoutClient>
} 