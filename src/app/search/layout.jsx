import SearchResultPageHeader from "@/components/SearchResultPageHeader";
import "../globals.css";

export default function SearchResultPage({ children }) {
  return (
    <div>
      <SearchResultPageHeader />
      {children}
    </div>
  );
}
