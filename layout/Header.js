import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div className="header">
      <div className="nav">
        <div className="logo">
          <Image src="/img/logo.png" height={100} width={195} />
        </div>

        <Link href="/signup" >
          <a className="btn btn-red btn-nav">Sign Up</a>
        </Link>
      </div>
    </div>
  )
}

export default Header
