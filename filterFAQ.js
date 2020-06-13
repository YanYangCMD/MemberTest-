import FAQ from "./emojiList.json";

export default function filterFAQ(searchText, maxResults) {
  return FAQ
    .filter(Q => {
      if (Q.title.toLowerCase().includes(searchText.toLowerCase())) {
        return true;
      }
      if (Q.keywords.includes(searchText)) {
        return true;
      }
      return false;
    })
    .slice(0, maxResults);
}
