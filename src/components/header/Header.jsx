"use client";
import Image from "next/image";
import logo from "@/assets/images/silver-logo.jpg"

export default function Header() {

    const scrollToFooter = () => {
        document.getElementById("footer")?.scrollIntoView({
            behavior: "smooth",
        });
    };

    return (
        <header className="bg-black grid grid-cols-2 w-full min-h-30 rounded-b-full shadow-xl/30 text-white">
            <div className="flex justify-start items-center px-15 gap-5">
                <Image src={logo} alt="logo" width={640} height={640} className="w-20 h-20"/>
                <h1 className="text-6xl">تیم سیلور</h1>
            </div>
            <div className="flex justify-end items-center px-15">
                <ul className="flex justify-end items-center flex-row gap-5 w-full h-full">
                    <li className="text-2xl">نمونه کارها</li>
                    <li className="text-2xl cursor-pointer" onClick={scrollToFooter}>ارتباط با ما</li>
                </ul>
            </div>
        </header>
    );
}