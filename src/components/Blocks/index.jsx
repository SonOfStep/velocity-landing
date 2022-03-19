import { useState } from "react";
import ImgHero from "../../img/hero.png";
import Title from "../UI/Title";
import Subtitle from "../UI/Subtitle";
import Button from "../UI/Button";

import { ReactComponent as BoxIcon } from "../../img/icons/box.svg";
import { ReactComponent as TimeIcon } from "../../img/icons/time.svg";
import { ReactComponent as ResizeIcon } from "../../img/icons/resize.svg";

import { ReactComponent as TwitterIcon } from "../../img/icons/twitter.svg";
import { ReactComponent as FacebookIcon } from "../../img/icons/fb.svg";
import { ReactComponent as PinterestIcon } from "../../img/icons/pinterest.svg";
import { ReactComponent as GoogleIcon } from "../../img/icons/google.svg";
import { ReactComponent as WebflowIcon } from "../../img/icons/webflow.svg";
import Link from "../UI/Link";
import Section from "../UI/Section";
import Container from "../UI/Container";
import Menu from "../UI/Menu";

const itemsMenu = [
  { title: "Home", link: "#" },
  { title: "Contact", link: "#" },
];

export function Header() {
  return (
    <Section as="header">
      <Container className="h-[60px] flex justify-between items-center">
        <Title as="h1" className={"text-3xl text-blue-500 "}>
          Velocity
        </Title>
        <Menu items={itemsMenu} />
      </Container>
    </Section>
  );
}

export function Hero() {
  return (
    <Section className="min-h-[calc(100vh-60px)] flex items-center justify-center">
      <Container>
        <div>
          <Title as="h2" className="text-white text-6xl text-center">
            This is Velocity
          </Title>

          <div className="flex justify-center gap-6 mt-24">
            <Button>Sign Up</Button>
            <Button variant="outline">Learn more</Button>
          </div>
        </div>
        <img
          src={ImgHero}
          alt="Hero Image"
          className="absolute inset-0 w-full h-full object-cover -z-10"
        />
      </Container>
    </Section>
  );
}

export function WhatWeDo() {
  return (
    <Section className="text-gray-500 py-24">
      <Container>
        <Title as="h2" className="text-4xl text-center">
          What we do
        </Title>
        <Subtitle className="text-center">
          This is sime text inside of a div block
        </Subtitle>
        <div className="flex justify-center items-center gap-6 flex-wrap">
          {[
            {
              id: 1,
              imgSrc: TimeIcon,
              title: "Graphic Design",
              content: (
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique.
                </p>
              ),
            },
            {
              id: 2,
              imgSrc: ResizeIcon,
              title: "Awesome code",
              content: (
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique.
                </p>
              ),
            },
            {
              id: 3,
              imgSrc: BoxIcon,
              title: "Awesome code",
              content: (
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique.
                </p>
              ),
            },
          ].map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center px-10 py-10 gap-y-4 text-center flex-1  min-w-[300px] ring-1 ring-gray-100 rounded-lg "
            >
              <item.imgSrc className="w-24 h-24 bg-blue-500 p-1 fill-white" />
              <Title as="h4" className="text-2xl">
                {item.title}
              </Title>
              {item.content}
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export function Services() {
  return (
    <Section className="text-white py-24 bg-stone-900">
      <Container>
        <Title as="h2" className="text-4xl text-center">
          services
        </Title>
        <Subtitle className="text-center">
          This is some text inside of a div block
        </Subtitle>

        <div className="flex justify-center items-center gap-6 flex-wrap">
          {[
            {
              id: 1,
              imgSrc:
                "https://images.unsplash.com/photo-1422405061047-61f0cf84c1dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
              title: "Services one",
              content: (
                <>
                  <p className="mb-5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique.Lorem
                    ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius.
                  </p>
                  <Button variant="outline">Learn More</Button>
                </>
              ),
            },
            {
              id: 2,
              imgSrc:
                "https://images.unsplash.com/photo-1542628682-88321d2a4828?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
              title: "Services two",
              content: (
                <>
                  <p className="mb-5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique.Lorem
                    ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius.
                  </p>
                  <Button variant="outline">Learn More</Button>
                </>
              ),
            },
          ].map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center px-10 py-10 gap-y-4 text-center flex-1  min-w-[460px]"
            >
              <img src={item.imgSrc} alt={item.title} />
              <Title as="h4" className="text-2xl">
                {item.title}
              </Title>
              {item.content}
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export function Tabs() {
  const [slides, setSlides] = useState([
    {
      id: 1,
      isActive: false,
      imgSrc:
        "https://images.unsplash.com/photo-1628260412297-a3377e45006f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
      content: (
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique. Duis cursus, mi quis viverra
          ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
          Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc
          ut sem vitae risus tristique posuere.
        </p>
      ),
    },
    {
      id: 2,
      isActive: true,
      imgSrc:
        "https://images.unsplash.com/photo-1636622433525-127afdf3662d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80",
      content: (
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique. Duis cursus, mi quis viverra
          ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
          Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc
          ut sem vitae risus tristique posuere.
        </p>
      ),
    },
    {
      id: 3,
      isActive: false,
      imgSrc:
        "https://images.unsplash.com/photo-1638803040283-7a5ffd48dad5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
      content: (
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique. Duis cursus, mi quis viverra
          ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
          Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc
          ut sem vitae risus tristique posuere.
        </p>
      ),
    },
  ]);
  return (
    <Section className="py-24 text-gray-500">
      <Container>
        <Title as="h2" className="text-4xl text-center">
          services
        </Title>
        <Subtitle className="text-center">
          This is some text inside of a div block
        </Subtitle>
        <div className="tabs">
          <div className="tabs__navigation flex justify-center gap-5 mb-14">
            {slides.map(({ id }) => (
              <Button
                className="px-8"
                onClick={() => {
                  setSlides((slides) =>
                    slides.map((item) => ({
                      ...item,
                      isActive: item.id === id ? true : false,
                    }))
                  );
                }}
              >
                Tap Button {id}
              </Button>
            ))}
          </div>
          <ul className="tabs__items relative">
            {slides.map((item) => (
              <li
                key={item.id}
                className={`w-full inset-0 text-center transition-all ${
                  item.isActive ? "block" : "hidden"
                }`}
              >
                <img
                  src={item.imgSrc}
                  alt=""
                  className="h-[637px] w-full object-cover mb-5"
                />
                <Title as="h4" className="text-4xl">
                  Some Title Here
                </Title>
                <div className="max-w-4xl mx-auto">{item.content}</div>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}

export function Additionaly() {
  return (
    <Section className="py-24 text-gray-500">
      <Container>
        <div className="flex justify-between items-start gap-3">
          <div className="flex-1">
            <Title as="h3" className="text-2xl">
              About Velocity
            </Title>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat.
            </p>
          </div>
          <div className="flex-1">
            <Title as="h3" className="text-2xl">
              Useful links
            </Title>
            <ul className="flex flex-col">
              {[
                { id: 0, text: "Phasellus gravida semper nisi", link: "#" },
                { id: 1, text: "Suspendisse nisl elit", link: "#" },
                { id: 2, text: "Dellentesque habitant morbi", link: "#" },
                { id: 3, text: "Etiam sollicitudin ipsum", link: "#" },
              ].map((item) => (
                <li key={item.id} className="border-b-[1px] border-gray-500">
                  <Link href={item.link}>{item.text}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1">
            <Title as="h3" className="text-2xl">
              Social
            </Title>
            <ul className="flex flex-col">
              {[
                { id: 0, text: "Twitter", link: "#", icon: TwitterIcon },
                { id: 1, text: "Facebook", link: "#", icon: FacebookIcon },
                { id: 2, text: "Pinterest", link: "#", icon: PinterestIcon },
                { id: 3, text: "Google", link: "#", icon: GoogleIcon },
                { id: 4, text: "Webflow", link: "#", icon: WebflowIcon },
              ].map((item) => (
                <li key={item.id} className="border-b-[1px] border-gray-500">
                  <Link
                    href={item.link}
                    className="flex justify-start items-center gap-3"
                  >
                    <item.icon className="w-6 h-6" />
                    <span>{item.text}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export function Footer() {
  return (
    <Section as="footer" className={"py-11 text-gray-500 bg-stone-900"}>
      <Container>
        <p className="text-center">Copyright Velocity Inc. Made in Webflow.</p>
      </Container>
    </Section>
  );
}
