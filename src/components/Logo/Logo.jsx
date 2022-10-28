import { LogoLink } from "./Logo.styled";

export const Logo = () => {
  return (
    <nav>
      <LogoLink href={process.env.PUBLIC_URL}>
        <h1>PixelSqueeze</h1>
      </LogoLink>
    </nav>
  );
};
