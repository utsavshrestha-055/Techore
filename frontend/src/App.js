import 'bootstrap/dist/css/bootstrap.min.css';

import * as React from 'react';

import { Box, ChakraProvider } from '@chakra-ui/react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import About from './components/About';
import Admin_login from "./components/Auth/UI/Admin/login";
import Admin_page from './components/Admin/Admin_page';
import Admin_signup from "./components/Auth/UI/Admin/signup";
//Jobs
import Backend from './components/Career/EachCareer/backend-intern';
import Blogs from './components/Blogs';
import Blogs1 from './components/Blogs/blogs-storage/blogs_1';
import Blogs2 from './components/Blogs/blogs-storage/blogs_2';
import Blogs3 from './components/Blogs/blogs-storage/blogs_3';
import Blogs4 from './components/Blogs/blogs-storage/blogs_4';
import Blogs5 from './components/Blogs/blogs-storage/blogs_5';
import Blogs6 from './components/Blogs/blogs-storage/blogs_6';
import Blogs7 from './components/Blogs/blogs-storage/blogs_7';
import Career from './components/Career';
// BLOGS
import Client_login from './components/Auth/UI/Client/login';
import Client_signup from "./components/Auth/UI/Client/signup";
import Contact from './components/Contact';
import DataVisualization from './components/Services/services_single_page/datavisualization';
import DigitalMarketing from './components/Services/services_single_page/digital-marketing-and-seo';
import Footer from './components/Footer';
import Frontend from './components/Career/EachCareer/frontend-intern';
import Get_in_touch from './components/Get-in-touch/Get_in_touch';
import GoToTopButton from './goTop';
import Home from './components/Home';
import Hosting from './components/Services/services_single_page/hosting';
import ItOutsourcing from './components/Services/services_single_page/it_outsourcing';
import MobDevelopment from './components/Services/services_single_page/mobile_development';
import Navbar from './components/Navbar';
import NotFound from './components/Pages/notfound';
import PrivacyPolicy from './components/Pages/privacy';
import ScrollToTop from './scrolltotop';
import SoftwareDevelopment from './components/Services/services_single_page/software_development';
import Team from './components/Team';
import Training from './components/Services/services_single_page/training';
// SERVICES
import WebDevelopment from './components/Services/services_single_page/web_development';

const App = () => {
  return (
    <ChakraProvider>
      <Router>
        <Box
          display="flex"
          flexDirection="column"
          minHeight="calc(100vh - 67px)"
        >
          <Navbar />
          <ScrollToTop />
          <Routes>
            <Route path="/client/login" element={<Client_login />} />
            <Route path="/client/signup" element={<Client_signup />} />
            <Route path="/admin/login" element={<Admin_login />} />
            <Route path="/admin/" element={<Admin_login />} />
            <Route path="/client/signup" element={<Admin_signup />} />
            <Route path="/admin/visits" element={<Admin_page />} />
            <Route path="/admin/dashboard" element={<Admin_page />} />
            <Route path="/admin/appointments" element={<Admin_page />} />
            <Route path="/admin/blogs" element={<Admin_page />} />
            <Route path="/admin/interships" element={<Admin_page />} />
            <Route path="/admin/projects_management" element={<Admin_page />} />

            <Route exact path="/" element={<Home />} />
            <Route path="/about-us" element={<About />} />

            {/* Careers */}
            <Route path="/careers" element={<Career />} />
            <Route path="/careers/frontend" element={<Frontend />} />
            <Route path="/careers/backend" element={<Backend />} />

            {/* Services */}

            <Route
              path="/services/website-development"
              element={<WebDevelopment />}
            />
            <Route
              path="/services/software-development"
              element={<SoftwareDevelopment />}
            />
            <Route
              path="/services/mobile-development"
              element={<MobDevelopment />}
            />
            <Route
              path="/services/it-outsourcing"
              element={<ItOutsourcing />}
            />
            <Route
              path="/services/digital-marketing-and-seo"
              element={<DigitalMarketing />}
            />
            <Route path="/services/hosting" element={<Hosting />} />
            <Route path="/services/training" element={<Training />} />
            <Route
              path="/services/data-analytics-and-visualization"
              element={<DataVisualization />}
            />

            <Route path="/team" element={<Team />} />

            {/* BLOGS */}
            <Route path="/blogs" element={<Blogs />} />
            <Route
              path="/blogs/agile-methodologies-and-their-benefits-in-software-development"
              element={<Blogs1 />}
            />
            <Route path="/blogs/importance-of-ui-ux" element={<Blogs2 />} />
            <Route
              path="/blogs/future-of-web-development"
              element={<Blogs3 />}
            />
            <Route
              path="/blogs/devOps-and-CI-CD-in-software-development"
              element={<Blogs4 />}
            />
            <Route
              path="/blogs/remote-work-post-pandemic"
              element={<Blogs5 />}
            />
            <Route
              path="/blogs/artificial-intelligence-and-machine-learning"
              element={<Blogs6 />}
            />
            <Route
              path="/blogs/data-analytics-visualization-and-business-intelligence"
              element={<Blogs7 />}
            />

            <Route path="/contact-us" element={<Contact />} />

            <Route path="/get-in-touch/dashboard" element={<Get_in_touch />} />
            <Route
              path="/get-in-touch/appointment"
              element={<Get_in_touch />}
            />
            <Route path="/get-in-touch/visit" element={<Get_in_touch />} />
            <Route path="/get-in-touch/intership" element={<Get_in_touch />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <GoToTopButton />
        </Box>
        <Footer />
      </Router>
    </ChakraProvider>
  );
};
export default App;
