import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div className="header">
      <div className="nav">
        <Image className="" src="/img/logo.png" height={100} width={195} />

        <Link href="/signup" >
          <a className="btn btn-red">Sign Up</a>
        </Link>
      </div>
    </div>
  )
}

export default Header
