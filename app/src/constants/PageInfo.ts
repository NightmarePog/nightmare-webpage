import AboutMePage from "@/components/ui/pages/AboutMePage";
import ContactsPage from "@/components/ui/pages/ContactsPage";
import HomePage from "@/components/ui/pages/HomePage";
import MyProjectsPage from "@/components/ui/pages/MyProjectsPage";

export const PageInfo = [
  { title: 'Home', link: '/', pageElement: HomePage },
  { title: 'About me', link: '/AboutMe', pageElement: AboutMePage },
  { title: 'My projects', link: '/MyProjects', pageElement: MyProjectsPage },
  { title: 'Contacts', link: '/Contacts', pageElement: ContactsPage },
]
