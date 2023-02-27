import Head from "next/head"
import Image from "next/image"
import styles from "@/styles/Home.module.css"
// import ManualHeader from "../components/ManualHeader.jsx"
import Header from "../components/Header"
import LotteryEntrance from "@/components/LotteryEntrance"

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Smart Contract Raffle</title>
                <meta name="description" content="My Smart Contract Raffle" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {/* <ManualHeader /> */}
            <Header />
            <LotteryEntrance />
        </div>
    )
}
