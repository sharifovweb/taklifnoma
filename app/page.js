"use client";

import { useEffect, useRef, useState } from "react";

const HERO_TEXT = "Assalomu alaykum!";
const WEDDING_DATE = new Date("2026-08-16T16:00:00");

function pad(n) {
  return n.toString().padStart(2, "0");
}

function getCountdown() {
  let diff = WEDDING_DATE - new Date();
  if (diff < 0) diff = 0;
  return {
    days: Math.floor(diff / 86400000),
    hours: pad(Math.floor((diff % 86400000) / 3600000)),
    mins: pad(Math.floor((diff % 3600000) / 60000)),
    secs: pad(Math.floor((diff % 60000) / 1000)),
  };
}

export default function Page() {
  const [open, setOpen] = useState(false);
  const [introHidden, setIntroHidden] = useState(false);
  const [muted, setMuted] = useState(false);
  const [countdown, setCountdown] = useState({ days: 0, hours: "00", mins: "00", secs: "00" });
  const audioRef = useRef(null);

  function handleOpen() {
    setOpen(true);
    const audio = audioRef.current;
    if (audio) {
      audio.volume = 0.5;
      audio.play().catch(() => {});
    }
  }

  function toggleMute() {
    const audio = audioRef.current;
    if (!audio) return;
    audio.muted = !audio.muted;
    setMuted(audio.muted);
  }

  useEffect(() => {
    setCountdown(getCountdown());
    const id = setInterval(() => setCountdown(getCountdown()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      <audio ref={audioRef} src="/music.m4a" loop preload="auto" />

      {open && (
        <button
          className="mute-btn"
          onClick={(e) => {
            e.stopPropagation();
            toggleMute();
          }}
        >
          {muted ? "🔇" : "🔊"}
        </button>
      )}

      <section
        id="intro"
        className={open ? "open" : ""}
        onClick={handleOpen}
        onTransitionEnd={() => open && setIntroHidden(true)}
        style={{ display: introHidden ? "none" : "flex" }}
      >
        <div className="hero-title">
          {HERO_TEXT.split("").map((ch, i) =>
            ch === " " ? (
              " "
            ) : (
              <span key={i} style={{ animationDelay: `${i * 0.045}s` }}>
                {ch}
              </span>
            )
          )}
        </div>
        <div className="hero-sub">Hurmatli Mehmonimiz</div>
        <div className="intro-hint">✦ OCHISH UCHUN BOSING ✦</div>
      </section>

      <div id="main" style={{ display: open ? "block" : "none" }}>
        <section className="section-couple">
          <div className="inner">
            <div className="divider">
              <span className="line"></span>
              <span className="orn">۞</span>
              <span className="line"></span>
            </div>
            <p className="eyebrow">Sizni</p>
            <div className="names cursive">
              Ikromiddin<span className="amp">va</span>Muxsinaxon
            </div>
            <p className="lede">muborak nikoh kechasiga chin qalb ila chorlaymiz</p>
          </div>
        </section>

        <section className="quote-wrap">
          <div className="inner">
            <div className="quote-card">
              <div className="corners">
                <span className="tl">۞</span>
                <span className="tr">۞</span>
                <span className="bl">۞</span>
                <span className="br">۞</span>
              </div>
              <div className="quote-mark">❝</div>
              <p className="quote-text">
                Va Uning belgilaridan biri — sizlar uchun o'zlaringizdan juftlar
                yaratganidirki, ularga sukun toping. U oraliqlaringizga muhabbat va
                rahmat qo'ydi.
              </p>
              <div className="quote-mark">❞</div>
              <div className="quote-src">Rum surasi, 21-oyat</div>
            </div>
          </div>
        </section>

        <section className="section-calendar">
          <div className="inner">
            <div className="cal-title">Avgust, 2026</div>
            <table className="cal">
              <thead>
                <tr>
                  <th>Du</th>
                  <th>Se</th>
                  <th>Ch</th>
                  <th>Pa</th>
                  <th>Ju</th>
                  <th className="weekend">Sh</th>
                  <th className="weekend">Ya</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>1</td>
                  <td>2</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>4</td>
                  <td>5</td>
                  <td>6</td>
                  <td>7</td>
                  <td>8</td>
                  <td>9</td>
                </tr>
                <tr>
                  <td>10</td>
                  <td>11</td>
                  <td>12</td>
                  <td>13</td>
                  <td>14</td>
                  <td>15</td>
                  <td className="active">16</td>
                </tr>
                <tr>
                  <td>17</td>
                  <td>18</td>
                  <td>19</td>
                  <td>20</td>
                  <td>21</td>
                  <td>22</td>
                  <td>23</td>
                </tr>
                <tr>
                  <td>24</td>
                  <td>25</td>
                  <td>26</td>
                  <td>27</td>
                  <td>28</td>
                  <td>29</td>
                  <td>30</td>
                </tr>
                <tr>
                  <td>31</td>
                  <td className="faint">1</td>
                  <td className="faint">2</td>
                  <td className="faint">3</td>
                  <td className="faint">4</td>
                  <td className="faint">5</td>
                  <td className="faint">6</td>
                </tr>
              </tbody>
            </table>
            <div className="cal-footer">
              <span className="orn">۞</span>
              <span className="txt">Yakshanba · 16-Avgust</span>
              <span className="orn">۞</span>
            </div>

            <div className="event-card">
              <div className="corners">
                <span className="tl">۞</span>
                <span className="tr">۞</span>
                <span className="bl">۞</span>
                <span className="br">۞</span>
              </div>
              <h3>Nikoh kechasi</h3>
              <div className="time">16:00</div>
              <div className="note">Kechki bazm</div>
            </div>
          </div>
        </section>

        <section className="section-countdown">
          <div className="sparkles">
            <span style={{ top: "8%", left: "12%", fontSize: 16 }}>✦</span>
            <span style={{ top: "14%", left: "80%", fontSize: 12 }}>✧</span>
            <span style={{ top: "70%", left: "8%", fontSize: 14 }}>✧</span>
            <span style={{ top: "78%", left: "85%", fontSize: 16 }}>✦</span>
            <span style={{ top: "40%", left: "50%", fontSize: 18 }}>·</span>
          </div>
          <div className="inner">
            <div className="countdown">
              <div className="cd-box">
                <div className="corners">
                  <span className="tl">۞</span>
                  <span className="tr">۞</span>
                  <span className="bl">۞</span>
                  <span className="br">۞</span>
                </div>
                <div className="cd-num">{countdown.days}</div>
                <div className="cd-lbl">Kun</div>
              </div>
              <div className="cd-box">
                <div className="corners">
                  <span className="tl">۞</span>
                  <span className="tr">۞</span>
                  <span className="bl">۞</span>
                  <span className="br">۞</span>
                </div>
                <div className="cd-num">{countdown.hours}</div>
                <div className="cd-lbl">Soat</div>
              </div>
              <div className="cd-box">
                <div className="corners">
                  <span className="tl">۞</span>
                  <span className="tr">۞</span>
                  <span className="bl">۞</span>
                  <span className="br">۞</span>
                </div>
                <div className="cd-num">{countdown.mins}</div>
                <div className="cd-lbl">Daqiqa</div>
              </div>
              <div className="cd-box">
                <div className="corners">
                  <span className="tl">۞</span>
                  <span className="tr">۞</span>
                  <span className="bl">۞</span>
                  <span className="br">۞</span>
                </div>
                <div className="cd-num">{countdown.secs}</div>
                <div className="cd-lbl">Soniya</div>
              </div>
            </div>
            <div className="cd-caption">To'yimizgacha sanoq boshlandi</div>
            <div className="cd-diamond">◆</div>
          </div>
        </section>

        <section className="quote-wrap">
          <div className="inner">
            <div className="quote-card">
              <div className="corners">
                <span className="tl">۞</span>
                <span className="tr">۞</span>
                <span className="bl">۞</span>
                <span className="br">۞</span>
              </div>
              <div className="quote-mark">❝</div>
              <p className="quote-text">
                Nikoh mening sunnatimdir. Kim mening sunnatimga amal qilsa, u
                mendan.
              </p>
              <div className="quote-mark">❞</div>
              <div className="quote-src">Hadisi sharif</div>
            </div>
          </div>
        </section>

        <section className="section-venue">
          <div className="sparkles">
            <span style={{ top: "6%", left: "10%" }}>✦</span>
            <span style={{ top: "10%", left: "88%" }}>✧</span>
            <span style={{ top: "85%", left: "14%" }}>✦</span>
            <span style={{ top: "80%", left: "82%" }}>✧</span>
          </div>
          <div className="inner">
            <div className="corners">
              <span className="tl">۞</span>
              <span className="tr">۞</span>
            </div>
            <p className="eyebrow">To'yxona</p>
            <div className="venue-name">Rohat to'yxonasi</div>
            <div className="venue-addr">40.38126, 70.81240</div>
            <div className="map-frame">
              <iframe
                src="https://www.google.com/maps?q=40.38126,70.81240&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <a
              className="map-btn"
              href="https://www.google.com/maps?q=40.38126,70.81240"
              target="_blank"
              rel="noopener noreferrer"
            >
              Xaritada ochish
            </a>
          </div>
        </section>

        <section className="section-family">
          <div className="inner">
            <p className="eyebrow">Hurmat va ehtirom ila</p>
            <div className="family-name cursive">Ikromiddin va Muxsinaxon</div>
            <p className="family-invite">
              bu muborak kechani siz azizlar bilan
              <br />
              birga nishonlashni iltimos etamiz
            </p>
          </div>
        </section>

        <section className="section-closing">
          <div className="inner">
            <p className="closing-translit">Barakallahu lakuma</p>
            <p className="closing-meaning">Allohning barakasi sizlarga bo'lsin</p>
            <p className="closing-text">Tashrifingizni kutib qolamiz!</p>
          </div>
        </section>
      </div>

      <style jsx global>{`
        :root {
          --cream-1: #fdf9f2;
          --cream-2: #f8f4ee;
          --cream-3: #efe8d8;
          --green: #1e5c3a;
          --green-mid: #143d27;
          --green-deep: #0f3320;
          --dark-bg: #0a2618;
          --gold: #c9a752;
          --gold-light: #e8d5a0;
          --gold-dark: #9a7830;
          --ink: #2c1f14;
          --brown: #6b5040;
        }
        * {
          box-sizing: border-box;
        }
        html,
        body {
          margin: 0;
          padding: 0;
        }
        body {
          background: var(--cream-1);
          color: var(--ink);
          font-family: "Cormorant Garamond", serif;
          overflow-x: hidden;
        }
        section {
          position: relative;
          overflow: hidden;
        }
        .inner {
          max-width: 560px;
          margin: 0 auto;
          padding: 0 24px;
          text-align: center;
          position: relative;
          z-index: 2;
        }
        .eyebrow {
          font-family: "Outfit", sans-serif;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 3.5px;
          color: var(--gold-dark);
          text-transform: uppercase;
        }
        .cursive {
          font-family: "Great Vibes", cursive;
          font-weight: 400;
          color: var(--green);
        }

        .corners {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }
        .corners span {
          position: absolute;
          color: var(--gold);
          font-size: 12px;
          opacity: 0.75;
        }
        .corners .tl {
          top: 10px;
          left: 10px;
        }
        .corners .tr {
          top: 10px;
          right: 10px;
        }
        .corners .bl {
          bottom: 10px;
          left: 10px;
        }
        .corners .br {
          bottom: 10px;
          right: 10px;
        }

        .divider {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
          margin: 18px auto;
          max-width: 280px;
        }
        .divider .line {
          flex: 1;
          height: 1px;
          background: linear-gradient(
            to right,
            transparent,
            rgba(201, 167, 82, 0.6),
            transparent
          );
        }
        .divider .orn {
          color: var(--gold);
          font-size: 15px;
        }

        .sparkles span {
          position: absolute;
          color: var(--gold);
          opacity: 0.7;
        }

        #intro {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          background: radial-gradient(
            ellipse at top,
            var(--cream-2) 0%,
            var(--cream-1) 70%
          );
          padding: 60px 24px;
          text-align: center;
          transition: opacity 0.6s ease;
        }
        #intro.open {
          opacity: 0;
          pointer-events: none;
        }
        .hero-title {
          font-family: "Great Vibes", cursive;
          font-size: 50px;
          color: var(--green);
          margin: 0;
        }
        .hero-title span {
          display: inline-block;
          opacity: 0;
          transform: translateY(8px);
          animation: letterIn 0.5s ease forwards;
        }
        @keyframes letterIn {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .hero-sub {
          font-family: "Outfit", sans-serif;
          font-size: 13px;
          letter-spacing: 4px;
          color: var(--brown);
          margin-top: 10px;
          text-transform: uppercase;
        }
        .intro-hint {
          font-family: "Outfit", sans-serif;
          margin-top: 40px;
          font-size: 11px;
          letter-spacing: 3px;
          color: var(--gold-dark);
          animation: pulse 1.8s infinite;
        }
        .mute-btn {
          position: fixed;
          top: 16px;
          right: 16px;
          z-index: 50;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: 1px solid rgba(201, 167, 82, 0.4);
          background: var(--cream-2);
          font-size: 16px;
          cursor: pointer;
          box-shadow: 0 4px 12px rgba(44, 31, 20, 0.1);
        }
        @keyframes pulse {
          0%,
          100% {
            opacity: 0.4;
          }
          50% {
            opacity: 1;
          }
        }

        .section-couple {
          background: var(--cream-1);
          padding: 80px 24px 60px;
        }
        .names {
          font-size: 54px;
          margin: 16px 0;
          line-height: 1.2;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          align-items: baseline;
        }
        .amp {
          display: inline-block;
          font-family: "Cormorant Garamond", serif;
          font-size: 16px;
          color: var(--gold-dark);
          margin: 0 12px;
        }
        .lede {
          font-size: 16px;
          color: var(--brown);
          margin-top: 4px;
        }

        .quote-wrap {
          padding: 10px 24px 60px;
          background: var(--cream-1);
        }
        .quote-card {
          position: relative;
          padding: 34px 22px;
          border: 1px solid rgba(201, 167, 82, 0.4);
          border-radius: 4px;
        }
        .quote-mark {
          font-family: "Amiri", serif;
          font-size: 24px;
          color: var(--gold);
        }
        .quote-text {
          font-style: italic;
          font-size: 16px;
          line-height: 1.75;
          color: var(--ink);
          margin: 8px 0;
        }
        .quote-src {
          font-family: "Outfit", sans-serif;
          font-size: 11px;
          letter-spacing: 2px;
          color: var(--gold-dark);
          text-transform: uppercase;
          margin-top: 10px;
        }

        .section-calendar {
          background: var(--cream-1);
          padding: 10px 24px 0;
        }
        .cal-title {
          font-family: "Cormorant Garamond", serif;
          font-weight: 600;
          font-size: 19px;
          letter-spacing: 3px;
          color: var(--green);
          text-transform: uppercase;
        }
        table.cal {
          width: 100%;
          border-collapse: collapse;
          margin-top: 22px;
        }
        table.cal th {
          font-family: "Outfit", sans-serif;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 1px;
          color: var(--gold-dark);
          padding: 6px 0;
        }
        table.cal th.weekend {
          color: var(--green);
        }
        table.cal td {
          font-size: 15px;
          padding: 9px 0;
          color: var(--ink);
        }
        table.cal td.faint {
          color: rgba(107, 80, 64, 0.35);
        }
        table.cal td.active {
          color: #fff;
          background: var(--green);
          border-radius: 50%;
          font-weight: 600;
        }
        .cal-footer {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          margin-top: 16px;
        }
        .cal-footer .orn {
          color: var(--gold);
          font-size: 14px;
        }
        .cal-footer .txt {
          font-family: "Cormorant Garamond", serif;
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 1.6px;
          color: var(--brown);
          text-transform: uppercase;
        }

        .event-card {
          position: relative;
          margin: 30px auto 60px;
          max-width: 320px;
          padding: 28px 20px;
          background: var(--cream-2);
          border: 1px solid rgba(201, 167, 82, 0.35);
          border-radius: 10px;
          box-shadow: 0 10px 30px rgba(44, 31, 20, 0.06);
        }
        .event-card h3 {
          font-family: "Cormorant Garamond", serif;
          font-weight: 600;
          font-size: 20px;
          color: var(--ink);
          margin: 0;
        }
        .event-card .time {
          font-family: "Outfit", sans-serif;
          font-size: 17px;
          font-weight: 500;
          color: var(--green);
          margin: 8px 0 2px;
        }
        .event-card .note {
          font-family: "Outfit", sans-serif;
          font-size: 12px;
          font-weight: 300;
          letter-spacing: 0.6px;
          color: var(--brown);
        }

        .section-countdown {
          background: var(--dark-bg);
          padding: 70px 24px 80px;
        }
        .section-countdown .sparkles span {
          color: var(--gold-light);
        }
        .countdown {
          display: flex;
          justify-content: center;
          gap: 14px;
          flex-wrap: wrap;
          margin-top: 10px;
        }
        .cd-box {
          position: relative;
          min-width: 70px;
          padding: 16px 10px;
          border-radius: 10px;
          background: linear-gradient(
            160deg,
            rgba(255, 255, 255, 0.05),
            rgba(255, 255, 255, 0.01)
          );
          border: 1px solid rgba(232, 213, 160, 0.25);
        }
        .cd-box .corners span {
          color: rgba(232, 213, 160, 0.75);
          font-size: 8px;
        }
        .cd-num {
          font-family: "Cormorant Garamond", serif;
          font-size: 34px;
          font-weight: 600;
          color: #fff;
        }
        .cd-lbl {
          font-family: "Outfit", sans-serif;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 1.8px;
          color: rgba(255, 255, 255, 0.7);
          text-transform: uppercase;
          margin-top: 4px;
        }
        .cd-caption {
          font-family: "Cormorant Garamond", serif;
          font-size: 15px;
          letter-spacing: 3.5px;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.9);
          margin-top: 44px;
        }
        .cd-diamond {
          color: var(--gold);
          font-size: 11px;
          margin-top: 20px;
        }

        .section-venue {
          background: linear-gradient(var(--cream-1), var(--cream-2));
          padding: 70px 24px 50px;
        }
        .section-venue .sparkles span {
          font-size: 14px;
        }
        .venue-name {
          font-family: "Cormorant Garamond", serif;
          font-weight: 600;
          font-size: 27px;
          color: var(--green);
          margin: 8px 0 4px;
        }
        .venue-addr {
          font-size: 15px;
          color: var(--brown);
        }
        .map-frame {
          margin-top: 20px;
          border-radius: 8px;
          overflow: hidden;
          border: 1px solid rgba(201, 167, 82, 0.35);
        }
        .map-frame iframe {
          width: 100%;
          height: 220px;
          border: 0;
          display: block;
        }
        .map-btn {
          font-family: "Outfit", sans-serif;
          display: inline-block;
          margin-top: 16px;
          padding: 12px 30px;
          border: 1px solid var(--gold);
          color: var(--gold-dark);
          text-decoration: none;
          font-weight: 600;
          letter-spacing: 2px;
          font-size: 12px;
          border-radius: 999px;
          transition: background 0.3s, color 0.3s;
        }
        .map-btn:hover {
          background: var(--green);
          border-color: var(--green);
          color: #fff;
        }

        .section-family {
          background: linear-gradient(var(--cream-2), var(--cream-1));
          padding: 70px 24px 20px;
        }
        .family-name {
          font-size: 46px;
          margin: 10px 0;
        }
        .family-invite {
          font-size: 16px;
          color: var(--brown);
          line-height: 1.8;
        }
        .section-closing {
          background: linear-gradient(
            var(--cream-1),
            var(--cream-3) 60%,
            var(--cream-2)
          );
          padding: 30px 24px 70px;
        }
        .closing-translit {
          font-family: "Great Vibes", cursive;
          font-size: 24px;
          color: var(--gold-dark);
          margin: 0;
        }
        .closing-meaning {
          font-size: 15px;
          color: var(--brown);
          margin-top: 6px;
        }
        .closing-text {
          font-size: 21px;
          color: var(--ink);
          margin-top: 26px;
        }
      `}</style>
    </>
  );
}
