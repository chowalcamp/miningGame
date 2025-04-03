'use client'
import Layout from "@/components/common/layout/layout";
import GameBoard from "@/components/component/gameBoard";
import UserHeader from "@/components/component/userHeader";

export default function Home() {
  return (
    <Layout>
      <UserHeader />
      <GameBoard />
    </Layout>
  )
}
