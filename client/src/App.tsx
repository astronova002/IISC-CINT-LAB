import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import NotFound from "@/pages/not-found";
import About from "@/pages/about";
// About subpages
import AboutChairperson from "@/pages/about/chairperson.tsx";
import AboutHistory from "@/pages/about/history.tsx";
import AboutOpportunities from "@/pages/about/opportunities.tsx";
// Chief Scientist
import ChiefScientist from "@/pages/chief-scientist.tsx";
// People and subpages
// Research and subpages
import Research from "@/pages/research/index";
import ResearchFacilities from "@/pages/research/facilities";
import ResearchReports from "@/pages/research/reports";
import ResearchProjectsNotFound from "./pages/research/projects";
import News from "@/pages/news";
import Contact from "@/pages/contact/index";
import ContactChiefScientist from "@/pages/contact/chief-scientist.tsx";
import ContactReaching from "@/pages/contact/reaching";
import ContactContactInfo from "@/pages/contact/contact-info.tsx";
import ContactFeedback from "@/pages/contact/feedback.tsx";
import EngageWithLab from "@/pages/engage";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/about/chairperson" component={AboutChairperson} />
      <Route path="/about/history" component={AboutHistory} />
      <Route path="/about/opportunities" component={AboutOpportunities} />
      <Route path="/chief-scientist" component={ChiefScientist} />
      <Route path="/research" component={Research} />
      {/* <Route path="/research/streams" component={ResearchStreams} /> */}
      <Route path="/research/facilities" component={ResearchFacilities} />
      <Route path="/research/reports" component={ResearchReports} />
      <Route path="/research/projects" component={ResearchProjectsNotFound} />
      <Route path="/news" component={News} />
      <Route path="/contact" component={Contact} />
      <Route path="/contact/chief-scientist" component={ContactChiefScientist} />
      <Route path="/contact/reaching" component={ContactReaching} />
      <Route path="/contact/contact-info" component={ContactContactInfo} />
      <Route path="/contact/feedback" component={ContactFeedback} />
      <Route path="/engage" component={EngageWithLab} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
