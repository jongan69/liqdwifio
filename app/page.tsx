"use client"
import Image from "next/image";
import { useEffect, useState } from "react";
import RainingMoneyBackground from "./components/three/RainingMoney";
import { Canvas } from "@react-three/fiber";
import { Footer } from "./components/footer";
import { SiteData } from '../config'

// const nfttokenAddress = `GrRjEpwHbLE1KY3uxtAMU4ravHfbMGzWEL8HcERPb3Ad` // Prob using weird endpoint of api
const coinMintAddres = SiteData.coinMintAddres

export default function Home() {
  const [floorPrice, setFloorPrice] = useState<any>();
  const [tokenPrice, setTokenPrice] = useState<any>();

  const fetchFloorPrice = async (tokenAddress: string) => {
    const response = await fetch(`/api/floor`, { method: "POST", body: JSON.stringify({ tokenAddress }) });
    const price = (await response.json())?.uiFormmatted;
    return price;
  };

  const fetchTokenPrice = async (tokenAddress: string) => {
    const response = await fetch(`/api/quote`, { method: "POST", body: JSON.stringify({ "outputMint": tokenAddress }) });
    const price = (await response.json())?.usdValue;
    return price;
  };

  useEffect(() => {
    // const fp = fetchFloorPrice(nfttokenAddress);
    const tp = fetchTokenPrice(coinMintAddres);
    // if (fp) setFloorPrice(fp);
    if (tp) setTokenPrice(tp);
  }, [coinMintAddres]);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex z-10">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Welcome to&nbsp;
          <code className="font-mono font-bold">{SiteData.name}</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
          <a
            className="pointer-events-auto flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href={SiteData.raydiumUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {SiteData.raydiumButtonMessage}
          </a>
        </div>
      </div>

      <div className="relative z-0 flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
          src={SiteData.image}
          alt={SiteData.description}
          width={180}
          height={37}
          priority
        />
        <div className="flex flex-col">
          <br />
          <code className="font-mono font-bold">{SiteData.name} Price: ${tokenPrice}</code>
        </div>
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
        <a
          href={SiteData.buttonOneLink}
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            {SiteData.buttonOneTopic}{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            {SiteData.buttonOneMessage}
          </p>
        </a>

        <a
          href={SiteData.buttonTwoLink}
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            {SiteData.buttonTwoTopic}{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            {SiteData.buttonTwoMessage}&nbsp;
          </p>
        </a>

        <a
          href={SiteData.buttonThreeLink}
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            {SiteData.buttonThreeTopic}{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            {SiteData.buttonThreeMessage}
          </p>
        </a>

        <a
          href={SiteData.buttonFourLink}
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            {SiteData.buttonFourTopic}{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-balance text-sm opacity-50">
          {SiteData.buttonFourMessage}
          </p>
        </a>
      </div>

      <div className="relative z-0 flex flex-col items-center mt-24">
        <h2 className="mb-3 text-3xl font-semibold">
          {SiteData.featuresTitle}{" "}
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </h2>
        <ul className="mt-6 text-center max-w-[30ch] text-sm opacity-50">
          <li className="mb-4">✔️ {SiteData.featuresPoint1}</li>
          <li className="mb-4">✔️ {SiteData.featuresPoint2}</li>
          <li className="mb-4">✔️ {SiteData.featuresPoint3}</li>
          <li className="mb-4">✔️ {SiteData.featuresPoint4}</li>
          <li className="mb-4">✔️ {SiteData.featuresPoint5}</li>
          <li className="mb-4">✔️ {SiteData.featuresPoint6}</li>
          <li className="mb-4">✔️ {SiteData.featuresPoint7}</li>
          <li className="mb-4">✔️ {SiteData.featuresPoint8}</li>
        </ul>
      </div>
      <Footer opensourced={SiteData.footerMessage1} opensourcedlink={SiteData.footerMessage1Link} poweredby={SiteData.footerMessage2} poweredbylink={SiteData.footerMessage2Link} />
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}>
      <video autoPlay loop muted style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: -3 }}>
          <source src="/background.mov" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <Canvas>
          <RainingMoneyBackground />
        </Canvas>
      </div>
    </main>
  );
}
