import { v4 as uuid } from "uuid";
import { useState } from "react";

export default function EmojiClicker() {
  const [emojis, setEmojis] = useState([{ id: uuid(), emoji: "🤗" }]);

  const emojiList = ["🦄", "😘", "🐰", "🐶", "😍", "🥰", "🚀"];

  const randomEmoji = () => {
    return emojiList[Math.floor(Math.random() * emojiList.length)];
  };

  const addEmoji = () => {
    setEmojis((oldEmojis) => [
      ...oldEmojis,
      { id: uuid(), emoji: randomEmoji() },
    ]);
  };

  const deleteEmoji = (id) => {
    setEmojis((oldEmojis) => oldEmojis.filter((emoji) => emoji.id !== id));
  };

  const allLove = () => {
    setEmojis((oldEmojis) =>
      oldEmojis.map((emoji) => {
        return { ...emoji, emoji: "💖" };
      }),
    );
  };

  return (
    <div>
      {emojis.map((emoji) => (
        <span
          onClick={() => deleteEmoji(emoji.id)}
          key={emoji.id}
          style={{ fontSize: "4rem", padding: "1rem" }}
        >
          {emoji.emoji}
        </span>
      ))}

      <p>
        <button onClick={addEmoji}> Add Emoji</button> &nbsp;
        <button onClick={allLove}> All Love</button>
      </p>
    </div>
  );
}
