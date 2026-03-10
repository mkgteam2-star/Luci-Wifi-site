import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";

const NotFound = () => (
  <>
    <SEOHead title="Page Not Found" description="The page you're looking for doesn't exist." />
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="text-center space-y-4">
        <h1 className="text-6xl font-heading font-extrabold text-primary">404</h1>
        <p className="text-xl text-muted-foreground">Oops! This page doesn't exist.</p>
        <Link to="/">
          <Button className="font-heading font-semibold">Back to Home</Button>
        </Link>
      </div>
    </div>
  </>
);

export default NotFound;
