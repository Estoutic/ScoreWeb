import styled from "styled-components";

const StickerImage = styled.img`
  width: 150px;
  height: 150px;
  position: fixed;
  bottom: 10px;
  right: 10px;
`;
const Sticker = () => {
  return (
      <StickerImage src="sticker.webp" alt="never surrender" />
  );
};
export default Sticker;
