import manOnThePhone from "./images/law-firm-images/manOnThePhone.jpg";
import twoMenLookingAtPaper from "./images/law-firm-images/twoMenLookingAtPaper.jpg";
import teamOfPeopleWalking from "./images/law-firm-images/teamOfPeopleWalking.jpg";
import shakingHands from "./images/law-firm-images/shakingHands.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import { faBusinessTime } from "@fortawesome/free-solid-svg-icons";
import { faTree } from "@fortawesome/free-solid-svg-icons";
import maleAvatar from "./images/male-avatar.png";
import femaleAvatar from "./images/female-avatar.png";

import {
  SlSocialInstagram,
  SlSocialLinkedin,
  SlSocialFacebook,
  SlSocialYoutube,
} from "react-icons/sl";

export const navItems = [
  { id: 1, text: "Home", link: "/" },
  { id: 2, text: "Products", link: "/products" },
  { id: 3, text: "About", link: "/about" },
  { id: 4, text: "Contact", link: "/contact" },
];
export const sidebarItems = [
  { id: 1, text: "intro", link: "#introduction" },
  { id: 2, text: "expertise", link: "#expertise" },
  { id: 3, text: "strength", link: "#strength" },
  { id: 4, text: "testimonial", link: "#testimonial" },
  { id: 5, text: "contact", link: "#contact" },
];

export const socialMedia = [
  { id: 1, url: "https://youtube.com/", icon: <SlSocialYoutube /> },
  {
    id: 2,
    url: "https://linkedin.com/",
    icon: <SlSocialLinkedin />,
  },
  {
    id: 3,
    url: "https://facebook.com/",
    icon: <SlSocialFacebook />,
  },
  {
    id: 4,
    url: "https://instagram.com/",
    icon: <SlSocialInstagram />,
  },
];

export const slideItems = [
  {
    id: 1,
    img: manOnThePhone,
    title: "Legal Expertise",
    desc: "At our law firm, legal expertise is the bedrock upon which we build every client relationship and case. It signifies our unwavering commitment to mastering the intricacies of the law to better serve our clients' diverse needs.",
  },
  {
    id: 2,
    img: twoMenLookingAtPaper,
    title: "Experienced Attorneys",
    desc: "Our law firm takes immense pride in the caliber of our legal team, which is the cornerstone of our success and our clients' peace of mind. Our experienced attorneys bring a wealth of knowledge, skill, and a track record of success to every case. With years of practice across diverse legal fields, they are the guiding lights through the labyrinth of legal complexities.",
  },
  {
    id: 3,
    img: shakingHands,
    title: "Effective Communication",
    desc: "At our law firm, we understand that the law is not just about knowing the rules; it's about effectively communicating and advocating for our clients' rights and interests. Effective communication is the lifeblood of our practice, and it defines the way we connect with our clients, the courts, and opposing parties.",
  },
  {
    id: 4,
    img: teamOfPeopleWalking,
    title: "Efficient Teamwork",
    desc: "At our law firm, we firmly believe that the synergy of a collaborative team is the driving force behind our success. Efficient teamwork isn't just a goal; it's the very essence of our firm's culture and the secret to delivering exceptional legal services.",
  },
];

export const expertise = [
  {
    id: 1,
    title: "Intellectual Property Law",
    icon: <FontAwesomeIcon icon={faCopyright} size="2xl" />,
    details:
      "Intellectual Property (IP) law refers to the legal framework that protects creations of the human intellect. These creations can be in the form of inventions, literary and artistic works, symbols, names, images, and designs used in commerce. The main purpose of intellectual property law is to provide creators and inventors with exclusive rights over their creations for a certain period, encouraging innovation and creativity while ensuring that creators can benefit from their efforts.",
  },
  {
    id: 2,
    title: "Corporate and Business Law",
    icon: <FontAwesomeIcon icon={faBusinessTime} size="2xl" />,
    details:
      "Corporate and Business Law encompass a wide range of legal principles and regulations that govern the establishment, operation, and dissolution of business entities, as well as the interactions between businesses, their stakeholders, and the broader legal environment. This area of law covers various aspects of business activities, including formation, management, financing, contracts, mergers and acquisitions, governance, and more.",
  },
  {
    id: 3,
    title: "Environmental Law",
    icon: <FontAwesomeIcon icon={faTree} size="2xl" />,
    details:
      "Environmental law is a branch of law that focuses on the regulation and protection of the natural environment and the conservation of natural resources. It encompasses a wide range of legal principles, regulations, and policies aimed at addressing various environmental issues, including pollution, conservation, land use, wildlife protection, and more. The main objective of environmental law is to promote sustainable development, protect ecosystems, and ensure the well-being of both present and future generations. ",
  },
  {
    id: 4,
    title: "International Law",
    icon: <FontAwesomeIcon icon={faGlobe} size="2xl" />,
    details:
      "International law is a set of rules and principles that govern the relations between states and other international entities. It encompasses a wide range of legal norms and conventions that guide interactions in the global arena, covering areas such as diplomacy, human rights, trade, environmental protection, armed conflict, and more. International law plays a crucial role in facilitating cooperation, resolving disputes, and promoting order and stability in the international community. ",
  },
];

export const testimonial = [
  {
    id: 1,
    name: "Lily A",
    avatar: femaleAvatar,
    title: "Client Manager",
    text: "I can't thank [Law Firm Name] enough for their outstanding legal representation. They truly went above and beyond to help me navigate a complex legal matter. Their expertise, dedication, and commitment to my case were instrumental in achieving a favorable outcome. I highly recommend them to anyone in need of legal services.",
  },
  {
    id: 2,
    name: "John B",
    avatar: maleAvatar,
    title: "Human Resource",
    text: "From the moment I contacted [Law Firm Name], I knew I was in good hands. Their team of attorneys is not only highly knowledgeable but also incredibly compassionate. They made me feel heard and supported throughout the entire process. I am grateful for their hard work and for securing a successful resolution to my legal issue.",
  },
  {
    id: 3,
    name: "Lisa C",
    avatar: femaleAvatar,
    title: "PR Manager",
    text: "I was facing a legal challenge that seemed insurmountable until I hired [Law Firm Name]. Their legal expertise and attention to detail were unmatched. They provided me with a clear and strategic plan, and I was consistently impressed by their professionalism and dedication. I can't thank them enough for the peace of mind they've given me.",
  },
  {
    id: 4,
    name: "Andreana D",
    avatar: femaleAvatar,
    title: "Product Director",
    text: "I had the privilege of working with [Attorney Name] at [Law Firm Name], and I couldn't have asked for a better attorney. Their legal acumen and ability to communicate complex legal concepts in a way I could understand were exceptional. They fought tirelessly for my rights and achieved a result that exceeded my expectations.",
  },
  {
    id: 5,
    name: "Luke E",
    avatar: maleAvatar,
    title: "PR Manager",
    text: "When I needed legal assistance, [Law Firm Name] was there for me every step of the way. They handled my case with the utmost professionalism and care. The support I received from their team was invaluable, and I am grateful for the favorable outcome they secured on my behalf.",
  },
  {
    id: 6,
    name: "Mike F",
    avatar: maleAvatar,
    title: "Vice President",
    text: "I was fortunate to have [Attorney Name] as my attorney at [Law Firm Name]. Their dedication to my case, combined with their in-depth legal knowledge, made all the difference. Thanks to their expertise, I was able to resolve a complex legal issue efficiently and with a positive outcome.",
  },
  {
    id: 7,
    name: "Albert G",
    avatar: maleAvatar,
    title: "CTO",
    text: "Choosing [Law Firm Name] was the best decision I made during a challenging legal situation. Their team worked tirelessly to protect my rights and interests. Their communication and transparency throughout the process were exceptional. I highly recommend them to anyone seeking legal assistance.",
  },
  {
    id: 8,
    name: "Jone H",
    avatar: femaleAvatar,
    title: "Legal Director",
    text: "If you're searching for a law firm that will go the extra mile, [Law Firm Name] is the one. Their attorneys are not only highly skilled but also compassionate and dedicated. I am thankful for their tireless efforts and the successful resolution they achieved in my case.",
  },
];
