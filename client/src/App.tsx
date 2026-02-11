import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";

// Lazy-loaded pages for code splitting
const ActiGelPage = lazy(() => import("./pages/ActiGelPage"));
const FemiWashPage = lazy(() => import("./pages/FemiWashPage"));
const LiquiGelPage = lazy(() => import("./pages/LiquiGelPage"));
const FloraPlusPage = lazy(() => import("./pages/FloraPlusPage"));
const BlogPage = lazy(() => import("./pages/BlogPage"));
const BlogArticlePage = lazy(() => import("./pages/BlogArticlePage"));
const QuizPage = lazy(() => import("./pages/QuizPage"));

function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-cream">
      <div className="flex flex-col items-center gap-4">
        <div className="w-10 h-10 border-3 border-teal border-t-transparent rounded-full animate-spin" />
        <p className="text-sm text-foreground/50 font-['Noto_Sans']">Loading...</p>
      </div>
    </div>
  );
}

function Router() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Switch>
        <Route path={"/"} component={Home} />
        <Route path={"/products/actigel"} component={ActiGelPage} />
        <Route path={"/products/femiwash"} component={FemiWashPage} />
        <Route path={"/products/liquigel"} component={LiquiGelPage} />
        <Route path={"/products/floraplus"} component={FloraPlusPage} />
        <Route path={"/blog"} component={BlogPage} />
        <Route path={"/blog/:slug"} component={BlogArticlePage} />
        <Route path={"/quiz"} component={QuizPage} />
        <Route path={"/404"} component={NotFound} />
        {/* Final fallback route */}
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
