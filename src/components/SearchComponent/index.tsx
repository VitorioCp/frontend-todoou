import { Input, InputContainer, SearchIcon } from "../../pages/Login/style";
import { Nav } from "../../pages/Tasks/style";

interface SearchComponentProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export const SearchComponent = ({
  searchQuery,
  setSearchQuery,
}: SearchComponentProps) => {
  return (
    <Nav>
      <InputContainer>
        <SearchIcon />
        <Input
          value={searchQuery}
          type="search"
          placeholder="Pesquise por..."
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </InputContainer>
    </Nav>
  );
};
