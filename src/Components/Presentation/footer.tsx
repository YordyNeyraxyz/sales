import Link from "next/link"
import { BsTwitterX } from "react-icons/bs"
import { FaMapMarked } from "react-icons/fa"
import { GrLinkedin } from "react-icons/gr"
import { MdEmail, MdOutlinePhoneInTalk } from "react-icons/md"
import { SlSocialInstagram } from "react-icons/sl"


export const FooterPage = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
    <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            <div className="space-y-4">
                <h3 className="text-2xl font-bold text-amber-300">Prime<span className="text-white">Sales</span></h3>
                <div className="flex space-x-4 pt-2">
                    <Link href="#" aria-label="Twitter">
                        <BsTwitterX  className="h-6 w-6 text-gray-400 hover:text-amber-300 transition"/>
                    </Link>
                    <Link href="#" aria-label="LinkedIn">
                        <GrLinkedin  className="h-6 w-6 text-gray-400 hover:text-amber-300 transition"/>
                    </Link>
                    <Link href="#" aria-label="Instagram">
                        <SlSocialInstagram  className="h-6 w-6 text-gray-400 hover:text-amber-300 transition"/>
                    </Link>
                </div>
            </div>
            <div>
                <h4 className="text-lg font-semibold mb-4 text-amber-300">CONTACT</h4>
                <address className="not-italic space-y-2">
                    <p className="flex items-center">
                        <MdOutlinePhoneInTalk  className="h-5 w-5 mr-2 text-amber-300"/>
                        +51 931 345 456
                    </p>
                    <p className="flex items-center">
                        <MdEmail  className="h-5 w-5 mr-2 text-amber-300"/>
                        myTeam@salesprime.com
                    </p>
                </address>
            </div>
        </div>
        <div className="border-t border-gray-700 my-6"></div>
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
            <p>© 2025 SalesPrime. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
                <Link href="#" className="hover:text-amber-300 transition">Privacy Policy</Link>
                <Link href="#" className="hover:text-amber-300 transition">Terms of Service</Link>
            </div>
        </div>
    </div>
</footer>
  )
}
