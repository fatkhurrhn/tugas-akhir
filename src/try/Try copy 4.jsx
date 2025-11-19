// src/pages/MatchFruits.jsx
import React, { useState } from "react";

/** ===== PALET ===== */
const PALET = {
  primary: "#355485",
  dark: "#2a436c",
  accent: "#4f90c6",
  soft: "#90b6d5",
  pale: "#cbdde9",
  bg: "#f9fafb",
  gray: "#6b7280",
  border: "#e5e7eb",
};

/** ===== DATA BUAH (emoji offline) ===== */
const FRUITS = [
  { id: "apel", label: "Apel", icon: "🍎" },
  { id: "pisang", label: "Pisang", icon: "🍌" },
  { id: "ceri", label: "Ceri", icon: "🍒" },
  { id: "jeruk", label: "Jeruk", icon: "🍊" },
  { id: "semangka", label: "Semangka", icon: "🍉" },
  { id: "anggur", label: "Anggur", icon: "🍇" },
  { id: "nanas", label: "Nanas", icon: "🍍" },
  { id: "strawberi", label: "Stroberi", icon: "🍓" },
  { id: "kiwi", label: "Kiwi", icon: "🥝" },
  { id: "persik", label: "Persik", icon: "🍑" },
  { id: "mangga", label: "Mangga", icon: "🥭" },
  { id: "pir", label: "Pir", icon: "🍐" },
  { id: "blueberry", label: "Blueberry", icon: "🫐" },
  { id: "durian", label: "Durian", icon: "🌰" }, // proxy emoji
  { id: "lemon", label: "Lemon", icon: "🍋" },
];

/** ===== UTILS ===== */
const shuffle = (arr) => [...arr].sort(() => Math.random() - 0.5);

/** ===== BOARD (30 kartu: 15 pasang) ===== */
function createBoard() {
  const pairs = FRUITS.flatMap((f) => [{ ...f }, { ...f }]); // 30
  const mixed = shuffle(pairs).map((fruit, idx) => ({
    key: `card-${idx}`,
    number: idx + 1, // 1..30
    fruitId: fruit.id,
    fruitLabel: fruit.label,
    fruitIcon: fruit.icon,
    flipped: false,
    matched: false,
  }));
  return mixed;
}

export default function MatchFruits() {
  const [board, setBoard] = useState(createBoard);
  const [firstPick, setFirstPick] = useState(null);   // index
  const [secondPick, setSecondPick] = useState(null); // index
  const [lock, setLock] = useState(false);
  const [moves, setMoves] = useState(0);
  const [matches, setMatches] = useState(0);
  const [inputNum, setInputNum] = useState("");

  const resetGame = () => {
    setBoard(createBoard());
    setFirstPick(null);
    setSecondPick(null);
    setLock(false);
    setMoves(0);
    setMatches(0);
    setInputNum("");
  };

  const flipCard = (idx) => {
    if (lock) return;
    if (board[idx].flipped || board[idx].matched) return;

    const newBoard = board.map((c, i) => (i === idx ? { ...c, flipped: true } : c));
    setBoard(newBoard);

    if (firstPick === null) {
      setFirstPick(idx);
      return;
    }

    if (secondPick === null && idx !== firstPick) {
      setSecondPick(idx);
      setLock(true);

      setTimeout(() => {
        const a = newBoard[firstPick];
        const b = newBoard[idx];

        if (a.fruitId === b.fruitId) {
          // match
          const updated = newBoard.map((c, i) =>
            i === firstPick || i === idx ? { ...c, matched: true } : c
          );
          setBoard(updated);
          setMatches((m) => m + 1);
        } else {
          // tutup lagi
          const updated = newBoard.map((c, i) =>
            i === firstPick || i === idx ? { ...c, flipped: false } : c
          );
          setTimeout(() => setBoard(updated), 120);
        }

        setMoves((mv) => mv + 1);
        setFirstPick(null);
        setSecondPick(null);
        setLock(false);
      }, 450);
    }
  };

  const flipByNumber = () => {
    const num = Number(inputNum);
    if (!Number.isInteger(num) || num < 1 || num > 30) return;
    const idx = board.findIndex((c) => c.number === num);
    if (idx >= 0) flipCard(idx);
    setInputNum("");
  };

  const allMatched = matches === 15;

  // ukuran kartu kecil & square
  const CARD_SIZE = "clamp(64px, 12vw, 110px)";

  return (
    <div className="min-h-screen px-4 py-6" style={{ background: PALET.bg }}>
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header */}
        <header className="text-center space-y-2">
          <div
            className="mx-auto w-14 h-14 rounded-xl grid place-items-center text-white shadow"
            style={{ background: PALET.primary }}
          >
            <i className="ri-shapes-line text-xl" />
          </div>
          <h1 className="text-2xl md:text-3xl font-bold" style={{ color: PALET.dark }}>
            Cocokkan Buah — Memory Match Kelas
          </h1>
          <p className="text-sm" style={{ color: PALET.gray }}>
            Depan kartu: <b>angka 1–30</b>. Belakang: <b>ikon buah</b>. Buka dua yang sama!
          </p>
        </header>

        {/* Panel Guru */}
        <section
          className="rounded-2xl bg-white p-4"
          style={{ border: `1px solid ${PALET.border}` }}
        >
          <div className="flex flex-wrap items-end gap-3">
            <div>
              <label className="block text-sm" style={{ color: PALET.gray }}>
                Buka kartu nomor…
              </label>
              <input
                type="number"
                min={1}
                max={10}
                value={inputNum}
                onChange={(e) => setInputNum(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && flipByNumber()}
                className="mt-1 w-32 rounded-lg border px-3 py-2"
                style={{ borderColor: PALET.border }}
                placeholder="1–30"
              />
            </div>
            <button
              onClick={flipByNumber}
              className="rounded-lg px-4 py-2 font-semibold text-white"
              style={{ background: PALET.primary }}
            >
              Buka
            </button>
            <button
              onClick={resetGame}
              className="rounded-lg px-4 py-2 border"
              style={{ color: PALET.primary, borderColor: PALET.border, background: "white" }}
            >
              Acak Ulang
            </button>

            <div className="ml-auto text-sm">
              <span style={{ color: PALET.gray }}>
                Langkah: <b style={{ color: PALET.dark }}>{moves}</b> • Pasangan:{" "}
                <b style={{ color: PALET.dark }}>{matches}/15</b>
              </span>
            </div>
          </div>
        </section>

        {/* Grid 6 kolom (square kecil) */}
        <section
          className="grid gap-3 justify-items-center"
          style={{
            gridTemplateColumns: "repeat(6, minmax(0, 1fr))",
          }}
        >
          {board.map((card, idx) => {
            const faceUp = card.flipped || card.matched;
            return (
              <button
                key={card.key}
                onClick={() => flipCard(idx)}
                disabled={card.matched}
                className="relative rounded-lg border shadow transition transform active:scale-95 overflow-hidden"
                style={{
                  borderColor: PALET.border,
                  background: "white",
                  width: CARD_SIZE,
                  height: CARD_SIZE, // square
                }}
                aria-label={`Kartu nomor ${card.number}`}
              >
                {/* FRONT (angka) */}
                <div
                  className={`absolute inset-0 grid place-items-center transition-opacity duration-200 ${faceUp ? "opacity-0" : "opacity-100"
                    }`}
                  style={{ color: PALET.primary, fontWeight: 800, fontSize: "1.5rem" }}
                >
                  {card.number}
                </div>

                {/* BACK (buah) */}
                <div
                  className={`absolute inset-0 grid place-items-center transition-opacity duration-200 ${faceUp ? "opacity-100" : "opacity-0"
                    }`}
                  style={{ background: PALET.pale }}
                >
                  <div style={{ fontSize: "1.8rem" }}>{card.fruitIcon}</div>
                  <div className="mt-0.5 text-xs font-medium" style={{ color: PALET.dark }}>
                    {card.fruitLabel}
                  </div>
                </div>

                {/* Highlight saat matched */}
                {card.matched && (
                  <div className="absolute inset-0 ring-4 ring-green-300 rounded-lg pointer-events-none" />
                )}
              </button>
            );
          })}
        </section>

        {/* Selesai */}
        {allMatched && (
          <section
            className="rounded-2xl p-4 text-center bg-white"
            style={{ border: `1px solid ${PALET.border}` }}
          >
            <h2 className="text-2xl font-bold" style={{ color: PALET.dark }}>
              Keren! Semua pasangan ditemukan 🎉
            </h2>
            <p className="text-sm mt-1" style={{ color: PALET.gray }}>
              Total langkah: <b style={{ color: PALET.dark }}>{moves}</b>
            </p>
            <button
              onClick={resetGame}
              className="mt-3 rounded-lg px-5 py-2.5 font-semibold text-white"
              style={{ background: PALET.primary }}
            >
              Main Lagi
            </button>
          </section>
        )}

        <footer className="pt-2 text-center text-xs" style={{ color: PALET.gray }}>
          © {new Date().getFullYear()} — Memory Match Buah • 30 kartu • Grid 6×5 • Square kecil
        </footer>
      </div>
    </div>
  );
}
