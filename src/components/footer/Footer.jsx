import Image from "next/image";
import logo from "@/assets/images/silver-logo.jpg";
import githublogo from "@/assets/icons/github-icon.svg";
import linkedinlogo from "@/assets/icons/linkedin-icon.svg";
import instagramlogo from "@/assets/icons/instagram-icon.svg";
import telegramlogo from "@/assets/icons/telegram-icon.svg";

export default function Footer() {
    return (
        <footer className="bg-black text-white rounded-t-4xl w-full min-h-100 shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),10px_10px_30px_4px_rgba(45,78,255,0.15)] m-b-0">
            <div className="w-full flex justify-center gap-2 py-10">
                <Image src={logo} alt="logo" width={640} height={640} className="w-20 h-20"/>
                <h3 className="text-3xl flex items-center">تیم سیلور</h3>
            </div>
            <div>
                <Image src={githublogo} alt="icon" width={640} height={640} className="w-20 h-20"/>
                <Image src={linkedinlogo} alt="icon" width={640} height={640} className="w-20 h-20"/>
                <Image src={instagramlogo} alt="icon" width={640} height={640} className="w-20 h-20"/>
                <Image src={telegramlogo} alt="icon" width={640} height={640} className="w-20 h-20"/>
            </div>
        </footer>
    )
}