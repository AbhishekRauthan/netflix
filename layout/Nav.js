import Image from "next/image";
import Link from "next/link";

const Nav = () => {
  return (
    <div className="nav">
      <div className="logo">
        <Image src="/img/logo.png" height={100} width={195} />
      </div>

      <Link href="/signup" >
        <a className="btn btn-red btn-nav">Sign Up</a>
      </Link>
    </div>
  )
}

export default Nav
