import styled from "styled-components";

const StickerImage = styled.img`
  width: 150px;
  height: 150px;
  position: fixed;
  bottom: 10px;
  right: 10px;
  cursor: pointer;
`;

const openLink = () => {
    window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
  };

const Sticker = () => {
  return (
      <StickerImage src="sticker.webp" alt="never surrender" onClick={openLink} />
  );
};
export default Sticker;
