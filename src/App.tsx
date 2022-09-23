import {
  DiscordLogoIcon,
  EnvelopeClosedIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from '@radix-ui/react-icons';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { Footer } from './components/Footer';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export function WrappedApp() {
  return (
    <HashRouter>
      <App />
      <Footer>
        <a href="https://www.linkedin.com/in/matheus-kroska/" target="_blank">
          <LinkedInLogoIcon />
        </a>
        <TwitterLogoIcon />
        <DiscordLogoIcon />
        <a href="mailto:kroskamatheus@gmail.com">
          <EnvelopeClosedIcon />
        </a>
      </Footer>
    </HashRouter>
  );
}
