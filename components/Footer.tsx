import { footerLinks } from "@/contants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
type ColumnProps = {
  title: string;
  links: Array<string>;
};
const FooterColumn = ({ title, links }: ColumnProps) => {
  return (
    <div className="footer_column">
      <h4 className="font-semibold">{title}</h4>
      <ul className="flex flex-col gap-2 font-normal">
        {links.map((link) => (
          <Link href="/" key={link}>
            {link}
          </Link>
        ))}
      </ul>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="flexStart footer">
      <div className="flex gap-12 w-full">
        <div className="flex items-start flex-col">
          <Image src="/logo-purple.svg" width={115} height={38} alt="logo" />
          <p>Flexible is the world leading community for creative share</p>
        </div>
        <div className="flex flex-wrap gap-12">
          <FooterColumn {...footerLinks[0]} />
        </div>
        <div className="flex flex-col gap-4">
          <FooterColumn {...footerLinks[1]} />
          <FooterColumn {...footerLinks[2]} />
        </div>
        <div className="flex flex-wrap gap-12">
          <FooterColumn {...footerLinks[1]} />
        </div>
        <div className="flex flex-wrap gap-12">
          <FooterColumn {...footerLinks[2]} />
        </div>
      </div>
      <div className="w-full flex flex-start">
        <span className="text-sm"> 2023 copyright. All Right Reserved</span>
      </div>
    </footer>
  );
};

export default Footer;
