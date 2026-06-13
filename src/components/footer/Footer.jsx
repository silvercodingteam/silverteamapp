import Image from "next/image";
import logo from "@/assets/images/silver-logo.jpg";
import { FaGithub, FaLinkedin, FaInstagram, FaTelegram } from "react-icons/fa";

export default function Footer() {
    return (
        <footer id="footer" className="bg-black text-white rounded-t-4xl w-full flex flex-col justify-center items-center gap-7 py-7 shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),10px_10px_30px_4px_rgba(45,78,255,0.15)] m-b-0">
            <div className="w-full flex justify-center gap-2">
                <Image src={logo} alt="logo" width={640} height={640} className="w-20 h-20"/>
                <h3 className="text-3xl flex items-center">تیم سیلور</h3>
            </div>
            <div className="w-full flex justify-center items-center flex-direction gap-5">
                <a href="https://github.com/silvercodingteam" target="_blank"><FaGithub size={45} className="text-white"/></a>
                <a href="https://www.linkedin.com/in/aria-rajabi-24a87b395" target="_blank"><FaLinkedin size={45} className="text-white"/></a>
                <a href="https://www.instagram.com/silver.team" target="_blank"><FaInstagram size={45} className="text-white"/></a>
                <a href="https://t.me/SilverPTC" target="_blank"><FaTelegram size={45} className="text-white"/></a>
            </div>
            <div className="w-full flex justify-center items-center flex-col">
                <a href="mailto:silvercodingteam@gmail.com" target="_blank" className="text-xl text-white hover:underline">silvercodingteam@gmail.com</a>
                <a href="tel:+989115938935" dir="ltr" className="text-xl">+98 911 593 8935</a>
                <a href="tel:+989304835768" dir="ltr" className="text-xl">+98 930 483 5768</a>
            </div>
            <div>
                <p>تمامی حقوق متعلق به تیم سیلور میباشد.</p>
            </div>
        </footer>
    )
}