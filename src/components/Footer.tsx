import { cafeInfo } from "@/data/cafe-data";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card py-8">
      <div className="container flex flex-col items-center gap-4 px-4 text-center text-sm text-muted-foreground md:flex-row md:justify-between md:px-8">
        <p>© {year} {cafeInfo.name}. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#home" className="transition-colors hover:text-primary">Home</a>
          <a href="#menu" className="transition-colors hover:text-primary">Menu</a>
          <a href="#about" className="transition-colors hover:text-primary">About</a>
          <a href="#contact" className="transition-colors hover:text-primary">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
