import { NextPage } from 'next'
import Link from 'next/link'

interface Props { }

const NavBar: NextPage<Props> = ({ }) => {
    return (
        <div>
            <header className="bg-gray-800 text-white py-4 fixed top-0 left-0 w-full z-50">
                <nav className="container mx-auto flex justify-between items-center">
                    <div className="text-2xl font-bold">
                        <Link href="/">
                            My Portfolio
                        </Link>
                    </div>
                    <ul className="flex space-x-4">
                        <li>
                            <Link href="/">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/about">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link href="/projects">
                                Projects
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <div className="pt-16"></div>
        </div>
    )
}

export default NavBar
