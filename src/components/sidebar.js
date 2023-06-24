'use client';
import '../App.css'
import { Sidebar } from 'flowbite-react';
import React from 'react';
import { HiArrowSmRight, HiOutlinePuzzle, HiOutlinePhotograph, HiShoppingBag, HiTable, HiUser, HiOutlineMusicNote } from 'react-icons/hi';
import { AiOutlineGithub } from "react-icons/ai";

export default function DefaultSidebar() {
  return (

    <Sidebar aria-label="Default sidebar example">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item
            href="https://deluxe-sundae-9d1106.netlify.app/"
            target='_blank'
            icon={HiOutlinePuzzle}
          >
            <p>
              Create Book Title/Cover
            </p>
          </Sidebar.Item>
          <Sidebar.Item
            href="https://lucky-druid-9a47e5.netlify.app/"
            target="_blank"
            icon={HiOutlineMusicNote}
            label="Pro"
            labelColor="purple"
          >
            <p>
              React Music Player
            </p>
          </Sidebar.Item>
          <Sidebar.Item
            href="https://stellar-raindrop-7afac9.netlify.app/"
            targe='_blank'
            icon={HiOutlinePhotograph}
            label="API"
            labelColor="purple"
          >
            <p>
              Image Search Engine
            </p>
          </Sidebar.Item>
          <Sidebar.Item
            href="https://github.com/ysksadboy"
            target='_blank'
            icon={AiOutlineGithub}
          >
            <p>
              GitHub
            </p>
          </Sidebar.Item>
          <Sidebar.Item
            href="https://www.linkedin.com/feed/"
            target='_blank'
            icon={HiArrowSmRight}
          >
            <p>
              linkedIn
            </p>
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  )
}

