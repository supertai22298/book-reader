import { atom } from "recoil";

const readViewState = atom({
  key: "readViewState", // unique ID (with respect to other atoms/selectors)
  default: {
    currentChapter: {
      href: "/reader/co-chan-nhan/imeb",
      title: "Chương 1743: Vũ gia phân tranh (1)",
      author: "chienthanlubu",
      slug: {},
      chapterNumber: 1743,
      previousLink: "chapters/1742-chuong-1742-dai-the-nam-cuong",
      currentLink: "chapters/1743-chuong-1743-vu-gia-phan-tranh-1",
      nextLink: "chapters/1744-chuong-1744-vu-gia-phan-tranh-2",
    },
  }, // default value (aka initial value)
});

export default readViewState;
