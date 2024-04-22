/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { Icon } from "@iconify/react";
import { useLocalStorage } from "usehooks-ts";

export function ChapterMenu() {
  const [expanded, setExpanded] = useState(false);

  const [localChapters, setLocalChapters] = useLocalStorage(
    "localChaptersTruyenChuFull",
    []
  );

  const [currentLink, setCurrentLink] = useLocalStorage(
    "currentLinkTruyenChuFull",
    "chapters-truyenchufull/1220-chuong-1220-thu-195-chuong-gioi-bich-phuc-kich"
  );

  // Function to toggle the expansion state
  const handleToggleExpansion = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };

  useEffect(() => {
    const fetchChapters = async () => {
      try {
        const response = await fetch(
          "chapters-truyenchufull/chapter-list.json"
        );
        const data = await response.json();
        setLocalChapters(data);
      } catch (error) {
        console.error("Error fetching chapters:", error);
      }
    };

    // Call the fetchChapters function when the component mounts
    if (localChapters.length === 0) {
      fetchChapters();
    }
  }, []);

  // Function to handle click on a list item
  const handleListItemClick = (chapter) => {
    setCurrentLink(chapter.currentLink);
    setExpanded(false);
    console.log("Clicked on:", chapter);
    // Add your logic here to handle the click event for the chapter
  };

  return (
    <Accordion
      expanded={expanded}
      onChange={handleToggleExpansion}
      sx={{
        height: expanded ? "50vh" : "56px",
        overflowY: "auto",
        position: "relative",
      }}
    >
      <AccordionSummary
        expandIcon={<Icon icon="ic:baseline-expand-more" />}
        sx={{
          position: "sticky",
          top: 0,
          zIndex: 1,
          backgroundColor: "white",
        }}
      >
        <ListItemText primary="Chapter List" />
      </AccordionSummary>
      <AccordionDetails
        sx={{
          padding: 0,
        }}
      >
        <List>
          {localChapters.map((chapter) => (
            <ListItem key={chapter.currentLink}>
              <ListItemButton
                autoFocus={chapter.currentLink == currentLink}
                onClick={() => handleListItemClick(chapter)} // Attach click handler
              >
                <ListItemText primary={`${chapter.title}`} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </AccordionDetails>
    </Accordion>
  );
}
