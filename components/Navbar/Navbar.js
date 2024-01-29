import React, { useState, useEffect } from "react";
import Image from "next/image";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import styles from "./Navbar.module.css";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import dynamic from "next/dynamic";
const MegaMenu = dynamic(() => import("../MegaMenu/MegaMenu"));
// import CountDownTimer from "../CountdownTimer/CountdownTimer";

// const calculateTimeLeft = () => {
//   let year = new Date();
//   let difference = +new Date("2023-03-31 23:59") - +new Date();

//   let timeLeft = {};

//   if (difference > 0) {
//     timeLeft = {
//       days: Math.floor(difference / (1000 * 60 * 60 * 24)),
//       hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
//       minutes: Math.floor((difference / 1000 / 60) % 60),
//       seconds: Math.floor((difference / 1000) % 60),
//     };
//   }

//   return timeLeft;
// };
const Navbar = ({ link, event, ads }) => {
  const [show, setShow] = useState(false);
  const [icon, setIcon] = useState(false);
  const [popups, setPopups] = useState(false);
  const [mobile, setMobile] = useState(false);
  const actualLink =
    link === undefined ? "https://courses.skillslash.com/learn" : link;
  useEffect(() => {
    let width = window.innerWidth;
    if (width < 481) {
      setMobile(true);
    }
    if (width > 481) {
      setMobile(false);
    }
  });

  //timer code
  // const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  // ...
  //timer useEffect
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setTimeLeft(calculateTimeLeft());
  //   }, 1000);

  //   return () => clearTimeout(timer);
  // });
  const popupShow = () => {
    setPopups(true);
  };
  const showMenu = () => {
    setShow(!show);
  };
  const handleIcon = (data) => {
    setIcon(data);
  };

  return (
    <div>
      <nav className={styles.nav}>
        <div className={styles.left}>
          {/*<FaBars
            className={styles.ham}
            onClick={() => {
              showMenu();
              setIcon(false);
            }}*/}

          {!show ? (
            <FaBars
              className={styles.ham}
              onClick={() => {
                showMenu();
                setIcon(false);
              }}
            />
          ) : (
            <p
              className={styles.ham}
              style={{ fontSize: "45px", margin: "0" }}
              onClick={() => {
                showMenu();
                setIcon(false);
              }}
            >
              ⨯
            </p>
          )}

          <div className={show ? styles.mobileWrapper : styles.hide}>
            <div className={styles.mobileMenu}>
              <span onClick={showMenu}>
                <Link href="/event">Events</Link>
              </span>
              <span onClick={showMenu}>
                <Link href="/About">About Us</Link>
              </span>

              <span onClick={showMenu}>
                <Link href="/Contact-us">Conctact Us</Link>
              </span>

              <span onClick={showMenu}>
                <a href="/blog">Blogs</a>
              </span>
            </div>
          </div>
          {ads ? (
            <Image
              src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/Skillslash-logo-new.png"
              alt="Skillslash"
              quality={100}
              style={{ objectFit: "contain" }}
              width={180}
              height={60}
            />
          ) : (
            <a href="/">
              <Image
                src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/Skillslash-logo-new.png"
                alt="Skillslash"
                quality={100}
                style={{ objectFit: "contain" }}
                width={180}
                height={60}
              />
            </a>
          )}

          <Link href={actualLink}>
            <button className="hidden max-sm:block">Start Learning</button>
          </Link>
          {ads ? (
            ""
          ) : (
            <button
              onMouseEnter={() => setIcon(true)}
              onMouseOver={() => setIcon(true)}
              onClick={() => {
                setIcon(!icon);
                setShow(false);
              }}
              className={styles.MegaBtn}
            >
              Our Courses
              {icon ? (
                <MdKeyboardArrowUp className={styles.bIcon} />
              ) : (
                <MdKeyboardArrowDown className={styles.bIcon} />
              )}
            </button>
          )}

          {icon ? (
            <div
              className="megaMenu"
              onMouseOver={() => setIcon(true)}
              onMouseLeave={() => setIcon(false)}
            >
              <MegaMenu handleIcon={handleIcon} />
            </div>
          ) : (
            ""
          )}
        </div>
        <div className={styles.right}>
          {ads ? (
            <Link href={actualLink}>
              <button>Start Learning</button>
            </Link>
          ) : event ? (
            <>
              <span>
                <Link href="#Feature">Program Features</Link>
              </span>

              <span>
                <Link href="#who">Who can join</Link>
              </span>
              <span>
                <Link href="#About">About us</Link>
              </span>
            </>
          ) : (
            <>
              <span>
                <Link href="/event">EVENTS</Link>
              </span>
              <span>
                <Link href="/About">ABOUT US</Link>
              </span>
              <span>
                <Link href="/Contact-us">Contact us</Link>
              </span>
              <span>
                <a href="/blog">Blog</a>
              </span>
              <Link href={actualLink}>
                <button>Start Learning</button>
              </Link>
            </>
          )}
        </div>
      </nav>
      <main className={styles.TopBar}>
        Use code <b className="text-[#f18350] pl-[4px] pr-[4px]"> NEWYEAR50 </b>{" "}
        to get 50% flat discount.
      </main>
    </div>
  );
};

export default Navbar;
