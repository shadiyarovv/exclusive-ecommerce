import React from "react";
import Container from "../Container";
import FooterColumn from "./FooterColumn";
import { SendHorizonal } from "lucide-react";

const Footer = () => {
  const col1 = {
    title: "Support",
    labels: [
      "111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.",
      "exclusive@gmail.com",
      "+88015-88888-9999",
    ],
  };
  const col2 = {
    title: "Account",
    labels: ["My Account", "Login / Register", "Cart", "Wishlist", "Shop"],
  };
  const col3 = {
    title: "Quick Link",
    labels: ["Privacy Policy", "Terms of Use", "FAQ", "Contact"],
  };

  return (
    <footer className="bg-black text-white">
      <Container>
        <div className="flex justify-between py-12">
          <div className="space-y-3">
            <h3 className="font-bold text-2xl">Exclusive</h3>
            <h5 className="text-xl font-semibold">Subscribe</h5>
            <p>Get 10% off your first order</p>
            <form className="relative border-2 border-white rounded-md">
              <input
                type="text"
                placeholder="Enter your email"
                className="outline-none bg-transparent py-2 px-3"
              />
              <SendHorizonal
                className="absolute right-2 top-1/2 -translate-y-1/2"
                size={20}
              />
            </form>
          </div>
          <FooterColumn title={col1.title} labels={col1.labels} />
          <FooterColumn title={col2.title} labels={col2.labels} />
          <FooterColumn title={col3.title} labels={col3.labels} />
          <div className="space-y-3">
            <h5 className="font-semibold text-xl">Download App</h5>
            <p className="text-xs text-gray-md">
              Save $3 with App New User Only
            </p>
          </div>
        </div>
        <div className="py-3 border-t border-t-gray-dark text-gray-dark text-center">
          <p>&copy; Copyright Rimel 2022. All right reserved</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
