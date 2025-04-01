export default function Footer() {
  return (
    <footer className="bg text-accent py-4">
      <div className="container mx-auto text-center">
        <p>
          &copy; {new Date().getFullYear()} Manthan Roadlines. All rights
          reserved.
        </p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="#" className="text-blue-400 hover:text-black">
            Privacy Policy
          </a>
          <a href="#" className="text-blue-400 hover:text-black">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}
