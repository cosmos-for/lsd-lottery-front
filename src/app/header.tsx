import Link from "next/link"

export default function Header() {
    return (
      <div className="w-full h-24 flex items-center justify-between pl-5 pr-5">
        <div className="flex">
            <div></div>
            <Link href="/lsd" className="ml-14 hover:text-[#34b9cb] cursor-pointer">LSD</Link>
            <Link  href="/lottery" className="ml-14 hover:text-[#34b9cb]  cursor-pointer">Lottery</Link>
        </div>
        <div className="flex">
            <div className="pl-5 pr-5 pt-3 pb-3 border border-black hover:bg-[#34b9cb] rounded-lg cursor-pointer">Connect wallet</div>
        </div>
      </div>
    )
  }
  