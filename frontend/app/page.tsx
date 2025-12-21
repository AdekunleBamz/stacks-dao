import { ConnectButton } from "@/components/connect-button";
import { WalletProvider } from "@/components/wallet-provider";

export default function Home() {
  return (
    <WalletProvider>
      <main className="min-h-screen px-6 py-12 flex items-center justify-center">
        <section className="w-full max-w-4xl rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl px-8 py-10 shadow-[0_30px_90px_rgba(0,0,0,0.35)]">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.2em] text-white/50">Stacks DAO</p>
              <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
                Govern the treasury with your wallet
              </h1>
              <p className="text-sm text-white/70 max-w-2xl">
                A minimal interface to connect, review proposals, and push on-chain
                actions for the DAO. Wallet auth uses @stacks/connect; proposal and
                execution flows land next.
              </p>
            </div>
            <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs text-white/70">
              <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_0_6px_rgba(16,185,129,0.15)]" aria-hidden />
              MVP wiring
            </div>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 px-6 py-5 shadow-inner">
              <div className="flex items-center justify-between text-sm text-white/70">
                <span>Connect your wallet</span>
                <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-[11px] uppercase tracking-wide">Auth</span>
              </div>
              <div className="mt-4">
                <ConnectButton />
              </div>
              <p className="mt-3 text-xs text-white/50">
                Leather/Stacks wallet support; address caching respects the connect SDK
                storage helpers.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 px-6 py-5 shadow-inner">
              <div className="flex items-center justify-between text-sm text-white/70">
                <span>Upcoming</span>
                <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-[11px] uppercase tracking-wide">Roadmap</span>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-white/70">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-white/40" aria-hidden />Proposal list with status pills
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-white/40" aria-hidden />Payload preview + hash checks
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-white/40" aria-hidden />Create proposal flow (STX/FT)
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </WalletProvider>
  );
}
