/* eslint-disable no-unused-vars */
import React, { useRef } from "react";
import { ChapterMenu } from "./component/chapter-menu";
import { Paper } from "@mui/material";
import ReadView from "./component/read-view";
import { useEffect, useState } from "react";
import { useLocalStorage } from "usehooks-ts";

function App() {
  const [chapter, setChapter] = useState({});

  const [currentLink] = useLocalStorage(
    "currentLinkTruyenChuFull",
    "chapters-truyenchufull/1220-chuong-1220-thu-195-chuong-gioi-bich-phuc-kich"
  );

  const contentRef = useRef(null);
  // Scroll to top when chapter changes
  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.scrollTop = 0;
    }
  }, [currentLink]);

  useEffect(() => {
    const fetchChapter = async () => {
      try {
        const response = await fetch(`${currentLink}.json`);
        const data = await response.json();
        setChapter(data);
      } catch (error) {
        console.error("Error fetching chapters:", error);
      }
    };

    // Call the fetchChapters function when the component mounts
    fetchChapter();
  }, [currentLink]);

  return (
    <>
      <Paper
        sx={{
          width: "100vw", // Set width to 90vw for mobile, otherwise 100vw
          height: "100vh", // Set height to 90vh for mobile, otherwise 100vh
          margin: "0 auto",
          overflowX: "hidden",
          backgroundColor: "#EDD1B0",
          padding: "16px",
        }}
        ref={contentRef}
      >
        <ChapterMenu />
        <ReadView chapter={chapter} />
      </Paper>
    </>
  );
}

export default App;
