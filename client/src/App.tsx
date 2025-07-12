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
import People from "@/pages/people/index";
import PeopleFaculty from "@/pages/people/faculty.tsx";
import PeopleInterns from "@/pages/people/interns.tsx";
import PeopleResearchers from "@/pages/people/researchers.tsx";
import PeopleCommittee from "@/pages/people/committee.tsx";
import PeopleStaff from "@/pages/people/staff.tsx";
import PeopleAlumni from "@/pages/people/alumni.tsx";
// Research and subpages
import Research from "@/pages/research/index";
import ResearchSpecialInterests from "@/pages/research/special-interests";
import ResearchFacilities from "@/pages/research/facilities";
import ResearchReports from "@/pages/research/reports";
import News from "@/pages/news";
import Contact from "@/pages/contact/index";
import ContactChiefScientist from "@/pages/contact/chief-scientist.tsx";
import ContactReaching from "@/pages/contact/reaching";
import ContactContactInfo from "@/pages/contact/contact-info.tsx";
import ContactVisitorInfo from "@/pages/contact/visitor-info.tsx";
import ContactFeedback from "@/pages/contact/feedback.tsx";
import AdminDashboard from "@/pages/admin";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/about/chairperson" component={AboutChairperson} />
      <Route path="/about/history" component={AboutHistory} />
      <Route path="/about/opportunities" component={AboutOpportunities} />
      <Route path="/chief-scientist" component={ChiefScientist} />
      <Route path="/people" component={People} />
      <Route path="/people/faculty" component={PeopleFaculty} />
      <Route path="/people/interns" component={PeopleInterns} />
      <Route path="/people/researchers" component={PeopleResearchers} />
      <Route path="/people/committee" component={PeopleCommittee} />
      <Route path="/people/staff" component={PeopleStaff} />
      <Route path="/people/alumni" component={PeopleAlumni} />
      <Route path="/research" component={Research} />
      {/* <Route path="/research/streams" component={ResearchStreams} /> */}
      <Route path="/research/special-interests" component={ResearchSpecialInterests} />
      <Route path="/research/facilities" component={ResearchFacilities} />
      <Route path="/research/reports" component={ResearchReports} />
      <Route path="/news" component={News} />
      <Route path="/contact" component={Contact} />
      <Route path="/contact/chief-scientist" component={ContactChiefScientist} />
      <Route path="/contact/reaching" component={ContactReaching} />
      <Route path="/contact/contact-info" component={ContactContactInfo} />
      <Route path="/contact/visitor-info" component={ContactVisitorInfo} />
      <Route path="/contact/feedback" component={ContactFeedback} />
      <Route path="/admin" component={AdminDashboard} />
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
