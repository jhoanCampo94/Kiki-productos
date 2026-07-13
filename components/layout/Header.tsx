import Container from "./Container";
import HeaderLogo from "./HeaderLogo";
import HeaderSearch from "./HeaderSearch";
import HeaderActions from "./HeaderActions";

export default function Header() {
  return (
    <header className="border-b bg-background">
      <Container>
        <div className="flex h-20 items-center justify-between gap-4">
          <HeaderLogo />

          <div className="hidden flex-1 justify-center md:flex">
            <HeaderSearch />
          </div>

          <HeaderActions />
        </div>
      </Container>
    </header>
  );
}