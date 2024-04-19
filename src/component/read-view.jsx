import { Button, Stack, Typography } from "@mui/material";
import { useLocalStorage } from "usehooks-ts";

function ReadView({ chapter }) {
  const [currentLink, setCurrentLink] = useLocalStorage(
    "currentLink",
    "chapters/1497-chuong-1497-phuong-nguyen-do-kiep-1"
  );

  const [localChapters] = useLocalStorage("localChapters", []);

  const chapterInfo = localChapters.find(
    (localChapter) => localChapter.currentLink === currentLink
  );
  if (!chapterInfo || !chapterInfo.currentLink) {
    setCurrentLink("chapters/1497-chuong-1497-phuong-nguyen-do-kiep-1");
  }
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
          setCurrentLink(chapterInfo.previousLink);
        }}
        disabled={!chapterInfo.previousLink}
      >
        Chap trước
      </Button>
      <Button
        variant="outlined"
        onClick={() => {
          setCurrentLink(chapterInfo.nextLink);
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
            fontSize: 18,
            
          }}
        >
          <Typography variant="h6">{chapter.title}</Typography>
          {renderButton}
          <div dangerouslySetInnerHTML={{ __html: chapter.contentHTML }}></div>
          {renderButton}
        </div>
      )}
    </>
  );
}

export default ReadView;