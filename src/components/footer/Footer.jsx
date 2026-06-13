import Image from "next/image";
import logo from "@/assets/images/silver-logo.jpg";
import { FaGithub, FaLinkedin, FaInstagram, FaTelegram } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-black text-white rounded-t-4xl w-full min-h-150 flex flex-col justify-center items-center gap-5 py-8 shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),10px_10px_30px_4px_rgba(45,78,255,0.15)] m-b-0">
            <div className="w-full flex justify-center gap-2">
                <Image src={logo} alt="logo" width={640} height={640} className="w-20 h-20"/>
                <h3 className="text-3xl flex items-center">تیم سیلور</h3>
            </div>
            <div className="w-full flex justify-center items-center flex-direction gap-5">
                <a href="https://github.com/silvercodingteam"><FaGithub size={45} className="text-white"/></a>
                <a href=""><FaLinkedin size={45} className="text-white"/></a>
                <a href="https://www.instagram.com/silver.team"><FaInstagram size={45} className="text-white"/></a>
                <a href="https://t.me/SilverPTC"><FaTelegram size={45} className="text-white"/></a>
            </div>
            <div className="w-full flex justify-center items-center flex-col">
                <a href="silvercodingteam@gmail.com" className="text-white">silvercodingteam@gmail.com</a>
                <p>+989115938935</p>
                <p>+989304835768</p>
            </div>
            <div>
                <p>تمامی حقوق متعلق به تیم سیلور میباشد.</p>
            </div>
        </footer>
    )
}