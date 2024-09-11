import { NextPage } from 'next'

interface Props { }

const Footer: NextPage<Props> = ({ }) => {
    return <div>
        <footer className="bg-gray-800 text-white py-4">
            <div className="container mx-auto text-center text-xs">
                © {new Date().getFullYear()} My Portfolio. All rights reserved.
            </div>
        </footer>
    </div>
}

export default Footer