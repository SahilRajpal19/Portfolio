import React from 'react'
import { Box } from '@mui/material'
import {Typography} from '@mui/material'
import ProjectCardDetailed from '../../Components/CustomComponent/ProjectCardDetailed'


const projects = [
  {
    title: "SymboleoGPT",
    content:
      "Built an end-to-end automated system that generates and refines Symboleo contracts using ChatGPT-4.0, requiring only a single button click in the Eclipse IDE.",
    image:
      "https://media.licdn.com/dms/image/v2/D4E22AQEzOElbY-n06w/feedshare-shrink_800/feedshare-shrink_800/0/1719966731545?e=2147483647&v=beta&t=yfhP11lU3PJcCXDgfm4WK7CD83WdiYbSQiU0s_O3qds",
    link: "https://github.com/Smart-Contract-Modelling-uOttawa",
  },
  {
    title: "Chatty",
    content:
      "A real-time messaging application built with the MERN stack, featuring Socket.io for instant communication and online user status updates.",
    image: "chatty.jpeg",
    link: "https://realtime-chat-app-nqiu.onrender.com/",
  },
  {
    title: "BLockchain Wallet",
    content:
      "Developed a system utilizing FastAPI and Python to automatically generate user wallets. Incorporated authorization measures requiring users to log in before initiating transactions, enhancing security and user access control.",
    image:
      "blockchain.png",
    link: "https://github.com/SahilRajpal19/BLOCKCHAIN_FINAL",
  },

];


export default function Projects() {
  return (
    <div>
        <Box mt={10}>
            <Typography variant='h2' bold>
                Projects 
            </Typography>
            <ProjectCardDetailed projects={projects}/>
        </Box>
    </div>
  )
}