import MainMenu from "@/components/main-menu"

export default function Home() {
  return (
    <div className="flex h-screen flex-row">
      <MainMenu />
      <div className="w-80">b</div>
      <div className="flex-1 bg-pink-400">c</div>
    </div>
  )
}
