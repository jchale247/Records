import Header from "./components/Header";
import Feed from "./components/Feed"

export default function Home() {
  return (
    <div>
      <head>
        <title>Record Music</title>
      </head>
      <Header />
      <Feed />
      <main className="flex bg-zinc-900 h-screen">
      </main>
    </div>
  );
}
