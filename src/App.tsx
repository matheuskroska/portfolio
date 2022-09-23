import {
  DiscordLogoIcon,
  EnvelopeClosedIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from '@radix-ui/react-icons';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
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
        <LinkedInLogoIcon />
        <TwitterLogoIcon />
        <DiscordLogoIcon />
        <EnvelopeClosedIcon />
      </Footer>
    </HashRouter>
  );
}
