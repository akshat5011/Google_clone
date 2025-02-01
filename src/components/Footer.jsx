import React from "react";
import CountryFetch from "./CountryFetch";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="absolute bottom-0 py-1 justify-between text-sm text-gray-900 bg-[#f2f2f2] w-full">
      <div className="border-b border-gray-300 px-8 py-3">
        <CountryFetch />
      </div>
      <div className="flex flex-col sm:flex-row justify-between items-center px-8 py-3 space-y-7 sm:space-y-0">
        <div className="flex space-x-5 items-center">
          <Link
            className="link"
            href="https://www.google.co.in/intl/en_in/ads/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&amp;utm_source=google.com&amp;utm_medium=referral&amp;utm_campaign=google_hpafooter&amp;fg=1"
            ping="/url?sa=t&amp;rct=j&amp;source=webhp&amp;url=https://www.google.co.in/intl/en_in/ads/%3Fsubid%3Dww-ww-et-g-awa-a-g_hpafoot1_1!o2%26utm_source%3Dgoogle.com%26utm_medium%3Dreferral%26utm_campaign%3Dgoogle_hpafooter%26fg%3D1&amp;ved=0ahUKEwjc-feWy6GLAxXxS2wGHZ9FG0kQkdQCCCE&amp;opi=89978449"
          >
            Advertising
          </Link>
          <Link
            className="link"
            href="https://www.google.co.in/services/?subid=ww-ww-et-g-awa-a-g_hpbfoot1_1!o2&amp;utm_source=google.com&amp;utm_medium=referral&amp;utm_campaign=google_hpbfooter&amp;fg=1"
            ping="/url?sa=t&amp;rct=j&amp;source=webhp&amp;url=https://www.google.co.in/services/%3Fsubid%3Dww-ww-et-g-awa-a-g_hpbfoot1_1!o2%26utm_source%3Dgoogle.com%26utm_medium%3Dreferral%26utm_campaign%3Dgoogle_hpbfooter%26fg%3D1&amp;ved=0ahUKEwjc-feWy6GLAxXxS2wGHZ9FG0kQktQCCCI&amp;opi=89978449"
          >
            Business
          </Link>
          <Link
            className="link"
            href="https://google.com/search/howsearchworks/?fg=1"
          >
            {" "}
            How Search works{" "}
          </Link>
        </div>

        <div className="flex space-x-5 items-center">
          <Link
            className="link"
            href="https://policies.google.com/privacy?hl=en-IN&amp;fg=1"
            ping="/url?sa=t&amp;rct=j&amp;source=webhp&amp;url=https://policies.google.com/privacy%3Fhl%3Den-IN%26fg%3D1&amp;ved=0ahUKEwjc-feWy6GLAxXxS2wGHZ9FG0kQ8awCCCM&amp;opi=89978449"
          >
            Privacy
          </Link>
          <Link
            className="link"
            href="https://policies.google.com/terms?hl=en-IN&amp;fg=1"
            ping="/url?sa=t&amp;rct=j&amp;source=webhp&amp;url=https://policies.google.com/terms%3Fhl%3Den-IN%26fg%3D1&amp;ved=0ahUKEwjc-feWy6GLAxXxS2wGHZ9FG0kQ8qwCCCQ&amp;opi=89978449"
          >
            Terms
          </Link>
          <span> Setitngs</span>
        </div>
      </div>
    </footer>
  );
}
