/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Button, Stack, Typography } from "@mui/material";
import { useLocalStorage } from "usehooks-ts";

// eslint-disable-next-line react/prop-types
function ReadView({ chapter }) {
  const [currentLink, setCurrentLink] = useLocalStorage(
    "currentLinkTruyenChuFull",
    "chapters-truyenchufull/1220-chuong-1220-thu-195-chuong-gioi-bich-phuc-kich"
  );

  const [localChapters] = useLocalStorage("localChaptersTruyenChuFull", []);

  const chapterInfo = localChapters.find(
    (localChapter) => localChapter.currentLink === currentLink
  );

  const renderButton = (
    <Stack
      spacing={2}
      direction="row"
      justifyContent="space-between"
      sx={{ marginTop: "10px" }}
    >
      <Button
        variant="outlined"
        onClick={() => {
          setCurrentLink(chapterInfo?.previousLink);
        }}
        disabled={!chapterInfo?.previousLink}
      >
        Chap trước
      </Button>
      <Button
        variant="outlined"
        onClick={() => {
          setCurrentLink(chapterInfo?.nextLink);
        }}
      >
        Chap sau
      </Button>
    </Stack>
  );
  return (
    <>
      {chapterInfo && (
        <div
          style={{
            fontSize: 20,
          }}
        >
          {renderButton}
          <Typography variant="h6">{chapter.title}</Typography>
          <div dangerouslySetInnerHTML={{ __html: chapter.contentHTML }}></div>
          {renderButton}
        </div>
      )}
    </>
  );
}

export default ReadView;
