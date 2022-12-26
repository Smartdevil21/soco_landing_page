import { Stack } from "@mui/material";
import Link from "next/link";
import React from "react";
import Styles from "./footer.module.scss";

function Footer() {
  return (
    <footer className={Styles.footer}>
      <section className={Styles.sec1}>
        <h2>thesocialcomment</h2>
        <br />
        <p>
          thesocialcomment is a student-based network that focuses on project
          based learning.
        </p>
        <br />
        <p>© 2023 thesocialcomment. All rights reserved</p>
      </section>
      <section className={Styles.sec2}>
        <h3>Company</h3>
        <nav>
          <ul>
            <Link href="#" passHref>
              <p>About</p>
            </Link>
            <Link href="#" passHref>
              <p>Privacy Policy</p>
            </Link>
            <Link href="#" passHref>
              <p>How it works</p>
            </Link>
            <Link href="#" passHref>
              <p>Cookie Policy</p>
            </Link>
            <Link href="#" passHref>
              <p>FAQ</p>
            </Link>
            <Link href="#" passHref>
              <p>Founder's Story</p>
            </Link>
          </ul>
        </nav>
      </section>
      <section className={Styles.sec3}>
        <nav>
          <ul>
            <Link href="#" passHref>
              <p>Student Internship</p>
            </Link>
            <Link href="#" passHref>
              <p>Recruiter Policy</p>
            </Link>
            <Link href="#" passHref>
              <p>Referral Policy</p>
            </Link>
            <Link href="#" passHref>
              <p>Affiliate</p>
            </Link>
            <Link href="#" passHref>
              <p>Premium Membership</p>
            </Link>
            <Link href="#" passHref>
              <p>Community Guidelines</p>
            </Link>
            <Link href="#" passHref>
              <p>Terms Of Service</p>
            </Link>
            <Link href="#" passHref>
              <p>Recruiter Guidelines</p>
            </Link>
            <Link href="#" passHref>
              <p>Support</p>
            </Link>
            <Link href="#" passHref>
              <p>Monetization Policy</p>
            </Link>
            <Link href="#" passHref>
              <p>Report A Bug</p>
            </Link>
          </ul>
        </nav>
      </section>
      <section className={Styles.sec4}>
        <h3>Social Links</h3>
        <nav>
          <ul>
            <Link href="#" passHref>
              <Stack direction={"row"} spacing={2}>
                <p>Instagram</p>
              </Stack>
            </Link>
            <Link href="#" passHref>
              <Stack direction={"row"} spacing={2}>
                <p>Facebook</p>
              </Stack>
            </Link>
            <Link href="#" passHref>
              <Stack direction={"row"} spacing={2}>
                <p>LinkedIn</p>
              </Stack>
            </Link>
            <Link href="#" passHref>
              <Stack direction={"row"} spacing={2}>
                <p>Twitter</p>
              </Stack>
            </Link>
            <Link href="#" passHref>
              <Stack direction={"row"} spacing={2}>
                <p>Youtube</p>
              </Stack>
            </Link>
          </ul>
        </nav>
      </section>
    </footer>
  );
}

export default Footer;